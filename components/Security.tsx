"use client";
import React from "react";
import { motion } from "framer-motion";

const partners = [
  "Aave",
  "Compound",
  "Morpho",
  "Nexus Mutual",
  "Coinbase",
  "Circle",
  "Uniswap",
  "MakerDAO",
  "Lido",
  "Chainlink",
];

export default function Security() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-page mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight mb-4">
            Built on proven
            <br />
            <span className="text-0f52fb">infrastructure.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Yuki uses battle-tested protocols and security standards that power billions in value.
          </p>
        </motion.div>

        {/* Infinite scrolling partner logos */}
        <div className="relative">
          <div className="overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* First scrolling row */}
            <motion.div
              className="flex gap-12 mb-8"
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`row1-${index}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex-shrink-0 px-8 py-4 bg-gray-50 rounded-2xl cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:shadow-md"
                >
                  <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">
                    {partner}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Second scrolling row (opposite direction) */}
            <motion.div
              className="flex gap-12"
              animate={{ x: [-1920, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`row2-${index}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex-shrink-0 px-8 py-4 bg-gray-50 rounded-2xl cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:shadow-md"
                >
                  <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">
                    {partner}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Simple feature badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-16"
        >
          <div className="px-5 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium">
            Non-custodial
          </div>
          <div className="px-5 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium">
            •
          </div>
          <div className="px-5 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium">
            Transparent on-chain
          </div>
          <div className="px-5 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium">
            •
          </div>
          <div className="px-5 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium">
            Battle-tested security
          </div>
        </motion.div>
      </div>
    </section>
  );
}
