"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const depositMethods = [
  {
    id: "card",
    title: "Debit Card",
    description: "Instant deposits with any Visa or Mastercard",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="14" x2="10" y2="14" />
        <line x1="14" y1="14" x2="16" y2="14" />
      </svg>
    ),
    time: "Instant",
    fee: "2.9%",
    gradient: "from-violet-500 to-purple-600",
    cardLast4: "4821",
  },
  {
    id: "bank",
    title: "Bank Account",
    description: "Connect via ACH for free transfers",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 21h18" />
        <path d="M3 10h18" />
        <path d="M12 3l9 7H3l9-7z" />
        <path d="M5 10v11" />
        <path d="M19 10v11" />
        <path d="M9 10v11" />
        <path d="M15 10v11" />
      </svg>
    ),
    time: "1-3 days",
    fee: "Free",
    gradient: "from-blue-500 to-cyan-500",
    cardLast4: "7892",
  },
  {
    id: "crypto",
    title: "Stablecoins",
    description: "Deposit stablecoins directly",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v2m0 8v2" />
        <path d="M9 9.5c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5-1.5 2-3 2.5c-1.5.5-3 1-3 2.5s1.5 2.5 3 2.5 3-1 3-2.5" />
      </svg>
    ),
    time: "< 1 min",
    fee: "Free",
    gradient: "from-emerald-400 to-teal-500",
    cardLast4: "0x89...3f2a",
  },
];

export default function EasyDeposit() {
  const [activeMethod, setActiveMethod] = useState<string>("card");
  const [autoRotate, setAutoRotate] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveMethod(prev => {
        const currentIndex = depositMethods.findIndex(m => m.id === prev);
        return depositMethods[(currentIndex + 1) % depositMethods.length].id;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  // Trigger success animation on method change
  useEffect(() => {
    setShowSuccess(false);
    const timer = setTimeout(() => setShowSuccess(true), 600);
    return () => clearTimeout(timer);
  }, [activeMethod]);

  const activeMethodData = depositMethods.find(m => m.id === activeMethod);

  return (
    <section className="py-20 sm:py-32 lg:py-44 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Single ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[180px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pr-0"
          >
            <div className="flex justify-end text-right">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 bg-brand text-black text-xs sm:text-sm font-medium rounded-full mb-6 sm:mb-8"
              >
                Easy Onboarding
              </motion.div>
            </div>

            <h2
              className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.05] text-right"
              style={{
                WebkitFontSmoothing: "antialiased",
                textRendering: "geometricPrecision",
              }}
            >
              DEPOSIT
              <div className="h-1 sm:h-2" />
              <span className="text-white/40">YOUR WAY</span>
            </h2>

            <p className="text-white/60 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-md text-right ml-auto">
              Get started in seconds with the method that works best for you. Your money starts earning immediately.
            </p>

            {/* Deposit method cards */}
            <div className="space-y-2 sm:space-y-3">
              {depositMethods.map((method, i) => (
                <motion.button
                  key={method.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  onMouseEnter={() => {
                    setActiveMethod(method.id);
                    setAutoRotate(false);
                  }}
                  onMouseLeave={() => setAutoRotate(true)}
                  onClick={() => {
                    setActiveMethod(method.id);
                    setAutoRotate(false);
                  }}
                  className={`w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-500 text-left ${
                    activeMethod === method.id
                      ? "bg-white/10"
                      : "bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                    activeMethod === method.id 
                      ? `bg-gradient-to-br ${method.gradient} text-white shadow-lg` 
                      : "bg-white/10 text-white/60"
                  }`}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 [&>svg]:w-full [&>svg]:h-full">
                      {method.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm sm:text-lg transition-colors duration-300 ${
                      activeMethod === method.id ? "text-white" : "text-white/70"
                    }`}>{method.title}</div>
                    <div className="text-white/40 text-xs sm:text-sm truncate hidden sm:block">{method.description}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                      method.fee === "Free" 
                        ? activeMethod === method.id ? "text-brand" : "text-brand/60"
                        : "text-white/50"
                    }`}>
                      {method.fee}
                    </div>
                    <div className="text-white/30 text-[10px] sm:text-xs">{method.time}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
