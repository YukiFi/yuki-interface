"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050506]">
      <div className="text-center px-4 sm:px-6">
        {/* 404 indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-[120px] sm:text-[160px] md:text-[200px] font-medium text-white/[0.03] leading-none select-none">
            404
          </span>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="-mt-24 sm:-mt-32 md:-mt-40"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            Page not found
          </h1>

          <p className="text-white/40 mb-8 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.04] hover:bg-white/[0.08] text-white/70 hover:text-white rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
