"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Notification {
  id: number;
  type: "received" | "yield" | "sent";
  from?: string;
  to?: string;
  amount: number;
  note?: string;
}

const transactionNotes = [
  "for pizza 🍕",
  "thanks for gas",
  "coffee ☕",
  "dinner last night",
  "movie tickets",
  "birthday gift 🎁",
  "rent share",
  "groceries",
  "uber ride",
  "brunch",
  "concert tickets 🎵",
  "thanks!",
  "splitting the bill",
  "for drinks",
  "gym membership",
];

const notificationTemplates = [
  { type: "received" as const, from: "Sarah", amount: 50.00 },
  { type: "yield" as const, amount: 0.12 },
  { type: "sent" as const, to: "Mike", amount: 25.00 },
  { type: "yield" as const, amount: 0.08 },
  { type: "received" as const, from: "Emma", amount: 100.00 },
  { type: "yield" as const, amount: 0.15 },
  { type: "sent" as const, to: "Alex", amount: 35.00 },
  { type: "received" as const, from: "Jordan", amount: 75.00 },
  { type: "sent" as const, to: "Chris", amount: 20.00 },
  { type: "received" as const, from: "Taylor", amount: 45.00 },
];

function getRandomNote() {
  return transactionNotes[Math.floor(Math.random() * transactionNotes.length)];
}

function ActivityItem({ notif, compact = false }: { notif: Notification; compact?: boolean }) {
  return (
    <div className={`bg-white/5 ${compact ? "rounded-xl p-3" : "rounded-2xl p-4"} flex items-center gap-${compact ? "3" : "4"}`}>
      <div className={`${compact ? "w-8 h-8" : "w-10 h-10"} rounded-full flex items-center justify-center shrink-0 ${
        notif.type === "yield" 
          ? "bg-brand/20" 
          : notif.type === "received" 
            ? "bg-green-500/20" 
            : "bg-white/10"
      }`}>
        {notif.type === "yield" ? (
          <svg className={`${compact ? "w-4 h-4" : "w-5 h-5"} text-brand`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        ) : notif.type === "received" ? (
          <svg className={`${compact ? "w-4 h-4" : "w-5 h-5"} text-green-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        ) : (
          <svg className={`${compact ? "w-4 h-4" : "w-5 h-5"} text-white/60`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-white ${compact ? "text-xs" : "text-sm"} font-medium truncate`}>
          {notif.type === "yield" && "Yield earned"}
          {notif.type === "received" && `From ${notif.from}`}
          {notif.type === "sent" && `To ${notif.to}`}
        </div>
        {notif.note && (
          <div className={`text-white/40 ${compact ? "text-[10px]" : "text-xs"} truncate`}>
            {notif.note}
          </div>
        )}
      </div>
      <div className={`${compact ? "text-xs" : "text-sm"} font-bold shrink-0 ${
        notif.type === "sent" ? "text-white/60" : notif.type === "yield" ? "text-brand" : "text-green-400"
      }`}>
        {notif.type === "sent" ? "-" : "+"}${notif.amount.toFixed(2)}
      </div>
    </div>
  );
}

export default function CoreDifferentiator() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [balance, setBalance] = useState(1247.89);
  const [currentTime, setCurrentTime] = useState("");
  const idCounter = useRef(0);
  const templateIndex = useRef(0);

  // Real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Add notifications continuously
  useEffect(() => {
    const addNotification = () => {
      const template = notificationTemplates[templateIndex.current % notificationTemplates.length];
      const newNotif: Notification = {
        ...template,
        id: idCounter.current++,
        note: template.type !== "yield" ? getRandomNote() : undefined,
      };
      
      setNotifications((prev) => {
        const updated = [newNotif, ...prev];
        return updated.slice(0, 8);
      });
      
      templateIndex.current++;
    };

    const timer = setTimeout(() => {
      addNotification();
      const interval = setInterval(addNotification, 3000);
      return () => clearInterval(interval);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Slowly earning yield
  useEffect(() => {
    const interval = setInterval(() => {
      setBalance((prev) => prev + 0.01);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-40 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 rounded-full blur-[120px]"
      />

      <div className="max-w-page mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4"
            style={{
              WebkitFontSmoothing: "antialiased",
              textRendering: "geometricPrecision",
            }}
          >
            MONEY IN MOTION
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 max-w-xl mx-auto"
          >
            Send, receive, and earn — all at once.
          </motion.p>
        </div>

        {/* Devices container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
        >
          {/* Desktop Monitor */}
          <div className="hidden lg:block">
            <div className="w-[560px]">
              {/* Monitor frame */}
              <div className="bg-[#1a1a1a] rounded-2xl p-3 shadow-2xl shadow-black/50">
                {/* Screen */}
                <div className="bg-black rounded-xl overflow-hidden h-[380px]">
                  {/* Browser bar */}
                  <div className="px-4 py-2.5 bg-[#1a1a1a] flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 bg-black/50 rounded-md px-3 py-1.5 text-white/40 text-xs">
                      app.yuki.fi
                    </div>
                    <span className="text-white/40 text-xs">{currentTime}</span>
                  </div>

                  {/* App content */}
                  <div className="p-6 flex gap-8 h-[calc(100%-44px)]">
                    {/* Left - Balance */}
                    <div className="w-1/3">
                      <div className="text-white/50 text-sm mb-2">Your Balance</div>
                      <motion.div
                        className="font-display text-3xl text-white"
                        animate={{ scale: [1, 1.01, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        ${balance.toFixed(2)}
                      </motion.div>
                    </div>

                    {/* Right - Activity */}
                    <div className="flex-1 flex flex-col min-w-0">
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Activity</div>
                      <div className="flex-1 overflow-hidden">
                        <AnimatePresence mode="popLayout">
                          {notifications.slice(0, 5).map((notif) => (
                            <motion.div
                              key={notif.id}
                              layout
                              initial={{ opacity: 0, y: -20, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ 
                                duration: 0.4,
                                layout: { duration: 0.3, ease: "easeOut" },
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              className="mb-2"
                            >
                              <ActivityItem notif={notif} compact />
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Monitor stand */}
              <div className="w-28 h-14 bg-[#1a1a1a] mx-auto -mt-1 rounded-b-lg" />
              <div className="w-48 h-3 bg-[#1a1a1a] mx-auto rounded-full" />
            </div>
          </div>

          {/* Phone */}
          <div className="w-[320px] relative">
            {/* Phone frame */}
            <div className="bg-[#1a1a1a] rounded-[2.5rem] p-3 shadow-2xl shadow-black/50">
              {/* Screen */}
              <div className="bg-black rounded-[2rem] overflow-hidden h-[600px] flex flex-col">
                {/* Status bar */}
                <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                  <span className="text-white/50 text-xs font-medium">{currentTime}</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white/50 rounded-sm" />
                    <div className="w-4 h-2 bg-white/50 rounded-sm" />
                    <div className="w-5 h-2.5 bg-white/50 rounded-sm" />
                  </div>
                </div>

                {/* App content */}
                <div className="px-5 pb-6 flex-1 flex flex-col">
                  {/* Balance header */}
                  <div className="text-center py-6">
                    <div className="text-white/50 text-sm mb-2">Your Balance</div>
                    <motion.div
                      className="font-display text-4xl text-white"
                      animate={{ scale: [1, 1.01, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ${balance.toFixed(2)}
                    </motion.div>
                  </div>

                  {/* Activity feed */}
                  <div className="flex-1 flex flex-col min-h-0">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Activity</div>
                    <div className="flex-1 overflow-hidden">
                      <AnimatePresence mode="popLayout">
                        {notifications.slice(0, 6).map((notif) => (
                          <motion.div
                            key={notif.id}
                            layout
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ 
                              duration: 0.4,
                              layout: { duration: 0.3, ease: "easeOut" },
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="mb-2"
                          >
                            <ActivityItem notif={notif} />
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
