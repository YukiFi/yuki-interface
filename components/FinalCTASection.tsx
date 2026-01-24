"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { useWaitlist } from "@/context/WaitlistContext";

export default function FinalCTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { openWaitlist } = useWaitlist();

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#0a0a0c]"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-4"
          >
            Ready to start?
          </motion.h2>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/40 mb-8"
          >
            Join the waitlist for early access.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={openWaitlist}
              className="bg-brand hover:bg-brand-light text-brand-900 px-8 py-6 h-auto font-medium transition-all duration-300 hover:brightness-105"
            >
              Join the Waitlist
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
