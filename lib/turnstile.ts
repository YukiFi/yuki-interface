/**
 * Cloudflare Turnstile verification
 * 
 * Turnstile is a CAPTCHA alternative that provides bot protection
 * without annoying challenge puzzles.
 */

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export interface TurnstileResult {
  success: boolean;
  errorCodes?: string[];
}

/**
 * Get Turnstile secret at runtime (not module load time)
 */
function getTurnstileSecret(): string | undefined {
  return process.env.TURNSTILE_SECRET_KEY;
}

/**
 * Verify a Turnstile token server-side
 * 
 * @param token - The turnstile token from the client
 * @param remoteIp - Optional IP address of the client for additional validation
 */
export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string
): Promise<TurnstileResult> {
  const secretKey = getTurnstileSecret();
  
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not configured');
    return { success: false, errorCodes: ['missing-secret'] };
  }

  if (!token) {
    return { success: false, errorCodes: ['missing-token'] };
  }

  try {
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);
    if (remoteIp) {
      formData.append('remoteip', remoteIp);
    }

    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      console.error('Turnstile API error:', response.status);
      return { success: false, errorCodes: ['api-error'] };
    }

    const data: TurnstileVerifyResponse = await response.json();

    return {
      success: data.success,
      errorCodes: data['error-codes'],
    };
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return { success: false, errorCodes: ['network-error'] };
  }
}

/**
 * Check if Turnstile is configured
 */
export function isTurnstileConfigured(): boolean {
  return !!getTurnstileSecret();
}
