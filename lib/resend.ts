import { Resend } from 'resend';
import { generateUnsubscribeUrl } from './unsubscribe';

/**
 * Get Resend client at runtime (not module load time)
 */
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

/**
 * Get base URL for links in emails
 */
function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL || 'https://yuki.fi';
}

/**
 * Extract the local part of an email (before the @)
 * e.g., "haruxe@proton.me" -> "haruxe"
 */
function getEmailRecipientName(email: string): string {
  const atIndex = email.indexOf('@');
  if (atIndex === -1) return email;
  return email.substring(0, atIndex);
}

/**
 * Check if Resend is configured
 */
export function isResendConfigured(): boolean {
  return !!process.env.RESEND_API_KEY;
}

/**
 * Send a waitlist confirmation email using Resend template
 * 
 * Template variables:
 * - Recipient: The local part of the email (before @)
 * - Unsubscribe_URL: The unsubscribe link
 * 
 * This function is designed to be fire-and-forget - it handles its own errors
 * and won't throw, so it won't block the signup flow.
 * 
 * @param email - The email address to send the confirmation to
 */
export async function sendWaitlistConfirmation(email: string): Promise<void> {
  const resend = getResendClient();
  
  if (!resend) {
    return;
  }

  // Generate template variables
  const recipient = getEmailRecipientName(email);
  const unsubscribeUrl = generateUnsubscribeUrl(email, 'waitlist', getBaseUrl()) || '';

  try {
    const { error } = await resend.emails.send({
      from: 'Yuki <hello@yukifi.io>', // Update with your verified domain
      to: email,
      subject: "You're on the Yuki waitlist! 🎉",
      text: `Hey ${recipient}!

Thanks for joining the Yuki waitlist!

We're building something special and you'll be among the first to know when we launch.

In the meantime, follow us on X (@yukiprotocol) or join our Discord for updates.

See you soon!
- The Yuki Team

---
Don't want to receive these emails? ${unsubscribeUrl}`,
      headers: unsubscribeUrl ? {
        'List-Unsubscribe': `<${unsubscribeUrl}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      } : undefined,
    });

    if (error) {
      return;
    }
  } catch {
    // Silently fail - email errors shouldn't block signup
  }
}

/**
 * Send a waitlist confirmation email using a Resend dashboard template
 * 
 * Use this if you want to manage the email design in Resend's dashboard.
 * 
 * Template variables expected:
 * - Recipient: The local part of the email (before @)
 * - Unsubscribe_URL: The unsubscribe link
 * 
 * @param email - The email address to send the confirmation to
 * @param template - The Resend template ID or alias (e.g., "waitlist")
 */
export async function sendWaitlistConfirmationWithTemplate(
  email: string,
  template: string
): Promise<void> {
  const resend = getResendClient();
  
  if (!resend) {
    return;
  }

  // Generate template variables
  const recipient = getEmailRecipientName(email);
  const unsubscribeUrl = generateUnsubscribeUrl(email, 'waitlist', getBaseUrl()) || '';

  try {
    // Use Resend API with template support
    // Docs: https://resend.com/docs/dashboard/templates/introduction
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Yuki <hello@yuki.fi>',
        to: email,
        template: {
          id: template,
          variables: {
            RECIPIENT: recipient,
            RESEND_UNSUBSCRIBE_URL: unsubscribeUrl,
          },
        },
        headers: {
          'List-Unsubscribe': `<${unsubscribeUrl}>`,
          'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
        },
      }),
    });

    if (!response.ok) {
      const result = await response.json();
      console.error('[EMAIL] Failed:', result?.message || response.status);
    }
  } catch {
    // Silently fail - email errors shouldn't block signup
  }
}
