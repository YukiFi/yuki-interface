import { NextResponse } from 'next/server';
import { createHmac, randomBytes } from 'crypto';

/**
 * Get HMAC secret at runtime (not module load time)
 * This ensures env vars are available in serverless environments
 */
function getHmacSecret(): string | undefined {
  return process.env.WAITLIST_HMAC_SECRET;
}

/**
 * Signs a challenge payload with HMAC-SHA256
 */
function signChallenge(nonce: string, issuedAt: number, secret: string): string {
  const payload = `${nonce}:${issuedAt}`;
  return createHmac('sha256', secret).update(payload).digest('hex');
}

/**
 * GET /api/waitlist/challenge
 * 
 * Issues a server-signed challenge token that must be submitted with the waitlist form.
 * This replaces client-side timing detection which is easily spoofed.
 * 
 * The challenge includes:
 * - nonce: Random string to prevent replay attacks
 * - issuedAt: Server timestamp for age verification
 * - sig: HMAC signature to verify authenticity
 */
export async function GET() {
  try {
    const hmacSecret = getHmacSecret();
    
    if (!hmacSecret) {
      console.error('WAITLIST_HMAC_SECRET is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const nonce = randomBytes(16).toString('hex');
    const issuedAt = Date.now();
    const sig = signChallenge(nonce, issuedAt, hmacSecret);

    return NextResponse.json({
      nonce,
      issuedAt,
      sig,
    });
  } catch (error) {
    console.error('Challenge generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate challenge' },
      { status: 500 }
    );
  }
}
