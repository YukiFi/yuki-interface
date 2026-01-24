import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;

/**
 * Initialize the waitlist table with the updated schema
 * 
 * Schema includes:
 * - email: The normalized email address (lowercase, trimmed)
 * - email_key: Canonical email for deduplication (Gmail normalization applied)
 * - created_at: Timestamp of signup
 * 
 * Unique constraint is on email_key to prevent Gmail duplicates
 */
export async function initWaitlistTable() {
  const client = await pool.connect();
  try {
    // Create table if not exists with new schema
    await client.query(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL,
        email_key TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create unique index on email_key if not exists
    await client.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_key_idx ON waitlist (email_key)
    `);
  } finally {
    client.release();
  }
}

/**
 * Migration SQL for existing deployments
 * 
 * Run this SQL to add the email_key column to an existing waitlist table:
 * 
 * ```sql
 * -- Add email_key column
 * ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS email_key TEXT;
 * 
 * -- Populate email_key with existing email values (temporary)
 * UPDATE waitlist SET email_key = email WHERE email_key IS NULL;
 * 
 * -- Make email_key NOT NULL
 * ALTER TABLE waitlist ALTER COLUMN email_key SET NOT NULL;
 * 
 * -- Create unique index
 * CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_key_idx ON waitlist (email_key);
 * 
 * -- Optional: Remove old unique constraint on email if it exists
 * -- ALTER TABLE waitlist DROP CONSTRAINT IF EXISTS waitlist_email_key;
 * ```
 * 
 * For Gmail canonicalization of existing emails, you would need a custom
 * migration script to process each email through the canonicalization logic.
 */