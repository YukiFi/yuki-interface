"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does my money earn if I can use it anytime?",
    answer: "Your balance is deposited into liquid yield sources that allow instant access. It earns continuously and can still be moved anytime.",
  },
  {
    question: "Is my money locked or do I need to unstake?",
    answer: "No. Send, withdraw, or use your money anytime. No waiting periods or extra steps.",
  },
  {
    question: "Do I need to know about crypto to use this?",
    answer: "No. Yuki feels like a normal money app. You see a balance, send, and receive. The technology runs in the background.",
  },
  {
    question: "What are the risks?",
    answer: "Like any yield product, Yuki is not risk-free.\n\nRisks include:\n\n• Smart contract vulnerabilities\n• Market stress or liquidity issues\n• Changes in yield over time\n\nReturns are not guaranteed and rates can change. This is not a traditional bank account.",
  },
  {
    question: "Is this DeFi?",
    answer: "Under the hood, yes. In practice, no.\n\nYuki uses DeFi infrastructure in the background. You don't interact with it directly.\n\n• DeFi is the engine\n• Yuki is the interface\n\nYou get the benefits without needing to understand how it works.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f3] via-[#eae8e4] to-[#e0ddd8]" />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating accent */}
      <motion.div
        animate={{ x: [0, 15, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand/20 to-transparent blur-3xl pointer-events-none"
      />

      <div className="max-w-page mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-black mb-4"
            style={{
              WebkitFontSmoothing: "antialiased",
              textRendering: "geometricPrecision",
            }}
          >
            QUESTIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            For both the curious and the technical.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                {/* Card container - handles background and shape */}
                <motion.div
                  layout
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`rounded-2xl overflow-hidden ${isOpen ? "bg-black" : "bg-white/60 backdrop-blur-sm"}`}
                  style={{ 
                    transition: "background-color 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 sm:p-8"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span 
                        className="text-lg sm:text-xl font-semibold transition-colors duration-500"
                        style={{ color: isOpen ? "#ffffff" : "#000000" }}
                      >
                        {faq.question}
                      </span>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-500"
                        style={{ 
                          backgroundColor: isOpen ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.05)",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        <svg 
                          className="w-5 h-5 transition-colors duration-500"
                          style={{ color: isOpen ? "#ffffff" : "#000000" }}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                          height: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
                          opacity: { duration: 0.3, delay: 0.1 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                          <div className="text-white/70 leading-relaxed whitespace-pre-line text-base sm:text-lg">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
