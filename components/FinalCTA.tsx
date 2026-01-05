"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Geometric background elements */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 right-10 w-96 h-96 bg-0f52fb rounded-full blur-3xl"
      />
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-black rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-0f52fb/10 text-0f52fb text-sm font-mono rounded-full mb-8"
          >
            Join the Waitlist
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] tracking-tight mb-8">
            Savings for everyone —{" "}
            <span className="text-gray-400">without thinking about savings.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Yuki makes money work the way it should have all along.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 bg-black text-white font-semibold rounded-full text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <span className="relative z-10">Get Early Access</span>
              
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-0f52fb"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
                Get Early Access
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Curved divider at top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,40 Q360,80 720,40 T1440,40 L1440,0 L0,0 Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
}
