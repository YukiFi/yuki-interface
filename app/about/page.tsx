"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const problems = [
  {
    title: "Fragmented Across Protocols",
    description: "Yield opportunities are scattered across dozens of DeFi protocols, each with different interfaces, risks, and requirements.",
  },
  {
    title: "Opaque Fund Management",
    description: "Most yield products don't explain where funds are deployed. Users deposit and hope for the best with no visibility.",
  },
  {
    title: "Built for Power Users",
    description: "DeFi yield products assume users understand protocols and strategies. The learning curve is steep.",
  },
  {
    title: "Static and Unmanaged",
    description: "Single-protocol solutions don't adapt to changing conditions. Your funds stay static regardless of better opportunities.",
  },
];

const solutions = [
  {
    title: "One Decision: Risk Level",
    description: "Choose Low, Medium, or High risk. That's it. No strategy selection, no protocol research, no constant monitoring.",
  },
  {
    title: "Transparent by Default",
    description: "Every allocation and strategy rule is visible on-chain. See exactly where your funds are deployed at any time.",
  },
  {
    title: "Adaptive Allocation",
    description: "Yuki monitors conditions and rebalances across audited yield sources. Your savings stay optimized automatically.",
  },
  {
    title: "Non-Custodial Always",
    description: "You retain full ownership at all times. Yuki never takes custody. Every action is governed by verifiable on-chain rules.",
  },
];

const vaults = [
  {
    title: "Conservative",
    description: "Capital preservation and stability. Minimizes exposure to volatility. Best for steady, reliable yield.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Moderate",
    description: "Balances stability and yield. Rotates into higher-yield opportunities while maintaining strict limits.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Aggressive",
    description: "Maximum yield seeking. Reallocates to capture temporary APY opportunities, accepting higher volatility.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Light section background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f3] via-[#eae8e4] to-[#e0ddd8]" />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating accent */}
      <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-off/10 blur-[100px] sm:blur-[150px] pointer-events-none" />

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
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-8 sm:mb-12"
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
            className="mb-12 sm:mb-20"
          >
            <h1 
              className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black mb-4 sm:mb-6 leading-tight"
              style={{ WebkitFontSmoothing: "antialiased", textRendering: "geometricPrecision" }}
            >
              ON-CHAIN SAVINGS
              <div className="h-1 sm:h-2" />
              <span className="text-gray-400">THAT ADAPTS</span>
          </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Yuki is a non-custodial, on-chain savings protocol that makes earning yield simple, transparent, and adaptive.
          </p>
          </motion.div>

        {/* What is Yuki */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-24"
          >
            <div className="inline-block px-3 py-1.5 bg-black text-white text-xs font-medium rounded-full mb-4 sm:mb-6">
              What is Yuki
          </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                  Instead of asking users to manage protocols or strategies, Yuki lets you choose a risk level and automatically handles everything else.
              </p>
              <p>
                  Funds are allocated across audited yield sources, continuously monitored, and rebalanced according to clear, on-chain rules.
              </p>
                <p className="text-black font-semibold">
                Every allocation, exposure, and strategy decision is visible and verifiable on-chain.
              </p>
            </div>
          </div>
          </motion.section>

        {/* The Problem */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-24"
          >
            <div className="inline-block px-3 py-1.5 bg-gray-200 text-gray-600 text-xs font-medium rounded-full mb-4 sm:mb-6">
              The Problem
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-black mb-6 sm:mb-8">
              DEFI IS POWERFUL
              <br />
              <span className="text-gray-400">BUT INACCESSIBLE</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {problems.map((problem, index) => (
                <motion.div
                key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6"
              >
                  <div className="flex gap-3 sm:gap-4">
                    <span className="text-off/50 text-xs sm:text-sm font-mono mt-0.5 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                      <h3 className="text-black text-base sm:text-lg font-semibold mb-2">
                      {problem.title}
                    </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
                </motion.div>
            ))}
          </div>
          </motion.section>

          {/* The Solution */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-24"
          >
            <div className="inline-block px-3 py-1.5 bg-off text-white text-xs font-medium rounded-full mb-4 sm:mb-6">
              The Solution
        </div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-black mb-6 sm:mb-8">
              SIMPLE SAVINGS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {solutions.map((solution, index) => (
                <motion.div
                key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black rounded-xl sm:rounded-2xl p-5 sm:p-6"
              >
                  <h3 className="text-white text-base sm:text-lg font-semibold mb-2">
                  {solution.title}
                </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                  {solution.description}
                </p>
                </motion.div>
            ))}
          </div>
          </motion.section>

        {/* Risk-Based Vaults */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-24"
          >
            <div className="inline-block px-3 py-1.5 bg-gray-200 text-gray-600 text-xs font-medium rounded-full mb-4 sm:mb-6">
              Vaults
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-black mb-6 sm:mb-8">
              ORGANIZED BY
              <br />
              <span className="text-gray-400">RISK TOLERANCE</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {vaults.map((vault, index) => (
                <motion.div
                key={vault.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${vault.bg} rounded-xl sm:rounded-2xl p-5 sm:p-6`}
              >
                  <h3 className={`${vault.color} text-base sm:text-lg font-semibold mb-2`}>
                  {vault.title}
                </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                  {vault.description}
                </p>
                </motion.div>
            ))}
          </div>
          </motion.section>

          {/* Vision */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center">
              <div className="inline-block px-3 py-1.5 bg-white/10 text-white/60 text-xs font-medium rounded-full mb-4 sm:mb-6">
                The Vision
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">
                MAKE SAVINGS
                <br />
                <span className="text-off">FEEL OBVIOUS</span>
            </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              A place where people can confidently park money, earn yield, and stay fully in control without becoming DeFi experts.
            </p>
          </div>
          </motion.section>

        {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6">
            Ready to experience on-chain savings done right?
          </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="https://discord.com/invite/ZuS6Mj4r8j"
              target="_blank"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
                Join Discord
            </Link>
            <Link
              href="https://x.com/yukiprotocol"
              target="_blank"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/60 text-black rounded-full text-sm font-medium hover:bg-white transition-colors"
            >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              Follow on X
            </Link>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
