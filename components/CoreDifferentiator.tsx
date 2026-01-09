"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Calculate compound growth
function calculateGrowth(principal: number, rate: number, years: number): number {
  return principal * Math.pow(1 + rate, years);
}

// Generate data points for each year
function generateDataPoints(principal: number, rate: number, years: number): number[] {
  const points: number[] = [];
  for (let i = 0; i <= years; i++) {
    points.push(calculateGrowth(principal, rate, i));
  }
  return points;
}

const STARTING_AMOUNT = 10000;
const YEARS = 30;

// Competitors and rates
const competitors = [
  { name: "Idle Cash", rate: 0.001, color: "#4b5563", apy: "0.1%" },
  { name: "Coinbase USDC", rate: 0.0425, color: "#6b7280", apy: "4.25%" },
  { name: "High-Yield Savings", rate: 0.05, color: "#9ca3af", apy: "5%" },
];

const yukiRate = 0.08; // 8%
const yukiData = generateDataPoints(STARTING_AMOUNT, yukiRate, YEARS);
const competitorData = competitors.map(c => ({
  ...c,
  data: generateDataPoints(STARTING_AMOUNT, c.rate, YEARS)
}));

const maxValue = Math.max(...yukiData) * 1.1;

export default function CoreDifferentiator() {
  const [animationProgress, setAnimationProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 2500;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimationProgress(eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 400);

    return () => clearTimeout(timer);
  }, [isInView]);

  // Convert data to SVG path with smooth curves
  const createPath = (data: number[], progress: number) => {
    const width = 800;
    const height = 320;
    const paddingLeft = 10;
    const paddingRight = 10;
    const paddingTop = 30;
    const paddingBottom = 30;
    
    const visiblePoints = Math.floor(data.length * progress);
    if (visiblePoints < 2) return "";

    const xStep = (width - paddingLeft - paddingRight) / (data.length - 1);
    const yScale = (height - paddingTop - paddingBottom) / maxValue;

    let path = `M ${paddingLeft} ${height - paddingBottom - data[0] * yScale}`;
    
    for (let i = 1; i < visiblePoints; i++) {
      const x = paddingLeft + i * xStep;
      const y = height - paddingBottom - data[i] * yScale;
      
      // Smooth curve
      const prevX = paddingLeft + (i - 1) * xStep;
      const prevY = height - paddingBottom - data[i - 1] * yScale;
      const cpX = (prevX + x) / 2;
      
      path += ` C ${cpX} ${prevY} ${cpX} ${y} ${x} ${y}`;
    }

    return path;
  };

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `$${Math.round(value / 1000)}K`;
    }
    return `$${Math.round(value).toLocaleString()}`;
  };

  const currentYear = Math.floor(animationProgress * YEARS);
  const currentYuki = yukiData[currentYear] || yukiData[0];

  return (
    <section ref={containerRef} className="py-20 sm:py-32 lg:py-44 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-brand/10 rounded-full blur-[120px] sm:blur-[180px]"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-5"
            style={{
              WebkitFontSmoothing: "antialiased",
              textRendering: "geometricPrecision",
            }}
          >
            WATCH IT GROW
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/60"
          >
            $10,000 invested over 30 years
          </motion.p>
        </div>

        {/* Graph container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* SVG Graph */}
          <div className="relative">
            <svg
              viewBox="0 0 800 320"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Subtle horizontal guide lines */}
              {[0.33, 0.66].map((percent) => (
                <line
                  key={percent}
                  x1="10"
                  y1={290 - percent * 230}
                  x2="790"
                  y2={290 - percent * 230}
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="1"
                />
              ))}

              {/* Competitor lines */}
              {competitorData.map((competitor) => (
                <motion.path
                  key={competitor.name}
                  d={createPath(competitor.data, animationProgress)}
                  fill="none"
                  stroke={competitor.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={0.5}
                />
              ))}

              {/* Yuki Line - gradient fill under */}
              <defs>
                <linearGradient id="yukiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C5F800" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#C5F800" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Yuki area fill */}
              {animationProgress > 0.1 && (
                <motion.path
                  d={`${createPath(yukiData, animationProgress)} L ${10 + (Math.floor(yukiData.length * animationProgress) - 1) * (780 / (yukiData.length - 1))} 290 L 10 290 Z`}
                  fill="url(#yukiGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              )}

              {/* Yuki Line */}
              <motion.path
                d={createPath(yukiData, animationProgress)}
                fill="none"
                stroke="#C5F800"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
              />

            </svg>

            {/* Current value overlay */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-right">
              <div className="text-white/40 text-[10px] sm:text-xs mb-0.5">Year {currentYear}</div>
            </div>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: animationProgress > 0.4 ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-x-5 sm:gap-x-8 gap-y-2 mt-8 sm:mt-10"
          >
            {competitorData.map((competitor) => (
              <div key={competitor.name} className="flex items-center gap-2">
                <div 
                  className="w-5 sm:w-6 h-[2px] rounded-full opacity-50"
                  style={{ backgroundColor: competitor.color }}
                />
                <span className="text-white/50 text-[11px] sm:text-xs">{competitor.name}</span>
                <span className="text-white/30 text-[10px] sm:text-[11px]">{competitor.apy}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <div className="w-5 sm:w-6 h-[2px] rounded-full bg-brand" />
              <span className="text-brand text-[11px] sm:text-xs font-medium">Yuki</span>
              <span className="text-brand/70 text-[10px] sm:text-[11px]">8%</span>
            </div>
          </motion.div>

          {/* Final comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animationProgress > 0.95 ? 1 : 0, y: animationProgress > 0.95 ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14 sm:mt-20 text-center"
          >
            <p className="text-white/50 text-sm sm:text-base mb-3">
              After 30 years at <span className="text-brand font-medium">8% APY</span>, your $10K becomes
            </p>
            <div className="inline-flex items-baseline gap-2 pt-2">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand">
                {formatCurrency(yukiData[YEARS])}
              </span>
            </div>
            <p className="text-white/40 text-xs sm:text-sm mt-3">
              vs {formatCurrency(competitorData[2].data[YEARS])} with high-yield savings (5%)
            </p>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: animationProgress > 0.95 ? 1 : 0 }}
            className="text-center text-white/30 text-[10px] sm:text-xs mt-8 sm:mt-10"
          >
            Illustrative projection. Past performance doesn&apos;t guarantee future results.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
