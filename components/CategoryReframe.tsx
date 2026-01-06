"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CategoryReframe() {
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

      {/* Floating color accents */}
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
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand/40 to-transparent blur-3xl"
        />
      </div>

      <div className="max-w-page mx-auto px-6 relative z-10">
        {/* Main headline */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-8"
          >
            The Problem
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-black mb-6 leading-[1.05]"
            style={{
              WebkitFontSmoothing: "antialiased",
              textRendering: "geometricPrecision",
            }}
          >
            SAVINGS APPS
            <div className="h-2" />
            <span className="text-gray-400">LOCK YOU OUT</span>
          </motion.h2>
        </div>

        {/* Visual comparison - split screen style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16 rounded-3xl overflow-hidden">
          {/* Left - Traditional (Grey/Locked) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 p-10 lg:p-16 relative"
          >
            <div className="absolute top-8 left-8 text-xs font-medium uppercase tracking-wider text-gray-400">
              Traditional
            </div>
            
            {/* Lock bars visual */}
            <div className="flex flex-col items-center justify-center min-h-[300px]">
              <div className="relative">
                {/* Prison bars effect */}
                <div className="flex gap-3 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                      className="w-3 h-32 bg-gray-300 rounded-full origin-bottom"
                    />
                  ))}
                </div>
                
                {/* Money behind bars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="font-display text-5xl text-gray-400">$$$</span>
                </motion.div>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-gray-500 text-center text-lg mt-4"
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
            className="bg-black p-10 lg:p-16 relative overflow-hidden"
          >
            <div className="absolute top-8 left-8 text-xs font-medium uppercase tracking-wider text-white/50">
              Yuki
            </div>
            
            {/* Animated glow */}
            <motion.div
              animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-80 h-80 bg-brand/30 rounded-full blur-3xl"
            />
            
            {/* Flowing money visual */}
            <div className="flex flex-col items-center justify-center min-h-[300px] relative z-10">
              <div className="relative">
                {/* Flowing coins/circles */}
                <div className="relative w-40 h-32">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold text-sm"
                      style={{
                        left: `${i * 25}px`,
                        top: `${Math.sin(i) * 20 + 40}px`,
                      }}
                      animate={{
                        y: [0, -15, 0, 10, 0],
                        x: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      $
                    </motion.div>
                  ))}
                </div>
                
                {/* Growing balance */}
                <motion.div
                  className="text-center mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.span
                    className="font-display text-5xl text-white"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    $1,000
                  </motion.span>
                  <motion.span
                    className="font-display text-3xl text-brand"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    .47
                  </motion.span>
                </motion.div>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-white/70 text-center text-lg mt-6"
              >
                Use it. Send it. <span className="text-brand font-semibold">Earn on it.</span>
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
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xl text-gray-600 mb-2">
            Traditional savings products ask you to park money and wait.
          </p>
          <p className="text-xl text-black font-semibold">
            Yuki lets your money keep working.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
