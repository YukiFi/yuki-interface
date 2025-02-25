"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-neutral-950 px-6 py-24 sm:py-32 lg:px-8 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(10, 120, 80, 0.05) 70%, transparent 100%)",
          }}
        />

        <div
          className="absolute bottom-1/3 left-1/4 w-[30%] h-[30%] bg-emerald-600/10 rounded-full blur-[150px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(5, 150, 105, 0.15) 0%, rgba(4, 120, 87, 0.05) 60%, transparent 100%)",
          }}
        />
      </div>

      <div className="text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-balance text-5xl font-bold tracking-tight text-white sm:text-7xl"
        >
          Page not found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-pretty text-lg font-medium text-zinc-400 sm:text-xl/8 max-w-md mx-auto"
        >
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <Link
            href="/"
            className="text-sm font-semibold px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            Go back home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
