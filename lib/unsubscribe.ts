import { createHmac } from 'crypto';

/**
 * Email subscription types - extensible for future subscriptions
 */
export type SubscriptionType = 'waitlist' | 'marketing' | 'product' | 'all';

/**
 * Get HMAC secret for signing unsubscribe tokens
 * Reuses the same secret as the waitlist challenge for simplicity
 */
function getSecret(): string | undefined {
  return process.env.WAITLIST_HMAC_SECRET;
}

/**
 * Generate a signed unsubscribe token
 * 
 * The token encodes the email and subscription type, signed with HMAC
 * to prevent tampering. This allows one-click unsubscribe without login.
 * 
 * @param email - The email address to unsubscribe
 * @param type - The subscription type to unsubscribe from
 * @returns Base64-encoded signed token
 */
export function generateUnsubscribeToken(email: string, type: SubscriptionType = 'all'): string | null {
  const secret = getSecret();
  if (!secret) {
    return null;
  }

  const payload = JSON.stringify({ email: email.toLowerCase().trim(), type });
  const sig = createHmac('sha256', secret).update(payload).digest('hex');
  
  // Combine payload and signature, then base64 encode
  const token = Buffer.from(`${payload}.${sig}`).toString('base64url');
  return token;
}

/**
 * Verify and decode an unsubscribe token
 * 
 * @param token - The base64-encoded token from the URL
 * @returns The decoded payload if valid, null if invalid
 */
export function verifyUnsubscribeToken(token: string): { email: string; type: SubscriptionType } | null {
  const secret = getSecret();
  if (!secret) {
    return null;
  }

  try {
    // Decode base64
    const decoded = Buffer.from(token, 'base64url').toString('utf-8');
    
    // Split payload and signature
    const lastDotIndex = decoded.lastIndexOf('.');
    if (lastDotIndex === -1) return null;
    
    const payload = decoded.substring(0, lastDotIndex);
    const sig = decoded.substring(lastDotIndex + 1);
    
    // Verify signature
    const expectedSig = createHmac('sha256', secret).update(payload).digest('hex');
    
    // Timing-safe comparison
    if (sig.length !== expectedSig.length) return null;
    let result = 0;
    for (let i = 0; i < sig.length; i++) {
      result |= sig.charCodeAt(i) ^ expectedSig.charCodeAt(i);
    }
    if (result !== 0) return null;
    
    // Parse and validate payload
    const data = JSON.parse(payload);
    if (!data.email || typeof data.email !== 'string') return null;
    
    return {
      email: data.email,
      type: data.type || 'all',
    };
  } catch {
    return null;
  }
}

/**
 * Generate a full unsubscribe URL
 * 
 * @param email - The email address
 * @param type - The subscription type
 * @param baseUrl - The base URL of the site (e.g., https://yukifi.io)
 */
export function generateUnsubscribeUrl(
  email: string, 
  type: SubscriptionType = 'all',
  baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || 'https://yuki.fi'
): string | null {
  const token = generateUnsubscribeToken(email, type);
  if (!token) return null;
  return `${baseUrl}/unsubscribe?token=${token}`;
}
