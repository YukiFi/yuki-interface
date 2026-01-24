"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does Yuki earn yield?",
    answer: "Yuki connects your funds to battle-tested DeFi protocols that generate yield through lending, liquidity provision, and other on-chain strategies. We aggregate across multiple sources to optimize returns while maintaining security and liquidity.",
  },
  {
    question: "What are the risks?",
    answer: "Like any investment, there are risks. Smart contract vulnerabilities, protocol risks, and market volatility can affect returns. We mitigate these through rigorous auditing, diversification across protocols, and maintaining deep liquidity. Your principal is never guaranteed.",
  },
  {
    question: "Is it insured?",
    answer: "On-chain assets are not FDIC insured. However, many of the underlying protocols have their own insurance mechanisms and have been battle-tested with billions in total value locked over multiple years.",
  },
  {
    question: "Is this just a yield-bearing stablecoin?",
    answer: "Yuki is more than that. It's a complete money experience—spend, send, save, and earn—all from a single balance. The yield is continuous and automatic, but the real innovation is how seamlessly it integrates into everyday financial life.",
  },
  {
    question: "What happens if Yuki disappears?",
    answer: "Your funds remain exactly where they are: in smart contracts you control. Yuki is an interface layer. Even if our company ceased to exist, you could access your funds directly on-chain or through any compatible interface.",
  },
  {
    question: "How is this different from a bank?",
    answer: "Banks take custody of your money and lend it out, keeping most of the yield. Yuki never takes custody. Your funds stay on-chain, earning yield that accrues directly to you. No middleman. No fractional reserve. Full transparency.",
  },
  {
    question: "How is this different from DeFi dashboards?",
    answer: "DeFi dashboards are for power users who understand protocols, gas fees, and wallet management. Yuki abstracts all of that complexity. You get the benefits of DeFi with an experience as simple as any banking app.",
  },
];

function FAQItemComponent({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="relative">
      {/* Subtle separator - atmospheric */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.03]" />
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-white group-hover:text-white/90 transition-colors pr-4">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-white/[0.04] flex items-center justify-center mt-1"
        >
          <svg 
            className="w-3 h-3 text-white/50" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/50 text-sm md:text-base leading-relaxed max-w-3xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden bg-[#050506]"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-medium text-white tracking-tight mb-6">
              Questions
            </h2>
            <p className="text-lg text-white/40">
              The things you&apos;re probably wondering.
            </p>
          </motion.div>

          {/* FAQ items - glass panel container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl bg-white/[0.015] backdrop-blur-sm px-6 md:px-8"
          >
            {faqs.map((item, index) => (
              <FAQItemComponent
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </motion.div>

          {/* Contact line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-white/30">
              Have more questions?{" "}
              <a 
                href="mailto:contact@yuki.fi" 
                className="text-white/50 hover:text-white transition-colors underline underline-offset-4"
              >
                Reach out
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
