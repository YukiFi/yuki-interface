"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f3] via-[#eae8e4] to-[#e0ddd8]" />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle color accents - with floating animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 0.12,
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ 
            scale: { duration: 1.5, delay: 2 },
            opacity: { duration: 1.5, delay: 2 },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 },
            y: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 },
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand/30 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 0.08,
            x: [0, -25, 35, 0],
            y: [0, 30, -25, 0],
          }}
          transition={{ 
            scale: { duration: 1.5, delay: 2.2 },
            opacity: { duration: 1.5, delay: 2.2 },
            x: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3.2 },
            y: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3.2 },
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-200/20 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{ 
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.4 },
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.4 },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-white/40 to-transparent"
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center w-full px-6">
        {/* YUKI with animated outline echoes */}
        <div className="relative mb-4">
          {/* Outline version going UP - with breathing animation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.15, 0.15, 0.12, 0.18, 0.15],
              y: [-120, -120, -115, -125, -120],
            }}
            transition={{
              opacity: { 
                duration: 1.8, 
                delay: 1,
                times: [0, 0.5, 1],
              },
              y: { 
                duration: 1.8, 
                delay: 1,
              },
            }}
          >
            <motion.span
              className="font-display text-[22vw] sm:text-[20vw] lg:text-[16vw] tracking-tight"
              style={{
                WebkitTextStroke: "2px #000",
                WebkitTextFillColor: "transparent",
                WebkitFontSmoothing: "antialiased",
                textRendering: "geometricPrecision",
                backfaceVisibility: "hidden",
              }}
              animate={{
                y: [0, -8, 0, 5, 0],
                opacity: [1, 0.85, 1, 0.9, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            >
              YUKI
            </motion.span>
          </motion.div>

          {/* Outline version going DOWN - with breathing animation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.15, 
              y: 120,
            }}
            transition={{
              duration: 1.8,
              delay: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.span
              className="font-display text-[22vw] sm:text-[20vw] lg:text-[16vw] tracking-tight"
              style={{
                WebkitTextStroke: "2px #000",
                WebkitTextFillColor: "transparent",
                WebkitFontSmoothing: "antialiased",
                textRendering: "geometricPrecision",
                backfaceVisibility: "hidden",
              }}
              animate={{
                y: [0, 8, 0, -5, 0],
                opacity: [1, 0.9, 1, 0.85, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3.5,
              }}
            >
              YUKI
            </motion.span>
          </motion.div>

          {/* Main solid black YUKI */}
          <motion.h1
            className="font-display text-[22vw] sm:text-[20vw] lg:text-[16vw] text-black tracking-tight relative"
            style={{
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "geometricPrecision",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            YUKI
          </motion.h1>
        </div>

        {/* Tagline - fades in after outline split */}
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Your money doesn&apos;t pause when you do.
        </motion.p>

        {/* CTA Button - fades in last */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 75, 173, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-black text-white font-semibold rounded-full transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Join Waitlist</span>
            <motion.div
              className="absolute inset-0 bg-brand"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
              Join Waitlist
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
