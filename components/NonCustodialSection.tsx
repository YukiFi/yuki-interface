"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function NonCustodialSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const architecturePoints = [
    {
      title: "User-controlled keys",
      description: "Only you hold the private keys to your funds. We never have access.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Smart contract transparency",
      description: "All logic is on-chain, audited, and publicly verifiable by anyone.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "On-chain settlement",
      description: "Every transaction settles directly on the blockchain. No intermediaries.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Interface layer only",
      description: "Yuki is a window into your on-chain assets. We never custody funds.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden bg-[#0a0a0c]"
    >
      {/* Subtle tech pattern background - atmospheric */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-page mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight mb-6">
            We can&apos;t take your money
          </h2>
          <p className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto">
            Even if we wanted to. The architecture doesn&apos;t allow it.
          </p>
        </motion.div>

        {/* Main visualization - glass architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto mb-24"
        >
          {/* Architecture diagram - glass panel */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-white/[0.015] backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* User */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-brand/10 backdrop-blur-sm flex items-center justify-center"
                >
                  <svg className="w-8 h-8 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
                <div className="text-sm font-medium text-white mb-1">You</div>
                <div className="text-xs text-white/40">Hold your keys</div>
              </div>

              {/* Connection arrows */}
              <div className="hidden md:flex items-center justify-center relative">
                <div className="flex flex-col items-center gap-4 w-full">
                  {/* Arrow to blockchain */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="w-full h-px bg-brand/40"
                    style={{ transformOrigin: "left" }}
                  />
                  
                </div>
              </div>

              {/* Blockchain */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-500/10 backdrop-blur-sm flex items-center justify-center"
                >
                  <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
                <div className="text-sm font-medium text-white mb-1">Your Funds</div>
                <div className="text-xs text-white/40">On-chain smart contracts</div>
              </div>
            </div>

            {/* Divider - atmospheric separator */}
            <div className="my-10 h-px bg-white/[0.04]" />

            {/* Key insight */}
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-white/60 text-sm md:text-base"
              >
                Yuki connects you to your on-chain assets.{" "}
                <span className="text-white">Your funds never pass through us.</span>
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Architecture points - glass panels */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {architecturePoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.015] backdrop-blur-sm group hover:bg-white/[0.025] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center flex-shrink-0 text-white/50 group-hover:text-white/70 transition-colors">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-base font-medium text-white mb-1">{point.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement - glass pill */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-500/[0.06] backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-sm text-emerald-400/90">
              If Yuki disappeared tomorrow, your funds would remain exactly where they are.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
