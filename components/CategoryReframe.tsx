"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CategoryReframe() {
  const [balance, setBalance] = useState(1000.00);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalance(prev => prev + 0.01);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f3] via-[#eae8e4] to-[#e0ddd8]" />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating color accents - responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          animate={{ x: [0, 20, -10, 0], y: [0, -30, 15, 0] }}
          transition={{
            scale: { duration: 1.5 },
            opacity: { duration: 1.5 },
            x: { duration: 18, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 22, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-brand/40 to-transparent blur-3xl"
        />
      </div>

      <div className="max-w-page mx-auto px-4 sm:px-6 relative z-10">
        {/* Main headline */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded-full mb-6 sm:mb-8"
          >
            The Problem
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black mb-6 leading-[1.05]"
            style={{
              WebkitFontSmoothing: "antialiased",
              textRendering: "geometricPrecision",
            }}
          >
            SAVINGS APPS
            <div className="h-1 sm:h-2" />
            <span className="text-gray-400">LOCK YOU OUT</span>
          </motion.h2>
        </div>

        {/* Visual comparison - split screen style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-10 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Left - Traditional (Grey/Locked) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 p-6 sm:p-10 lg:p-16 relative"
          >
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-xs font-medium uppercase tracking-wider text-gray-400">
              Traditional
            </div>

            {/* Symmetrical layout */}
            <div className="flex flex-col items-center justify-center min-h-[280px] sm:min-h-[340px]">
              {/* Visual - Static lock icon */}
              <div className="h-28 sm:h-36 flex items-center justify-center mb-6 sm:mb-8">
                <div className="relative">
                  {/* Lock body */}
                  <div className="w-20 h-16 sm:w-24 sm:h-20 bg-gray-300 rounded-lg relative">
                    {/* Keyhole */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 rounded-full" />
                      <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-gray-400 mx-auto -mt-1" />
                    </div>
                  </div>
                  {/* Lock shackle */}
                  <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-12 h-8 sm:w-14 sm:h-10 border-4 sm:border-[5px] border-gray-300 rounded-t-full border-b-0" />
                </div>
              </div>

              {/* Dollar amount - same level */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-center mb-4 sm:mb-6"
              >
                <span className="font-display text-4xl sm:text-5xl text-gray-400">$1,000.00</span>
              </motion.div>
              
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-gray-500 text-center text-base sm:text-lg"
              >
                Park it. Lock it. Wait.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Yuki (Active/Flowing) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black p-6 sm:p-10 lg:p-16 relative overflow-hidden"
          >
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-xs font-medium uppercase tracking-wider text-white/50">
              Yuki
            </div>

            {/* Animated glow */}
            <motion.div
              animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-brand/30 rounded-full blur-3xl"
            />
            
            {/* Symmetrical layout */}
            <div className="flex flex-col items-center justify-center min-h-[280px] sm:min-h-[340px] relative z-10">
              {/* Visual - Orbiting rings with pulse */}
              <div className="h-28 sm:h-36 flex items-center justify-center mb-6 sm:mb-8">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
                  {/* Center pulse */}
                  <motion.div
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-brand rounded-full z-10"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Orbiting ring 1 - outer */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ transformOrigin: "center center" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-brand rounded-full" />
                  </motion.div>
                  
                  {/* Orbiting ring 2 - middle */}
                  <motion.div
                    className="absolute inset-4 sm:inset-5"
                    style={{ transformOrigin: "center center" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brand/80 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brand/80 rounded-full" />
                  </motion.div>
                  
                  {/* Orbiting ring 3 - inner */}
                  <motion.div
                    className="absolute inset-8 sm:inset-10"
                    style={{ transformOrigin: "center center" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-brand/60 rounded-full" />
                  </motion.div>

                  {/* Orbit paths (subtle) */}
                  <div className="absolute inset-0 border border-white/10 rounded-full" />
                  <div className="absolute inset-4 sm:inset-5 border border-white/10 rounded-full" />
                  <div className="absolute inset-8 sm:inset-10 border border-white/10 rounded-full" />
                </div>
              </div>

              {/* Dollar amount - same level */}
              <motion.div
                className="text-center mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span 
                  className="font-display text-4xl sm:text-5xl text-white"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  ${balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-white/70 text-center text-base sm:text-lg"
              >
                Use it. Send it. <span className="text-brand font-bold">Earn on it.</span>
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto px-2"
        >
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-2">
            Traditional savings products ask you to park money and wait.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-black font-semibold">
            Yuki lets your money keep working.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
