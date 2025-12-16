"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden bg-dark-900 flex flex-col items-start text-left">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-0f52fb/30 bg-0f52fb/10 text-0f52fb text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-0f52fb animate-pulse"></span>
            Non-Custodial Savings Protocol
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-fdfffc tracking-tight leading-[1.1] mb-6 max-w-2xl"
        >
          A crypto-native savings account that &nbsp;
          <span className="text-gray-500">just works.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-gray-400 max-w-xl font-light leading-relaxed mb-12"
        >
Earn risk-adjusted yield automatically. Pick a risk level, deposit once, and stay fully in control of your funds.
</motion.p>

        {/* Large Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] bg-dark-800/50 rounded-lg border border-white/5 overflow-hidden shadow-2xl backdrop-blur-sm group"
        >
          {/* Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-0f52fb/5 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Abstract UI Representation */}
          <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col">
            {/* Fake Header - Hidden on very small screens */}
            <div className="hidden sm:flex items-center justify-between mb-6 md:mb-12 opacity-50">
               <div className="flex gap-4 md:gap-8">
                  <div className="w-16 md:w-24 h-1.5 md:h-2 bg-white/20 rounded-full"></div>
                  <div className="w-10 md:w-16 h-1.5 md:h-2 bg-white/10 rounded-full"></div>
                  <div className="hidden md:block w-16 h-2 bg-white/10 rounded-full"></div>
               </div>
               <div className="flex gap-1.5 md:gap-2">
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20"></div>
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20"></div>
               </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex items-center justify-center relative">
               {/* Central Yield Figure */}
               <div className="text-center relative z-10 px-2">
                  <div className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-light text-fdfffc tracking-tighter leading-none">
                    Coming Soon
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-mono mt-1 sm:mt-2 uppercase tracking-wider sm:tracking-widest">
                    Adaptive On-Chain Savings
                  </div>
               </div>

               {/* Grid Lines */}
               <div className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02]" 
                    style={{ 
                        backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}>
               </div>
               
               {/* Floating Elements (Orbs) - Smaller on mobile */}
               <div className="absolute top-1/4 left-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-blue-500/5 rounded-full blur-2xl animate-float"></div>
               <div className="absolute bottom-1/4 right-1/4 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-purple-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Bottom Bar - Hidden on very small screens */}
            <div className="hidden sm:flex h-8 md:h-12 border-t border-white/5 items-center justify-between px-2 md:px-4 opacity-50 mt-6 md:mt-12">
                <div className="flex gap-2 md:gap-4">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                    <div className="w-20 md:w-32 h-1.5 md:h-2 bg-white/10 rounded-full"></div>
                </div>
                <div className="w-16 md:w-24 h-1.5 md:h-2 bg-white/10 rounded-full"></div>
            </div>
          </div>
          
          {/* Reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
