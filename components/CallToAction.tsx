"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <div className="bg-neutral-950">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-900 to-emerald-950 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        >
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to grow your savings?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-zinc-300">
            Join the waitlist today and be among the first to access Grove when
            we launch. Early users receive special benefits and higher yields.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="text-sm font-semibold px-6 py-2.5 bg-white text-black rounded-full hover:bg-gray-100 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              Join the waitlist
            </Link>
            <Link
              href="#"
              className="text-sm/6 font-semibold text-white flex items-center"
            >
              Learn more{" "}
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </Link>
          </div>

          {/* Radial gradient background */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#gradient-emerald)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient-emerald">
                <stop stopColor="#10B981" /> {/* emerald-500 */}
                <stop offset={1} stopColor="#065F46" /> {/* emerald-800 */}
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
