/**
 * Email validation and canonicalization utilities
 * 
 * Handles Gmail address deduplication by normalizing:
 * - Dots in local part (ignored by Gmail)
 * - Plus tags (e.g., user+tag@gmail.com → user@gmail.com)
 * - googlemail.com → gmail.com aliasing
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GMAIL_DOMAINS = ['gmail.com', 'googlemail.com'];

interface EmailValidation {
  isValid: boolean;
  normalizedEmail: string;
  canonicalKey: string;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false;
  }
  return EMAIL_REGEX.test(email.trim());
}

/**
 * Canonicalize a Gmail address for deduplication
 * 
 * Gmail ignores:
 * - Dots in the local part: j.o.h.n@gmail.com = john@gmail.com
 * - Plus tags: john+newsletter@gmail.com = john@gmail.com
 * - googlemail.com is an alias for gmail.com
 */
function canonicalizeGmail(localPart: string): string {
  // Remove all dots
  let canonical = localPart.replace(/\./g, '');
  
  // Remove +tag suffix
  const plusIndex = canonical.indexOf('+');
  if (plusIndex > 0) {
    canonical = canonical.substring(0, plusIndex);
  }
  
  return canonical;
}

/**
 * Process email for storage
 * 
 * Returns:
 * - normalizedEmail: Lowercase, trimmed version of original (what user sees)
 * - canonicalKey: Deduplicated key for uniqueness check
 * 
 * For Gmail addresses, the canonical key removes dots and +tags.
 * For other domains, canonical key equals normalized email.
 */
export function processEmail(email: string): EmailValidation {
  if (!email || typeof email !== 'string') {
    return {
      isValid: false,
      normalizedEmail: '',
      canonicalKey: '',
    };
  }

  const trimmed = email.trim().toLowerCase();
  
  if (!EMAIL_REGEX.test(trimmed)) {
    return {
      isValid: false,
      normalizedEmail: trimmed,
      canonicalKey: trimmed,
    };
  }

  const atIndex = trimmed.lastIndexOf('@');
  const localPart = trimmed.substring(0, atIndex);
  const domain = trimmed.substring(atIndex + 1);

  // Check if this is a Gmail address
  if (GMAIL_DOMAINS.includes(domain)) {
    const canonicalLocal = canonicalizeGmail(localPart);
    return {
      isValid: true,
      normalizedEmail: trimmed,
      canonicalKey: `${canonicalLocal}@gmail.com`, // Always use gmail.com for key
    };
  }

  // For non-Gmail, canonical key equals normalized email
  return {
    isValid: true,
    normalizedEmail: trimmed,
    canonicalKey: trimmed,
  };
}
