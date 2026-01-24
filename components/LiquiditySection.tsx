"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const depositMethods = [
  {
    name: "Bank Transfer",
    description: "ACH & Wire",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    name: "Debit Card",
    description: "Instant deposit",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    name: "Apple Pay",
    description: "One tap",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
      </svg>
    ),
  },
  {
    name: "Crypto",
    description: "USDC, ETH & more",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

export default function LiquiditySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-28 overflow-hidden bg-[#0a0a0c]"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-5 leading-[1.1]">
              Deposit your way
            </h2>
            <p className="text-base sm:text-lg text-white/45 leading-relaxed max-w-xl mx-auto">
              Fund your account instantly with the method that works for you.
            </p>
          </motion.div>

          {/* Deposit Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
          >
            {depositMethods.map((method, i) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="p-5 rounded-xl bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] transition-colors duration-300 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/60">
                  {method.icon}
                </div>
                <div className="text-sm font-medium text-white/80 mb-1">{method.name}</div>
                <div className="text-xs text-white/40">{method.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Powered by Coinbase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.03] backdrop-blur-sm">
              <span className="text-xs text-white/35 uppercase tracking-widest">Powered by</span>
              <div className="flex items-center gap-2">
                {/* Coinbase Logo */}
                <svg className="w-5 h-5 text-[#0052FF]" viewBox="0 0 28 28" fill="currentColor">
                  <path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0zm0 23.333c-5.155 0-9.333-4.179-9.333-9.333S8.845 4.667 14 4.667 23.333 8.845 23.333 14 19.155 23.333 14 23.333z"/>
                  <path d="M14 9.333a4.667 4.667 0 100 9.334 4.667 4.667 0 000-9.334z"/>
                </svg>
                <span className="text-sm font-medium text-white/70">Coinbase</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/30 text-center max-w-sm">
              Secure on/off ramps and institutional-grade infrastructure
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
