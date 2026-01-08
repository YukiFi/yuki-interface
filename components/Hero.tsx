"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0d0d0d]" />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle color accents - responsive sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 0.15,
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ 
            scale: { duration: 1.5, delay: 2 },
            opacity: { duration: 1.5, delay: 2 },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 },
            y: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 },
          }}
          className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-br from-brand/40 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 0.1,
            x: [0, -25, 35, 0],
            y: [0, 30, -25, 0],
          }}
          transition={{ 
            scale: { duration: 1.5, delay: 2.2 },
            opacity: { duration: 1.5, delay: 2.2 },
            x: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3.2 },
            y: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3.2 },
          }}
          className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tr from-emerald-500/20 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{ 
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.4 },
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.4 },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-radial from-white/20 to-transparent"
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center w-full px-4 sm:px-6">
        {/* YUKI with animated outline echoes */}
        <div className="relative mb-4">
          {/* Outline version going UP - responsive travel distance */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.2, 0.2, 0.15, 0.25, 0.2],
              y: "-25%",
            }}
            transition={{
              opacity: { 
                duration: 1.8, 
                delay: 1,
                times: [0, 0.5, 1],
              },
              y: { 
                duration: 1.8, 
                delay: 1,
              },
            }}
          >
            <motion.span
              className="font-display text-[20vw] sm:text-[18vw] lg:text-[14vw] tracking-tight"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.6)",
                WebkitTextFillColor: "transparent",
                WebkitFontSmoothing: "antialiased",
                textRendering: "geometricPrecision",
                backfaceVisibility: "hidden",
              }}
              animate={{
                y: [0, -8, 0, 5, 0],
                opacity: [1, 0.85, 1, 0.9, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            >
              YUKI
            </motion.span>
          </motion.div>

          {/* Outline version going DOWN - responsive travel distance */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: 0.2, 
              y: "25%",
            }}
            transition={{
              duration: 1.8,
              delay: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.span
              className="font-display text-[20vw] sm:text-[18vw] lg:text-[14vw] tracking-tight"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.6)",
                WebkitTextFillColor: "transparent",
                WebkitFontSmoothing: "antialiased",
                textRendering: "geometricPrecision",
                backfaceVisibility: "hidden",
              }}
              animate={{
                y: [0, 8, 0, -5, 0],
                opacity: [1, 0.9, 1, 0.85, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3.5,
              }}
            >
              YUKI
            </motion.span>
          </motion.div>

          {/* Main solid white YUKI with mouse glow effect */}
          <div
            ref={textRef}
            className="relative cursor-default"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Mouse-following glow */}
            <div
              className="absolute pointer-events-none transition-opacity duration-300"
              style={{
                left: mousePos.x,
                top: mousePos.y,
                width: 300,
                height: 300,
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(197, 248, 0, 0.5) 0%, rgba(197, 248, 0, 0) 70%)",
                opacity: isHovering ? 1 : 0,
                filter: "blur(40px)",
              }}
            />
            
            <motion.h1
              className="font-display text-[20vw] sm:text-[18vw] lg:text-[14vw] text-white tracking-tight relative"
              style={{
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textRendering: "geometricPrecision",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              YUKI
            </motion.h1>
          </div>
        </div>

        {/* Tagline - fades in after outline split */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/60 mb-8 sm:mb-10 max-w-xl lg:max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Your money doesn&apos;t pause when you do.
        </motion.p>

        {/* CTA Button - fades in last */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <a
            href="https://tally.so/r/zxyOJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-black font-semibold rounded-full transition-colors duration-300 hover:bg-brand"
          >
            Join Waitlist
          </a>
        </motion.div>
      </div>
    </section>
  );
}
