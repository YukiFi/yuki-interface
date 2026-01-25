/**
 * Upstash Redis-based rate limiting for Vercel serverless
 * 
 * Implements a fixed window rate limiter using Upstash Redis REST API.
 * This works across all serverless instances, unlike in-memory rate limiting.
 */

interface RateLimitResult {
  success: boolean;
  remaining: number;
  reset: number;
}

/**
 * Get Redis credentials at runtime (not module load time)
 */
function getRedisCredentials(): { url: string; token: string } | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return { url, token };
}

/**
 * Execute a Redis command via Upstash REST API
 */
async function redisCommand(command: string[]): Promise<unknown> {
  const creds = getRedisCredentials();
  if (!creds) {
    throw new Error('Upstash Redis credentials not configured');
  }

  const response = await fetch(creds.url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${creds.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
  });

  if (!response.ok) {
    throw new Error(`Redis command failed: ${response.status}`);
  }

  const data = await response.json();
  return data.result;
}

/**
 * Execute multiple Redis commands in a pipeline
 */
async function redisPipeline(commands: string[][]): Promise<unknown[]> {
  const creds = getRedisCredentials();
  if (!creds) {
    throw new Error('Upstash Redis credentials not configured');
  }

  const response = await fetch(`${creds.url}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${creds.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
  });

  if (!response.ok) {
    throw new Error(`Redis pipeline failed: ${response.status}`);
  }

  const data = await response.json();
  return data.map((item: { result: unknown }) => item.result);
}

/**
 * Fixed window rate limiter
 * 
 * @param key - Unique identifier for rate limiting (e.g., IP address)
 * @param limit - Maximum requests allowed in the window
 * @param windowSeconds - Window size in seconds
 */
export async function rateLimit(
  key: string,
  limit: number = 5,
  windowSeconds: number = 60
): Promise<RateLimitResult> {
  const now = Math.floor(Date.now() / 1000);
  const windowStart = Math.floor(now / windowSeconds) * windowSeconds;
  const redisKey = `ratelimit:${key}:${windowStart}`;
  const ttl = windowSeconds;

  try {
    // Increment counter and set TTL atomically using pipeline
    const results = await redisPipeline([
      ['INCR', redisKey],
      ['EXPIRE', redisKey, ttl.toString()],
    ]);

    const count = results[0] as number;
    const remaining = Math.max(0, limit - count);
    const reset = windowStart + windowSeconds;

    return {
      success: count <= limit,
      remaining,
      reset,
    };
  } catch (error) {
    // Fail open - allow request if Redis is unavailable
    return {
      success: true,
      remaining: limit,
      reset: now + windowSeconds,
    };
  }
}

/**
 * Check if a nonce has been used (for replay attack prevention)
 */
export async function isNonceUsed(nonce: string): Promise<boolean> {
  try {
    const result = await redisCommand(['GET', `nonce:${nonce}`]);
    return result !== null;
  } catch (error) {
    // Fail closed for security - if we can't check, assume used
    return true;
  }
}

/**
 * Mark a nonce as used with expiration
 */
export async function markNonceUsed(nonce: string, ttlSeconds: number = 600): Promise<void> {
  try {
    await redisCommand(['SET', `nonce:${nonce}`, '1', 'EX', ttlSeconds.toString()]);
  } catch (error) {
  }
}

/**
 * Check if Upstash Redis is configured
 */
export function isRedisConfigured(): boolean {
  return getRedisCredentials() !== null;
}
