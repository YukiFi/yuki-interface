import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { verifyUnsubscribeToken, SubscriptionType } from '@/lib/unsubscribe';

/**
 * POST /api/unsubscribe
 * 
 * Handles unsubscribe requests. Expects a signed token in the request body.
 * The token contains the email and subscription type to unsubscribe from.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { error: 'Missing unsubscribe token', code: 'MISSING_TOKEN' },
        { status: 400 }
      );
    }

    // Verify and decode the token
    const payload = verifyUnsubscribeToken(token);
    
    if (!payload) {
      return NextResponse.json(
        { error: 'Invalid or expired unsubscribe link', code: 'INVALID_TOKEN' },
        { status: 400 }
      );
    }

    const { email, type } = payload;

    // Process unsubscribe based on type
    const result = await processUnsubscribe(email, type);

    if (!result.success) {
      return NextResponse.json(
        { error: result.message, code: 'UNSUBSCRIBE_FAILED' },
        { status: 400 }
      );
    }


    return NextResponse.json({
      success: true,
      message: result.message,
      type,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong', code: 'SERVER_ERROR' },
      { status: 500 }
    );
  }
}

/**
 * Process the unsubscribe action based on subscription type
 */
async function processUnsubscribe(
  email: string, 
  type: SubscriptionType
): Promise<{ success: boolean; message: string }> {
  const client = await pool.connect();
  
  try {
    // For now, we only have waitlist. This can be extended for other types.
    switch (type) {
      case 'waitlist':
      case 'all': {
        // Mark waitlist entry as unsubscribed
        const result = await client.query(
          `UPDATE waitlist 
           SET unsubscribed_at = NOW() 
           WHERE email = $1 AND unsubscribed_at IS NULL
           RETURNING id`,
          [email]
        );

        if (result.rowCount === 0) {
          // Check if already unsubscribed or doesn't exist
          const existing = await client.query(
            'SELECT unsubscribed_at FROM waitlist WHERE email = $1',
            [email]
          );

          if (existing.rows.length === 0) {
            return { success: true, message: 'Email not found in our records' };
          }

          if (existing.rows[0].unsubscribed_at) {
            return { success: true, message: 'Already unsubscribed' };
          }
        }

        return { success: true, message: 'Successfully unsubscribed from waitlist emails' };
      }

      case 'marketing':
        // Future: Handle marketing unsubscribe
        return { success: true, message: 'Successfully unsubscribed from marketing emails' };

      case 'product':
        // Future: Handle product update unsubscribe
        return { success: true, message: 'Successfully unsubscribed from product updates' };

      default:
        return { success: false, message: 'Unknown subscription type' };
    }
  } finally {
    client.release();
  }
}

/**
 * GET /api/unsubscribe
 * 
 * Verifies a token without processing (for the frontend to validate before confirming)
 */
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');

  if (!token) {
    return NextResponse.json(
      { valid: false, error: 'Missing token' },
      { status: 400 }
    );
  }

  const payload = verifyUnsubscribeToken(token);

  if (!payload) {
    return NextResponse.json(
      { valid: false, error: 'Invalid or expired token' },
      { status: 400 }
    );
  }

  // Mask email for privacy
  const maskedEmail = payload.email.replace(/(.{2}).*@/, '$1***@');

  return NextResponse.json({
    valid: true,
    email: maskedEmail,
    type: payload.type,
  });
}
