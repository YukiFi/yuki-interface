"use client";
import React from "react";
import { motion } from "framer-motion";
import { LockClosedIcon } from "@heroicons/react/24/outline";

export default function CategoryReframe() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Large geometric background element */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-0f52fb rounded-full blur-3xl"
      />

      <div className="max-w-page mx-auto px-6 relative z-10">
        {/* Asymmetric header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-black text-white text-sm font-mono rounded-full mb-6">
              The Problem
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-[1.1]">
              Savings apps make you{" "}
              <span className="text-gray-400">stop using</span> your money.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            <p className="mb-4">
              Traditional savings products ask you to park money and wait.
            </p>
            <p className="text-black font-semibold text-xl">
              Yuki lets your money keep working — even while you use it.
            </p>
          </motion.div>
        </div>

        {/* Unique visual comparison - diagonal split */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Left side - Traditional (takes up 2 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 relative group"
            >
              <div className="bg-white p-8 rounded-3xl relative overflow-hidden">
                {/* Locked icon */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <LockClosedIcon className="w-8 h-8 text-gray-400" />
                </div>

                <div className="mb-8">
                  <div className="text-sm text-gray-500 font-mono uppercase tracking-wider mb-2">
                    Traditional
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Savings Account</h3>
                </div>

                {/* Static money box */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <div className="text-4xl font-bold text-gray-400 text-center">
                    $1,000.00
                  </div>
                  <div className="text-center text-sm text-gray-500 mt-2">Locked</div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>Lock money away</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>Wait to withdraw</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>Limited access</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Middle - VS indicator */}
            <div className="lg:col-span-1 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-16 h-16 bg-black rounded-full flex items-center justify-center relative"
              >
                <span className="text-white font-bold text-sm">VS</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-2 border-0f52fb rounded-full"
                />
              </motion.div>
            </div>

            {/* Right side - Yuki (takes up 2 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 relative group"
            >
              <div className="bg-gradient-to-br from-0f52fb to-blue-600 p-8 rounded-3xl relative overflow-hidden text-white">
                {/* Animated flow icon */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </motion.div>
                </div>

                <div className="mb-8">
                  <div className="text-sm text-white/70 font-mono uppercase tracking-wider mb-2">
                    The Future
                  </div>
                  <h3 className="text-2xl font-bold text-white">Yuki</h3>
                </div>

                {/* Dynamic money box */}
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-6 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/5"
                    animate={{ 
                      x: ["-100%", "100%"],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl font-bold text-white text-center relative z-10"
                  >
                    $1,000.45
                  </motion.div>
                  <div className="text-center text-sm text-white/70 mt-2 flex items-center justify-center gap-1">
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block w-2 h-2 bg-white rounded-full"
                    />
                    <span>Earning</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Use freely</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Send & receive instantly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span>Earns every second</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature tags - more playful layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center items-center"
        >
          <span className="text-gray-400 font-medium">Everything you need →</span>
          {["Hold a balance", "Send money", "Receive money"].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-5 py-2.5 bg-white text-gray-900 rounded-full transition-all duration-300 hover:shadow-md font-medium text-sm"
            >
              {feature}
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-5 py-2.5 bg-0f52fb text-white rounded-full shadow-lg font-semibold text-sm"
          >
            + Earn automatically
          </motion.div>
        </motion.div>
      </div>

      {/* Curved divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
