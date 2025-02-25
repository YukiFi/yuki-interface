"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-zinc-800/50 pt-8 sm:mt-20 lg:mt-24"
        >
          <p className="text-xs leading-5 text-zinc-500">
            &copy; {new Date().getFullYear()} Grove. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
