"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CoreDifferentiator() {
  return (
    <section className="py-32 lg:py-40 bg-0f52fb relative overflow-hidden">
      {/* Animated geometric patterns */}
      <div className="absolute inset-0">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            style={{
              backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
              backgroundSize: "40px 40px",
            }}
            className="w-full h-full"
          />
        </div>

        {/* Large floating shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />

        {/* Diagonal lines */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              white 50px,
              white 52px
            )`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-mono rounded-full mb-8"
          >
            The Core Difference
          </motion.div>

          {/* Main statement */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            Your balance doesn't stop earning{" "}
            <span className="relative inline-block">
              <span className="relative z-10">when you use it.</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-2 left-0 h-3 bg-white/20 -z-0"
              />
            </span>
          </h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto"
          >
            Sending money transfers the value — not the friction.
          </motion.p>
        </motion.div>
      </div>

      {/* Curved dividers */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,40 Q360,80 720,40 T1440,40 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
}
