"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly to us, such as when you create an account, connect a wallet, or contact us for support. This may include your email address, wallet addresses, and transaction data related to your use of our services.",
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.",
  },
  {
    title: "Information Sharing",
    content: "We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with service providers who assist us in operating our platform, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.",
  },
  {
    title: "Blockchain Data",
    content: "Please note that blockchain transactions are public by nature. When you interact with DeFi protocols through our platform, your wallet address and transaction history will be publicly visible on the blockchain. We have no control over this publicly available information.",
  },
  {
    title: "Data Security",
    content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.",
  },
  {
    title: "Cookies and Tracking",
    content: "We may use cookies and similar tracking technologies to collect information about your browsing activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us using the information provided below.",
  },
  {
    title: "Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[#0a0a0a]" />
      
      {/* Grain overlay */}
      <div 
        className="fixed inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <div className="fixed top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-off/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
          <Link 
            href="/" 
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8 sm:mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
              Back
          </Link>
          </motion.div>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 sm:mb-16"
          >
            <h1 
              className="font-bogart text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4"
              style={{ WebkitFontSmoothing: "antialiased", textRendering: "geometricPrecision" }}
            >
              PRIVACY POLICY
          </h1>
            <p className="text-white/30 text-xs sm:text-sm">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
          </motion.div>

        {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 sm:mb-16"
          >
            <p className="text-white/50 text-base sm:text-lg leading-relaxed">
            At Yuki Protocol, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
          </p>
          </motion.div>

        {/* Sections */}
          <div className="space-y-8 sm:space-y-12">
          {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="group"
              >
                <div className="flex gap-4 sm:gap-6">
                  <span className="text-off/50 text-xs sm:text-sm font-mono mt-0.5 sm:mt-1 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    {section.title}
                  </h2>
                    <p className="text-white/40 text-sm sm:text-base leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
              </motion.div>
          ))}

        {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + sections.length * 0.05 }}
              className="pt-6 sm:pt-8 border-t border-white/5"
            >
              <div className="flex gap-4 sm:gap-6">
                <span className="text-off/50 text-xs sm:text-sm font-mono mt-0.5 sm:mt-1 shrink-0">
                  {String(sections.length + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  Contact Us
                </h2>
                  <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <a
                href="mailto:privacy@yuki.fi"
                    className="text-off hover:text-white transition-colors text-sm sm:text-base"
              >
                privacy@yuki.fi
              </a>
            </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
