import { NextRequest, NextResponse } from 'next/server';
import pool, { initWaitlistTable } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Ensure table exists
    await initWaitlistTable();

    // Insert email
    const client = await pool.connect();
    try {
      await client.query(
        'INSERT INTO waitlist (email) VALUES ($1) ON CONFLICT (email) DO NOTHING',
        [email.toLowerCase().trim()]
      );
    } finally {
      client.release();
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

