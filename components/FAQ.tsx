"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
    answer: "Like any yield product, Yuki is not risk-free.\n\nRisks include:\n\n• smart contract vulnerabilities\n• market stress or liquidity issues\n• changes in yield over time\n\nReturns are not guaranteed and rates can change. This is not a traditional bank account.",
  },
  {
    question: "Is this DeFi?",
    answer: "Under the hood, yes. In practice, no.\n\nYuki uses DeFi infrastructure in the background. You don't interact with it directly.\n\n• DeFi is the engine\n• Yuki is the interface\n\nYou get the benefits without needing to understand how it works.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-page mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight mb-4">
            Questions we get <span className="text-0f52fb">a lot.</span>
          </h2>
          <p className="text-lg text-gray-600">
            For both the curious and the technical.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white hover:bg-gray-50 rounded-3xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 sm:px-8 py-6 flex items-start justify-between text-left group"
              >
                <span className="text-base sm:text-lg font-semibold text-black pr-4 group-hover:text-0f52fb transition-colors">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-400 transition-all duration-300 flex-shrink-0 mt-1 ${
                    openIndex === index ? "rotate-180 text-0f52fb" : "group-hover:text-0f52fb"
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 pt-0">
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 italic mt-12"
        >
          Still have questions? Join our{" "}
          <a
            href="https://discord.com/invite/ZuS6Mj4r8j"
            target="_blank"
            rel="noopener noreferrer"
            className="text-0f52fb hover:underline"
          >
            Discord
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
