"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const SendMoneyScene = dynamic(() => import("./SendMoneyScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-5 h-5 border border-white/20 border-t-white/50 rounded-full animate-spin" />
    </div>
  ),
});

interface TransactionProps {
  type: "split" | "payment" | "request";
  amount: string;
  note: string;
  recipients?: string[];
  time: string;
}

function Transaction({ type, amount, note, recipients, time }: TransactionProps) {
  const isIncoming = type === "request";
  
  return (
    <div className={`flex ${isIncoming ? "justify-start" : "justify-end"}`}>
      <div className={`
        max-w-[180px] sm:max-w-[200px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl
        ${isIncoming 
          ? "bg-brand/[0.06]" 
          : "bg-white/[0.03]"
        }
      `}>
        <div className="flex items-center justify-between gap-2 sm:gap-3 mb-1.5 sm:mb-2">
          <span className={`text-[9px] sm:text-[10px] uppercase tracking-wider ${isIncoming ? "text-brand/60" : "text-white/40"}`}>
            {type === "split" && "Split"}
            {type === "payment" && "Sent"}
            {type === "request" && "Request"}
          </span>
          <span className="text-[9px] sm:text-[10px] text-white/25">{time}</span>
        </div>
        <div className="flex items-baseline gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
          <span className={`text-sm sm:text-base font-medium ${isIncoming ? "text-brand" : "text-white"}`}>
            {isIncoming ? "+" : "−"}{amount}
          </span>
          {recipients && recipients.length > 0 && (
            <span className="text-[9px] sm:text-[10px] text-white/30 truncate max-w-[80px]">
              {recipients.join(", ")}
            </span>
          )}
        </div>
        <p className="text-[11px] sm:text-xs text-white/50">{note}</p>
      </div>
    </div>
  );
}

export default function SendMoneyInstantSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    { text: "Split bills in one tap" },
    { text: "Pay friends or workers — and request back" },
    { text: "Add a note that stays attached" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-28 md:py-32 lg:py-48 overflow-hidden bg-[#050506]"
    >
      {/* Subtle atmospheric background */}
      <div 
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-page mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-24 items-center">
          
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center lg:text-left"
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest">Instant Transfers</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-4 sm:mb-6">
              Send money<br />
              <span className="text-white/40">instantly</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/40 mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Split dinner, pay your contractor, or request what you're owed. 
              Every transfer settles in seconds.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 sm:space-y-4 mb-10 sm:mb-12 max-w-sm mx-auto lg:mx-0">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start"
                >
                  <div className="w-4 sm:w-6 h-px bg-white/10" />
                  <span className="text-white/60 text-sm sm:text-base">{feature.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Speed callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-brand/[0.06]"
            >
              <svg 
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs sm:text-sm text-brand/90 font-medium">Resolves in seconds, not minutes</span>
            </motion.div>
          </motion.div>

          {/* Right: Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Network visualization container */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-white/[0.015] backdrop-blur-sm overflow-hidden">
              <div className="aspect-[4/3] sm:aspect-[4/3] w-full">
                {mounted && <SendMoneyScene />}
              </div>
              
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-[#060607] to-transparent pointer-events-none" />
            </div>

            {/* Activity feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-3 sm:mt-4 rounded-xl sm:rounded-2xl bg-white/[0.02] backdrop-blur-sm p-4 sm:p-5"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-widest">Recent</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] text-emerald-500/70">Live</span>
                </div>
              </div>

              {/* Transactions */}
              <div className="space-y-2.5 sm:space-y-3">
                <Transaction
                  type="split"
                  amount="$45"
                  note="Dinner split 🍕"
                  recipients={["Chelle", "Jay", "Mina"]}
                  time="Now"
                />
                <Transaction
                  type="payment"
                  amount="$150"
                  note="Thanks for the help 🙏"
                  recipients={["Worker"]}
                  time="2m"
                />
                <Transaction
                  type="request"
                  amount="$22.50"
                  note="My share 🍕"
                  time="5m"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
