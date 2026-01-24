"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050506]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-32">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/30 text-sm">
            Last updated: January 24, 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-12 text-white/60 leading-relaxed"
        >
          {/* Intro */}
          <p className="text-white/70 text-lg">
            Yuki is built on transparency. This policy explains what data we collect, why, and how we protect it.
          </p>

          {/* Waitlist Emails */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Waitlist & Email</h2>
            <div className="space-y-4">
              <p>
                When you join our waitlist, we collect your email address. Here&apos;s exactly what we do with it:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="text-brand shrink-0">✓</span>
                  <span>We send you updates about Yuki&apos;s launch and early access opportunities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand shrink-0">✓</span>
                  <span>We may send occasional product updates (no more than once per month)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/30 shrink-0">✗</span>
                  <span>We never sell, rent, or share your email with third parties</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/30 shrink-0">✗</span>
                  <span>We never send spam or promotional content from partners</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/30 shrink-0">✗</span>
                  <span>We never use your email for advertising purposes</span>
                </li>
              </ul>
              <p>
                Every email includes an unsubscribe link. One click and you&apos;re removed immediately.
              </p>
            </div>
          </section>

          {/* What We Collect */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">What We Collect</h2>
            <div className="space-y-4">
              <p>We collect minimal data necessary to provide our service:</p>
              <ul className="space-y-2 ml-4">
                <li><span className="text-white/40">•</span> Email address (waitlist only)</li>
                <li><span className="text-white/40">•</span> Wallet addresses you connect (when using the app)</li>
                <li><span className="text-white/40">•</span> Basic analytics (page views, not personal data)</li>
              </ul>
              <p>
                We use Vercel Analytics for basic usage metrics. This is privacy-focused and doesn&apos;t track individual users or use cookies.
              </p>
            </div>
          </section>

          {/* Blockchain Data */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Blockchain Transparency</h2>
            <p>
              Yuki is non-custodial. Your funds live on-chain, not with us. When you interact with blockchain protocols through Yuki, your transactions are publicly visible on the blockchain. This is inherent to how blockchains work—we don&apos;t control this visibility, and we can&apos;t hide it.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Security</h2>
            <p>
              We use industry-standard security practices to protect your data. Email addresses are stored encrypted. We don&apos;t store passwords because we don&apos;t have accounts—you authenticate with your wallet.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Your Rights</h2>
            <div className="space-y-4">
              <p>You can:</p>
              <ul className="space-y-2 ml-4">
                <li><span className="text-white/40">•</span> Request a copy of any data we have about you</li>
                <li><span className="text-white/40">•</span> Ask us to delete your data at any time</li>
                <li><span className="text-white/40">•</span> Unsubscribe from emails instantly</li>
              </ul>
              <p>
                Email <a href="mailto:contact@yuki.fi" className="text-brand hover:text-brand-light transition-colors">contact@yuki.fi</a> and we&apos;ll respond within 48 hours.
              </p>
            </div>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Changes</h2>
            <p>
              If we update this policy, we&apos;ll post the changes here and update the date above. For significant changes, we&apos;ll notify you via email.
            </p>
          </section>

          {/* Contact */}
          <section className="pt-8 border-t border-white/[0.06]">
            <h2 className="text-xl font-medium text-white mb-4">Questions?</h2>
            <p>
              Reach out at{" "}
              <a href="mailto:contact@yuki.fi" className="text-brand hover:text-brand-light transition-colors">
                contact@yuki.fi
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
