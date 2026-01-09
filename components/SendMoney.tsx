"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const people = [
  { name: "Sarah", avatar: "S", color: "bg-pink-500" },
  { name: "Mike", avatar: "M", color: "bg-blue-500" },
  { name: "Emma", avatar: "E", color: "bg-purple-500" },
  { name: "Alex", avatar: "A", color: "bg-orange-500" },
  { name: "Jordan", avatar: "J", color: "bg-teal-500" },
];

const notes = [
  "Dinner 🍕",
  "Thanks!",
  "Rent",
  "Coffee ☕",
  "Movie tickets",
  "Uber",
  "Birthday 🎁",
  "Groceries",
];

interface Transaction {
  id: number;
  from: typeof people[0];
  to: typeof people[0];
  amount: number;
  note: string;
}

export default function SendMoney() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [activeTransaction, setActiveTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    let id = 0;
    
    const createTransaction = () => {
      const fromIndex = Math.floor(Math.random() * people.length);
      let toIndex = Math.floor(Math.random() * people.length);
      while (toIndex === fromIndex) {
        toIndex = Math.floor(Math.random() * people.length);
      }
      
      const tx: Transaction = {
        id: id++,
        from: people[fromIndex],
        to: people[toIndex],
        amount: Math.floor(Math.random() * 150) + 10,
        note: notes[Math.floor(Math.random() * notes.length)],
      };
      
      setActiveTransaction(tx);
      
      setTimeout(() => {
        setTransactions(prev => [tx, ...prev].slice(0, 4));
        setActiveTransaction(null);
      }, 1500);
    };

    const interval = setInterval(createTransaction, 3500);
    setTimeout(createTransaction, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-32 lg:py-44 relative overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f3] via-[#eae8e4] to-[#e0ddd8]" />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded-full mb-6 sm:mb-8"
            >
              Send & Receive
            </motion.div>

            <h2
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-black mb-6 leading-[1.05]"
              style={{
                WebkitFontSmoothing: "antialiased",
                textRendering: "geometricPrecision",
              }}
            >
              PAY<div className="h-1 sm:h-2" /> ANYONE,
              <div className="h-1 sm:h-2" />
              <span className="text-gray-400">INSTANTLY.</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-md">
              Split dinner, pay rent, send gifts — just like Venmo, but your money earns while it waits.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {[
                { title: "No fees", desc: "Send any amount, completely free" },
                { title: "Instant transfers", desc: "Money arrives in seconds, not days" },
                { title: "Earn while you wait", desc: "Your balance grows even between payments" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-brand flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-black font-semibold text-sm sm:text-base">{item.title}</div>
                    <div className="text-gray-500 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Phone mockup - fixed size */}
            <div className="bg-black rounded-[2.5rem] sm:rounded-[3rem] p-3 sm:p-4 shadow-2xl shadow-black/20 w-[300px] sm:w-[340px] mx-auto">
              <div className="bg-[#0a0a0a] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden h-[500px] sm:h-[560px]">
                {/* Status bar */}
                <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                  <span className="text-white/50 text-xs font-medium">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white/50 rounded-sm" />
                    <div className="w-4 h-2 bg-white/50 rounded-sm" />
                    <div className="w-5 h-2.5 bg-white/50 rounded-sm" />
                  </div>
                </div>

                {/* App content - fixed layout */}
                <div className="px-5 pb-6 h-[calc(100%-40px)] flex flex-col">
                  {/* Header */}
                  <div className="text-center py-3">
                    <div className="text-white/40 text-xs">Activity</div>
                  </div>

                  {/* Active transaction area - fixed height */}
                  <div className="h-[140px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {activeTransaction ? (
                        <motion.div
                          key={activeTransaction.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="w-full"
                        >
                          <div className="flex items-center justify-center gap-3">
                            {/* From avatar */}
                            <div className={`w-12 h-12 rounded-full ${activeTransaction.from.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                              {activeTransaction.from.avatar}
                            </div>

                            {/* Arrow with amount */}
                            <div className="flex flex-col items-center">
                              <div className="text-brand font-bold">${activeTransaction.amount}</div>
                              <div className="w-12 h-0.5 bg-brand rounded-full mt-1" />
                              <svg className="w-3 h-3 text-brand -mt-0.5" viewBox="0 0 24 24">
                                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
                              </svg>
                            </div>

                            {/* To avatar */}
                            <div className={`w-12 h-12 rounded-full ${activeTransaction.to.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                              {activeTransaction.to.avatar}
                            </div>
                          </div>
                          <div className="text-center text-white/40 text-sm mt-3">
                            {activeTransaction.note}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-white/20 text-sm"
                        >
                          Waiting for transaction...
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Transaction history - fills remaining space */}
                  <div className="flex-1 overflow-hidden">
                    <div className="space-y-2">
                      {transactions.map((tx) => (
                        <motion.div
                          key={tx.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white/5 rounded-xl p-3 flex items-center gap-3"
                        >
                          <div className={`w-8 h-8 rounded-full ${tx.from.color} flex items-center justify-center text-white font-bold text-xs`}>
                            {tx.from.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white text-xs font-medium truncate">
                              {tx.from.name} → {tx.to.name}
                            </div>
                            <div className="text-white/40 text-[10px] truncate">{tx.note}</div>
                          </div>
                          <div className="text-brand text-xs font-bold">${tx.amount}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-20 sm:h-20 bg-brand rounded-2xl flex items-center justify-center shadow-lg"
            >
              <span className="text-black font-bold text-xl sm:text-2xl">$0</span>
              <span className="text-black/60 text-xs absolute -bottom-6 whitespace-nowrap">fees</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
