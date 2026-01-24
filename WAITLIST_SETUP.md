# Waitlist Anti-Bot Pipeline Setup

This document describes the production-grade anti-bot system for the waitlist API.

## Overview

The system implements multiple layers of protection:

1. **Upstash Redis Rate Limiting** - Distributed rate limiting across serverless instances
2. **Cloudflare Turnstile** - Bot detection without annoying captchas
3. **Server-Signed Challenge Tokens** - Prevents form submission timing spoofing
4. **Honeypot Fields** - Catches basic bots that fill all form fields
5. **Gmail Canonicalization** - Prevents duplicate signups via Gmail aliases

## Environment Variables

Add these to your Vercel project settings:

```bash
# Required for rate limiting and nonce tracking
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-token

# Required for Turnstile verification (get from Cloudflare dashboard)
TURNSTILE_SECRET_KEY=0x4AAAAAAxxxxxxxx

# Required for challenge token signing (generate with: openssl rand -hex 32)
WAITLIST_HMAC_SECRET=your-64-char-hex-secret

# Client-side Turnstile key (goes in .env.local for dev)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAxxxxxxxx

# Your existing database connection
DATABASE_URL=postgresql://...
```

## Setting Up Each Service

### 1. Upstash Redis

1. Go to [upstash.com](https://upstash.com) and create a free account
2. Create a new Redis database (select region closest to your Vercel deployment)
3. Copy the REST URL and REST Token from the dashboard
4. Add them to Vercel environment variables

### 2. Cloudflare Turnstile

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Turnstile
2. Add a new site widget
3. Choose "Managed" mode for best UX (auto-challenges only when needed)
4. Add your domains (including localhost for development)
5. Copy the Site Key (for frontend) and Secret Key (for backend)
6. Add to environment variables

### 3. HMAC Secret

Generate a secure 256-bit secret:

```bash
openssl rand -hex 32
```

Add this as `WAITLIST_HMAC_SECRET` in Vercel.

## Database Migration

If you have an existing `waitlist` table, run this migration:

```sql
-- Add email_key column for Gmail deduplication
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS email_key TEXT;

-- Backfill email_key with existing email values
-- Note: This doesn't apply Gmail canonicalization to existing emails
UPDATE waitlist SET email_key = email WHERE email_key IS NULL;

-- Make email_key NOT NULL after backfill
ALTER TABLE waitlist ALTER COLUMN email_key SET NOT NULL;

-- Create unique index on email_key
CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_key_idx ON waitlist (email_key);

-- Optional: Drop old unique constraint on email if it exists
-- ALTER TABLE waitlist DROP CONSTRAINT IF EXISTS waitlist_email_key;
```

For proper Gmail canonicalization of existing emails, you'd need a custom script:

```sql
-- Example: Canonicalize existing Gmail addresses (run manually)
-- This is a simplified example - production would need proper handling

UPDATE waitlist 
SET email_key = 
  CASE 
    WHEN email LIKE '%@gmail.com' OR email LIKE '%@googlemail.com' 
    THEN CONCAT(
      REPLACE(
        SPLIT_PART(SPLIT_PART(email, '@', 1), '+', 1),
        '.', ''
      ),
      '@gmail.com'
    )
    ELSE email
  END
WHERE email LIKE '%@gmail.com' OR email LIKE '%@googlemail.com';
```

## API Routes

### GET /api/waitlist/challenge

Issues a server-signed challenge token. Must be called when form mounts.

Response:
```json
{
  "nonce": "abc123...",
  "issuedAt": 1706000000000,
  "sig": "hmac-signature..."
}
```

### POST /api/waitlist

Submit waitlist signup with anti-bot verification.

Request body:
```json
{
  "email": "user@example.com",
  "website": "",
  "turnstileToken": "turnstile-token...",
  "challenge": {
    "nonce": "abc123...",
    "issuedAt": 1706000000000,
    "sig": "hmac-signature..."
  }
}
```

Responses:
- `200` with `{ success: true, alreadyExists: false }` - New signup
- `200` with `{ success: false, alreadyExists: true }` - Duplicate email
- `200` with `{ success: true }` - Bot detected (silent accept)
- `400` - Invalid email
- `429` - Rate limited
- `500` - Server error

## Rate Limiting

- **5 requests per 60 seconds** per IP address
- Secondary limiter: 5 requests per 60 seconds per IP+UserAgent combo
- Uses fixed window algorithm
- Rate limit headers included in 429 responses

## Challenge Token Flow

1. Frontend fetches `/api/waitlist/challenge` on form mount
2. Token is signed with HMAC and includes:
   - Random nonce (prevents replay attacks)
   - Server timestamp (for age verification)
3. On submit, server verifies:
   - Signature is valid (token not forged)
   - Age is between 2 seconds and 10 minutes (bots submit too fast, expired tokens rejected)
   - Nonce hasn't been used before (stored in Redis for 10 minutes)

## Silent Accept Behavior

When a bot is detected, the API returns `{ success: true }` without storing the email.
This prevents bots from learning they were detected and adapting.

Bot detection triggers:
- Honeypot field filled
- Missing or invalid Turnstile token
- Missing or invalid challenge token
- Challenge submitted in < 2 seconds
- Challenge expired (> 10 minutes)
- Nonce replay detected

## Gmail Canonicalization

Gmail ignores dots and plus tags in addresses:
- `j.o.h.n@gmail.com` = `john@gmail.com`
- `john+newsletter@gmail.com` = `john@gmail.com`
- `john@googlemail.com` = `john@gmail.com`

The system stores:
- `email`: Original normalized email (what user entered)
- `email_key`: Canonical version for deduplication

## Testing

### Development Setup

For local development, you can use Turnstile's test keys:

```bash
# In .env.local
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA  # Always passes
# or
NEXT_PUBLIC_TURNSTILE_SITE_KEY=2x00000000000000000000AB  # Always blocks
```

### Testing Rate Limiting

```bash
# Should get 429 after 5 requests
for i in {1..10}; do
  curl -X POST http://localhost:3000/api/waitlist \
    -H "Content-Type: application/json" \
    -d '{"email":"test@example.com"}' &
done
```

### Testing Challenge Flow

```bash
# Get challenge
CHALLENGE=$(curl -s http://localhost:3000/api/waitlist/challenge)

# Submit immediately (should be silently rejected - too fast)
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@example.com\",\"challenge\":$CHALLENGE}"

# Wait 3 seconds and submit (should work)
sleep 3
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@example.com\",\"challenge\":$CHALLENGE}"
```

## Monitoring

Check logs for bot detection events:
- `[WAITLIST] Honeypot triggered`
- `[WAITLIST] Missing Turnstile token`
- `[WAITLIST] Turnstile verification failed: [error-codes]`
- `[WAITLIST] Missing challenge token`
- `[WAITLIST] Invalid challenge signature`
- `[WAITLIST] Challenge too new: X ms`
- `[WAITLIST] Challenge expired: X ms`
- `[WAITLIST] Nonce replay detected`
- `[WAITLIST] New signup: xx***@domain.com`

## Graceful Degradation

The system fails gracefully if services are unavailable:

- **Redis unavailable**: Rate limiting is skipped (fail open)
- **Turnstile unavailable**: Token verification is skipped
- **HMAC secret missing**: Challenge verification is skipped

In production, all services should be configured for full protection.
