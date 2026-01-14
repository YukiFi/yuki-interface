"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our website or services.",
  },
  {
    title: "Changes to Terms",
    content: "We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the \"Last Updated\" date at the top of these Terms. Your continued use of the website after such modifications will constitute your acknowledgment of the modified Terms.",
  },
  {
    title: "Access and Use",
    content: "You are responsible for ensuring that your access to our website complies with applicable laws and regulations. We reserve the right to terminate or restrict your access to our website for any reason, including violation of these Terms.",
  },
  {
    title: "Intellectual Property",
    content: "The website and its original content, features, and functionality are owned by Yuki Protocol and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
  },
  {
    title: "Disclaimer of Warranties",
    content: "The website is provided on an \"AS IS\" and \"AS AVAILABLE\" basis, without any warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
  },
  {
    title: "Limitation of Liability",
    content: "In no event shall Yuki Protocol be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.",
  },
  {
    title: "Indemnification",
    content: "You agree to defend, indemnify, and hold harmless Yuki Protocol from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the website.",
  },
  {
    title: "Governing Law",
    content: "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Yuki Protocol operates, without regard to its conflict of law provisions.",
  },
];

export default function TermsOfUse() {
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
      <div className="fixed top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-off/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

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
              className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4"
              style={{ WebkitFontSmoothing: "antialiased", textRendering: "geometricPrecision" }}
            >
              TERMS OF USE
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
            Please read these Terms of Use carefully before using the Yuki Protocol website and services. 
            By using our platform, you acknowledge that you have read, understood, and agree to be bound by these terms.
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
                  Contact
                </h2>
                  <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <a
                href="mailto:contact@yuki.fi"
                    className="text-off hover:text-white transition-colors text-sm sm:text-base"
              >
                contact@yuki.fi
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
