import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';
import pool, { initWaitlistTable } from '@/lib/db';
import { rateLimit, isNonceUsed, markNonceUsed, isRedisConfigured } from '@/lib/rate-limit';
import { verifyTurnstileToken, isTurnstileConfigured } from '@/lib/turnstile';
import { processEmail, isValidEmail } from '@/lib/email';

// Challenge timing constraints
const CHALLENGE_MIN_AGE_MS = 2000; // 2 seconds minimum
const CHALLENGE_MAX_AGE_MS = 600000; // 10 minutes maximum
const NONCE_TTL_SECONDS = 600; // 10 minutes

// Rate limiting config
const RATE_LIMIT_WINDOW = 60; // 60 seconds
const RATE_LIMIT_MAX_REQUESTS = 5;

/**
 * Get HMAC secret at runtime (not module load time)
 */
function getHmacSecret(): string | undefined {
  return process.env.WAITLIST_HMAC_SECRET;
}

interface ChallengePayload {
  nonce: string;
  issuedAt: number;
  sig: string;
}

interface WaitlistRequestBody {
  email: string;
  website?: string; // Honeypot field
  turnstileToken?: string;
  challenge?: ChallengePayload;
}

/**
 * Extract client IP from request with Vercel-aware fallbacks
 */
function getClientIp(request: NextRequest): string | null {
  // Vercel provides request.ip in production
  // @ts-expect-error - request.ip exists on Vercel but not in types
  if (request.ip) {
    // @ts-expect-error - request.ip exists on Vercel but not in types
    return request.ip;
  }

  // Fallback to x-forwarded-for (first IP in chain)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const firstIp = forwarded.split(',')[0].trim();
    if (firstIp) return firstIp;
  }

  // Fallback to x-real-ip
  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp;

  return null;
}

/**
 * Verify HMAC signature of challenge token
 */
function verifyChallengeSig(nonce: string, issuedAt: number, sig: string, secret: string): boolean {
  const payload = `${nonce}:${issuedAt}`;
  const expectedSig = createHmac('sha256', secret).update(payload).digest('hex');
  
  // Timing-safe comparison
  if (sig.length !== expectedSig.length) return false;
  
  let result = 0;
  for (let i = 0; i < sig.length; i++) {
    result |= sig.charCodeAt(i) ^ expectedSig.charCodeAt(i);
  }
  return result === 0;
}

/**
 * Silent accept response - used for detected bots
 * Returns success to avoid giving bots feedback about detection
 */
function silentAcceptResponse(): NextResponse {
  return NextResponse.json({ success: true });
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const userAgent = request.headers.get('user-agent') || 'unknown';

  try {
    // ========================================
    // 1. RATE LIMITING (Redis-based)
    // ========================================
    if (ip && isRedisConfigured()) {
      // Primary rate limit by IP
      const ipLimit = await rateLimit(`ip:${ip}`, RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_WINDOW);
      
      if (!ipLimit.success) {
        return NextResponse.json(
          { 
            error: 'Too many requests. Please try again later.', 
            code: 'RATE_LIMITED' 
          },
          { 
            status: 429,
            headers: {
              'X-RateLimit-Remaining': '0',
              'X-RateLimit-Reset': ipLimit.reset.toString(),
              'Retry-After': Math.ceil(ipLimit.reset - Date.now() / 1000).toString(),
            }
          }
        );
      }

      // Secondary rate limit by IP+UA (stricter for suspicious patterns)
      const uaHash = Buffer.from(userAgent).toString('base64').slice(0, 16);
      const comboLimit = await rateLimit(
        `combo:${ip}:${uaHash}`, 
        RATE_LIMIT_MAX_REQUESTS, 
        RATE_LIMIT_WINDOW
      );
      
      if (!comboLimit.success) {
        return NextResponse.json(
          { 
            error: 'Too many requests. Please try again later.', 
            code: 'RATE_LIMITED' 
          },
          { status: 429 }
        );
      }
    }

    // ========================================
    // 2. PARSE REQUEST BODY
    // ========================================
    let body: WaitlistRequestBody;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid request body', code: 'INVALID_REQUEST' },
        { status: 400 }
      );
    }

    const { email, website, turnstileToken, challenge } = body;

    // ========================================
    // 3. HONEYPOT CHECK
    // ========================================
    if (website && website.length > 0) {
      // Bot filled hidden field - silent accept
      console.log('[WAITLIST] Honeypot triggered');
      return silentAcceptResponse();
    }

    // ========================================
    // 4. TURNSTILE VERIFICATION
    // ========================================
    if (isTurnstileConfigured()) {
      if (!turnstileToken) {
        // Missing token - likely bot, silent accept
        console.log('[WAITLIST] Missing Turnstile token');
        return silentAcceptResponse();
      }

      const turnstileResult = await verifyTurnstileToken(turnstileToken, ip || undefined);
      
      if (!turnstileResult.success) {
        // Failed verification - likely bot, silent accept
        console.log('[WAITLIST] Turnstile verification failed:', turnstileResult.errorCodes);
        return silentAcceptResponse();
      }
    }

    // ========================================
    // 5. CHALLENGE TOKEN VERIFICATION
    // ========================================
    const hmacSecret = getHmacSecret();
    if (hmacSecret) {
      if (!challenge || !challenge.nonce || !challenge.issuedAt || !challenge.sig) {
        // Missing challenge - likely bot bypassing form, silent accept
        console.log('[WAITLIST] Missing challenge token');
        return silentAcceptResponse();
      }

      // Verify signature
      if (!verifyChallengeSig(challenge.nonce, challenge.issuedAt, challenge.sig, hmacSecret)) {
        console.log('[WAITLIST] Invalid challenge signature');
        return silentAcceptResponse();
      }

      // Check challenge age
      const now = Date.now();
      const age = now - challenge.issuedAt;

      if (age < CHALLENGE_MIN_AGE_MS) {
        // Form submitted too fast - likely bot
        console.log('[WAITLIST] Challenge too new:', age, 'ms');
        return silentAcceptResponse();
      }

      if (age > CHALLENGE_MAX_AGE_MS) {
        // Challenge expired - could be legitimate, but silent accept for safety
        console.log('[WAITLIST] Challenge expired:', age, 'ms');
        return silentAcceptResponse();
      }

      // Check for replay attack (nonce reuse)
      if (isRedisConfigured()) {
        const nonceUsed = await isNonceUsed(challenge.nonce);
        if (nonceUsed) {
          console.log('[WAITLIST] Nonce replay detected');
          return silentAcceptResponse();
        }

        // Mark nonce as used
        await markNonceUsed(challenge.nonce, NONCE_TTL_SECONDS);
      }
    }

    // ========================================
    // 6. EMAIL VALIDATION & CANONICALIZATION
    // ========================================
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email is required', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    const { normalizedEmail, canonicalKey } = processEmail(email);

    if (!normalizedEmail || !canonicalKey) {
      return NextResponse.json(
        { error: 'Please enter a valid email address', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    // ========================================
    // 7. DATABASE INSERT
    // ========================================
    await initWaitlistTable();

    const client = await pool.connect();
    
    try {
      // Check if email already exists (by canonical key)
      const existingResult = await client.query(
        'SELECT id FROM waitlist WHERE email_key = $1',
        [canonicalKey]
      );

      if (existingResult.rows.length > 0) {
        return NextResponse.json(
          { 
            success: false, 
            alreadyExists: true,
            message: "You're already on the waitlist!" 
          },
          { status: 200 }
        );
      }

      // Insert new email with both original and canonical key
      await client.query(
        'INSERT INTO waitlist (email, email_key) VALUES ($1, $2)',
        [normalizedEmail, canonicalKey]
      );

      console.log('[WAITLIST] New signup:', normalizedEmail.replace(/(.{2}).*@/, '$1***@'));

      return NextResponse.json({ 
        success: true, 
        alreadyExists: false,
        message: 'Successfully joined the waitlist!' 
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Something went wrong', code: 'SERVER_ERROR' },
      { status: 500 }
    );
  }
}
