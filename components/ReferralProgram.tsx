"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ReferralProgram() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-page mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight mb-4"
          >
            Invite friends.
            <br />
            <span className="text-0f52fb">Everyone earns more.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          <div className="p-8 bg-gray-50 rounded-3xl">
            <div className="text-lg font-semibold text-black mb-2">
              Base rate applies automatically
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your balance starts earning from day one, no setup required.
            </p>
          </div>

          <div className="p-8 bg-0f52fb rounded-3xl">
            <div className="text-lg font-semibold text-white mb-2">
              Referral bonuses increase your earning rate
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              As your network grows and uses Yuki, your benefits grow too.
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-500 italic mt-12"
        >
          No spam. No gimmicks. Real usage, real rewards.
        </motion.p>
      </div>
    </section>
  );
}
