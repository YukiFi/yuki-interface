"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Gradient background - matching hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f3] via-[#eae8e4] to-[#e0ddd8]" />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-brand/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 sm:mb-6 px-3 py-1.5 rounded-full bg-black text-white text-xs font-medium"
        >
          404
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-black mb-4 sm:mb-6"
          style={{
            WebkitFontSmoothing: "antialiased",
            textRendering: "geometricPrecision",
          }}
        >
          NOT FOUND
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-md mx-auto"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-black text-white rounded-full font-medium text-sm sm:text-base hover:bg-gray-800 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
