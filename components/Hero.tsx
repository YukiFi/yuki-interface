"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[65vh] flex items-center mx-3 mt-2 rounded-3xl">
      {/* Animated gradient background */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-neutral-950"></div>

        {/* Animated floating orbs */}
        <motion.div
          className="absolute top-1/4 right-1/5 w-64 h-64 rounded-full bg-emerald-400 filter blur-[120px] opacity-20"
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-emerald-300 filter blur-[150px] opacity-20"
          animate={{
            y: [0, 40, 0],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative w-full">
        <div className="mx-auto max-w-7xl px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col max-w-3xl lg:max-w-4xl">
            {/* Animated heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6"
            >
              The future of savings is{" "}
              <span className="relative inline-block">
                <span className="text-emerald-400  tracking-wide">
                  decentralized
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-emerald-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
              </span>
            </motion.h1>

            {/* Animated subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 text-lg leading-8 text-zinc-100 max-w-2xl"
            >
              Low-risk DeFi strategies that grow your wealth—no complexity.
            </motion.p>

            {/* Animated CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#"
                className="text-sm font-semibold px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                Start saving
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-semibold px-6 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm flex items-center justify-center"
              >
                Learn how it works{" "}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>

            {/* Animated key metrics */}
            <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-4 border-t border-white/50 pt-10 w-full">
              {[
                { value: "5-8%", label: "Target Annual Yield" },
                { value: "100%", label: "Transparent" },
                { value: "24/7", label: "Automated" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <motion.p
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="text-emerald-400 text-3xl font-semibold"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="mt-2 text-zinc-100 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
