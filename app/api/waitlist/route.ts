import { NextRequest, NextResponse } from 'next/server';
import pool, { initWaitlistTable } from '@/lib/db';

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  
  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 
               request.headers.get('x-real-ip') ?? 
               'unknown';
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.', code: 'RATE_LIMITED' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, website, formLoadTime } = body;

    // Honeypot check - if the hidden "website" field is filled, it's a bot
    if (website && website.length > 0) {
      // Silently accept but don't store (don't let bots know they were caught)
      return NextResponse.json({ success: true });
    }

    // Time-based detection - if form was submitted in less than 2 seconds, likely a bot
    const now = Date.now();
    if (formLoadTime && (now - formLoadTime) < 2000) {
      // Silently accept but don't store
      return NextResponse.json({ success: true });
    }

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    // Additional email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    // Ensure table exists
    await initWaitlistTable();

    const normalizedEmail = email.toLowerCase().trim();
    const client = await pool.connect();
    
    try {
      // First check if email already exists
      const existingResult = await client.query(
        'SELECT id FROM waitlist WHERE email = $1',
        [normalizedEmail]
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

      // Insert new email
      await client.query(
        'INSERT INTO waitlist (email) VALUES ($1)',
        [normalizedEmail]
      );

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
