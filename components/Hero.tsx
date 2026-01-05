"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const mainTitle = "Your money doesn't have to stop.".split(" ");
  
  const [counter, setCounter] = useState(0);
  const [isBalanceHovered, setIsBalanceHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 0.01);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white flex items-center justify-center min-h-screen">
      {/* Large Geometric Shapes - Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue Circle - Top Right */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-0f52fb"
        />
        
        {/* Blue Square - Bottom Left - Rotated */}
        <motion.div
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{ scale: 1, rotate: 45, opacity: 0.05 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-0f52fb"
        />
        
        {/* Gray Circle - Bottom Right */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.03 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-gray-900"
        />

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating balance card - More unique style */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5, y: 100 }}
        animate={{ opacity: 1, scale: 1, rotate: -2, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05, rotate: 0 }}
        onHoverStart={() => setIsBalanceHovered(true)}
        onHoverEnd={() => setIsBalanceHovered(false)}
        className="absolute top-24 right-16 w-64 bg-black rounded-3xl p-6 hidden lg:block cursor-pointer shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-0f52fb animate-pulse" />
          <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">
            Live Balance
          </span>
        </div>
        <div className="text-3xl font-bold text-white mb-2">
          ${(1247.89 + counter).toFixed(2)}
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-0f52fb" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10a1 1 0 112 0v4a1 1 0 11-2 0v-4zm2-3a1 1 0 11-2 0 1 1 0 012 0z"/>
          </svg>
          <span className="text-xs text-0f52fb font-semibold">Earning in real-time</span>
        </div>
        
        {/* Animated gradient border effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(135deg, transparent 30%, rgba(15, 82, 251, ${isBalanceHovered ? 0.2 : 0}) 100%)`,
          }}
          animate={{
            background: isBalanceHovered 
              ? [
                  `linear-gradient(135deg, transparent 30%, rgba(15, 82, 251, 0.2) 100%)`,
                  `linear-gradient(225deg, transparent 30%, rgba(15, 82, 251, 0.2) 100%)`,
                  `linear-gradient(315deg, transparent 30%, rgba(15, 82, 251, 0.2) 100%)`,
                  `linear-gradient(45deg, transparent 30%, rgba(15, 82, 251, 0.2) 100%)`,
                ]
              : []
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating transaction examples - More stylized */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: 3 }}
        animate={{ opacity: 1, x: 0, rotate: 2 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05, rotate: 0 }}
        className="absolute bottom-32 left-16 w-52 bg-gradient-to-br from-blue-50 to-white border-2 border-0f52fb/20 rounded-2xl p-4 hidden lg:block cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-0f52fb flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-xs text-gray-500 font-medium">Received</div>
            <div className="font-bold text-black text-lg">+$50.00</div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="text-xs text-gray-400">From Sarah • Just now</div>
        </div>
      </motion.div>

      {/* Small floating earnings indicators */}
      <AnimatePresence>
        {[
          { delay: 1.5, x: "12%", y: "25%" },
          { delay: 2, x: "85%", y: "35%" },
          { delay: 2.5, x: "20%", y: "70%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, -30],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute hidden lg:block"
            style={{ left: item.x, top: item.y }}
          >
            <div className="px-3 py-1.5 bg-0f52fb text-white text-xs font-bold rounded-full shadow-lg">
              +$0.{Math.floor(Math.random() * 99)}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main content */}
      <div className="max-w-page mx-auto px-6 relative z-10 text-center">
        {/* Main Title - Animated word by word */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-black tracking-tight leading-[1.05]">
            {mainTitle.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-3 sm:mr-4"
              >
                {word === "stop." ? (
                  <span className="text-0f52fb">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: (mainTitle.length * 0.15) + 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            <span className="font-semibold text-black">Yuki</span> is a new way money works.
            <br />
            Send, receive, and earn — all from one balance.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: (mainTitle.length * 0.15) + 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(15, 82, 251, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-black text-white font-semibold rounded-full transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Join Waitlist</span>
            <motion.div
              className="absolute inset-0 bg-0f52fb"
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

      {/* Curved divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,64 C360,100 720,20 1440,64 L1440,120 L0,120 Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
}

