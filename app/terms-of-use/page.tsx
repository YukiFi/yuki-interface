"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsOfUse() {
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
            Terms of Use
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
            By using Yuki, you agree to these terms. Please read them carefully.
          </p>

          {/* The Service */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">What Yuki Is</h2>
            <div className="space-y-4">
              <p>
                Yuki is a non-custodial interface for accessing on-chain yield opportunities. We provide software that helps you interact with decentralized protocols—we don&apos;t hold, control, or have access to your funds.
              </p>
              <p>
                You are solely responsible for your wallet, private keys, and the transactions you authorize. We cannot reverse transactions, recover lost keys, or access your assets.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Eligibility</h2>
            <div className="space-y-4">
              <p>To use Yuki, you must:</p>
              <ul className="space-y-2 ml-4">
                <li><span className="text-white/40">•</span> Be at least 18 years old</li>
                <li><span className="text-white/40">•</span> Have the legal capacity to enter into these terms</li>
                <li><span className="text-white/40">•</span> Not be located in a jurisdiction where using Yuki would be prohibited</li>
                <li><span className="text-white/40">•</span> Not be on any sanctions list or acting on behalf of a sanctioned entity</li>
              </ul>
            </div>
          </section>

          {/* Risks */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Risks</h2>
            <div className="space-y-4">
              <p>
                DeFi involves significant risk. By using Yuki, you acknowledge and accept:
              </p>
              <ul className="space-y-3 ml-4">
                <li><span className="text-white/40">•</span> <strong className="text-white/80">Smart contract risk:</strong> Protocols may have bugs or vulnerabilities</li>
                <li><span className="text-white/40">•</span> <strong className="text-white/80">Market risk:</strong> Asset values can fluctuate dramatically</li>
                <li><span className="text-white/40">•</span> <strong className="text-white/80">Protocol risk:</strong> Underlying protocols may change or fail</li>
                <li><span className="text-white/40">•</span> <strong className="text-white/80">Regulatory risk:</strong> Laws around crypto may change</li>
                <li><span className="text-white/40">•</span> <strong className="text-white/80">No insurance:</strong> Your funds are not FDIC insured or protected by any government program</li>
              </ul>
              <p>
                APY is variable and not guaranteed. Past performance does not guarantee future results. You could lose some or all of your deposited funds.
              </p>
            </div>
          </section>

          {/* No Financial Advice */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Not Financial Advice</h2>
            <p>
              Nothing on this website or in our communications constitutes financial, investment, legal, or tax advice. Yuki is software, not a financial advisor. Do your own research and consult professionals before making financial decisions.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Intellectual Property</h2>
            <p>
              The Yuki name, logo, website design, and original content are owned by Yuki Protocol. You may not use our branding without permission. The underlying smart contracts are open source and governed by their respective licenses.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Limitation of Liability</h2>
            <div className="space-y-4">
              <p>
                To the maximum extent permitted by law, Yuki Protocol and its team shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="space-y-2 ml-4">
                <li><span className="text-white/40">•</span> Loss of funds due to smart contract exploits</li>
                <li><span className="text-white/40">•</span> Loss of funds due to user error</li>
                <li><span className="text-white/40">•</span> Market losses or missed opportunities</li>
                <li><span className="text-white/40">•</span> Service interruptions or downtime</li>
              </ul>
              <p>
                The service is provided &quot;as is&quot; without warranties of any kind.
              </p>
            </div>
          </section>

          {/* Prohibited Uses */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Prohibited Uses</h2>
            <div className="space-y-4">
              <p>You agree not to use Yuki to:</p>
              <ul className="space-y-2 ml-4">
                <li><span className="text-white/40">•</span> Violate any laws or regulations</li>
                <li><span className="text-white/40">•</span> Launder money or finance illegal activities</li>
                <li><span className="text-white/40">•</span> Circumvent sanctions or export controls</li>
                <li><span className="text-white/40">•</span> Interfere with or disrupt the service</li>
                <li><span className="text-white/40">•</span> Attempt to exploit or attack smart contracts</li>
              </ul>
            </div>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Changes to Terms</h2>
            <p>
              We may update these terms. Continued use after changes constitutes acceptance. For significant changes, we&apos;ll notify waitlist members via email.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Governing Law</h2>
            <p>
              These terms are governed by applicable law. Any disputes will be resolved through binding arbitration rather than in court, except where prohibited by law.
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
