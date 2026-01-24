"use client";

import { useState, useRef, useEffect, useCallback, memo, useMemo } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface DataPoint {
  year: number;
  yuki: number;
  hysa: number;
  traditional: number;
}

const INITIAL_DEPOSIT = 10000;
const YUKI_APY = 0.08; // 8%
const HYSA_APY = 0.04; // 4%
const TRADITIONAL_APY = 0.004; // 0.4%

function calculateGrowth(principal: number, rate: number, years: number): number {
  return principal * Math.pow(1 + rate, years);
}

function generateData(): DataPoint[] {
  const data: DataPoint[] = [];
  for (let year = 0; year <= 10; year++) {
    data.push({
      year,
      yuki: calculateGrowth(INITIAL_DEPOSIT, YUKI_APY, year),
      hysa: calculateGrowth(INITIAL_DEPOSIT, HYSA_APY, year),
      traditional: calculateGrowth(INITIAL_DEPOSIT, TRADITIONAL_APY, year),
    });
  }
  return data;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// OPTIMIZED: Memoized animated number display with reduced spring stiffness
const AnimatedValue = memo(function AnimatedValue({ value, prefix = "" }: { value: number; prefix?: string }) {
  const spring = useSpring(value, { stiffness: 80, damping: 25 });
  const display = useTransform(spring, (v) => formatCurrency(v));
  const [displayValue, setDisplayValue] = useState(formatCurrency(value));

  useEffect(() => {
    spring.set(value);
    const unsubscribe = display.on("change", (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [value, spring, display]);

  return <span>{prefix}{displayValue}</span>;
});

// Full data for all 10 years
const fullData = generateData();
const maxValue = calculateGrowth(INITIAL_DEPOSIT, YUKI_APY, 10);
const minValue = INITIAL_DEPOSIT;
const valueRange = maxValue - minValue;

// Helper to calculate Y position (0-100 scale for viewBox)
const getY = (value: number) => {
  return 100 - ((value - minValue) / valueRange) * 100;
};

// Generate SVG path for a data series using viewBox coordinates
const generatePath = (key: 'yuki' | 'hysa' | 'traditional') => {
  return fullData.map((d, i) => {
    const x = (i / 10) * 100;
    const y = getY(d[key]);
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(" ");
};

export default function APYComparison() {
  const [years, setYears] = useState(5);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const currentData = fullData[years];

  // Slider now maps 1-10 to 0%-100% of the track
  const handleSliderInteraction = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    // Map 0-100% of track to years 1-10
    const newYears = Math.round((x / rect.width) * 9) + 1;
    setYears(Math.max(1, Math.min(10, newYears)));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleSliderInteraction(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleSliderInteraction(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleSliderInteraction(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleSliderInteraction(e.touches[0].clientX);
    };
    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleSliderInteraction]);

  const yukiGain = currentData.yuki - INITIAL_DEPOSIT;
  const hysaGain = currentData.hysa - INITIAL_DEPOSIT;
  const traditionalGain = currentData.traditional - INITIAL_DEPOSIT;

  // Slider position: years 1-10 maps to 0%-100%
  const sliderPercent = ((years - 1) / 9) * 100;
  
  // Dot position on chart
  const dotX = (years / 10) * 100;
  const dotY = getY(currentData.yuki);

  return (
    <section
      id="apy-comparison"
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden bg-[#050506]"
    >
      {/* Subtle atmospheric grid - very light */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-page mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight mb-6">
            Compounding changes everything
          </h2>
          <p className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto">
            Starting with {formatCurrency(INITIAL_DEPOSIT)}. Drag to see the power of 8% APY over time.
          </p>
        </motion.div>

        {/* Main visualization */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Graph area */}
          <div className="relative h-[400px] md:h-[500px] mb-12">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 w-20 flex flex-col justify-between text-right pr-4 text-xs text-white/30 font-mono">
              <span>{formatCurrency(maxValue)}</span>
              <span>{formatCurrency(minValue + valueRange * 0.75)}</span>
              <span>{formatCurrency(minValue + valueRange * 0.5)}</span>
              <span>{formatCurrency(minValue + valueRange * 0.25)}</span>
              <span>{formatCurrency(minValue)}</span>
            </div>

            {/* Chart area */}
            <div className="absolute left-24 right-0 top-0 bottom-8">
              {/* Horizontal grid lines - atmospheric separation */}
              {[0, 0.25, 0.5, 0.75, 1].map((fraction) => (
                <div
                  key={fraction}
                  className="absolute left-0 right-0 h-px bg-white/[0.03]"
                  style={{ top: `${(1 - fraction) * 100}%` }}
                />
              ))}

              {/* SVG curves - using viewBox for proper scaling */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Yuki fill gradient */}
                  <linearGradient id="yukiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e1a8f0" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#e1a8f0" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Traditional bank line - full path */}
                <path
                  d={generatePath('traditional')}
                  fill="none"
                  stroke="rgba(100, 100, 110, 0.6)"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                  style={{ strokeWidth: '1.5px' }}
                />

                {/* HYSA line - full path */}
                <path
                  d={generatePath('hysa')}
                  fill="none"
                  stroke="rgba(140, 140, 150, 0.7)"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                  style={{ strokeWidth: '1.5px' }}
                />

                {/* Yuki fill area - up to current year */}
                <path
                  d={`
                    ${fullData.slice(0, years + 1).map((d, i) => {
                      const x = (i / 10) * 100;
                      const y = getY(d.yuki);
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }).join(" ")}
                    L ${(years / 10) * 100} 100
                    L 0 100
                    Z
                  `}
                  fill="url(#yukiGradient)"
                />

                {/* Yuki line - full path, most prominent */}
                <path
                  d={generatePath('yuki')}
                  fill="none"
                  stroke="#e1a8f0"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  style={{ strokeWidth: '2.5px' }}
                />
              </svg>

              {/* Tracking dot on Yuki line */}
              <div
                className="absolute pointer-events-none z-10"
                style={{
                  left: `${dotX}%`,
                  top: `${dotY}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="relative">
                  {/* Outer glow */}
                  <div className="absolute -inset-3 rounded-full bg-brand/20 blur-md" />
                  {/* Dot */}
                  <div className="relative w-4 h-4 rounded-full bg-brand ring-2 ring-white/80" />
                  {/* Value label - OPTIMIZED: no blur */}
                  <motion.div
                    key={years}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap"
                  >
                    <div className="bg-brand/25 rounded-lg px-3 py-1.5">
                      <span className="text-sm font-medium text-white">
                        <AnimatedValue value={currentData.yuki} />
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* X-axis labels */}
            <div className="absolute left-24 right-0 bottom-0 flex justify-between text-xs text-white/30 font-mono">
              {[0, 2, 4, 6, 8, 10].map((year) => (
                <span key={year}>{year}y</span>
              ))}
            </div>
          </div>

          {/* Elegant Slider */}
          <div className="max-w-xl mx-auto mb-16">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-white/40 uppercase tracking-widest">Time horizon</span>
              <span className="text-sm font-medium text-white tabular-nums">{years} year{years !== 1 ? "s" : ""}</span>
            </div>
            <div
              ref={sliderRef}
              className="relative h-[3px] bg-white/[0.08] rounded-full cursor-pointer overflow-visible"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Track fill */}
              <div
                className="absolute left-0 top-0 h-full bg-brand/70 rounded-full"
                style={{ width: `${sliderPercent}%` }}
              />
              {/* Thumb */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${sliderPercent}%` }}
              >
                {/* Thumb glow */}
                <div className="absolute -inset-1 rounded-full bg-white/20 blur-sm" />
                {/* Thumb core */}
                <div className="relative w-3.5 h-3.5 rounded-full bg-white cursor-grab active:cursor-grabbing hover:scale-110 transition-transform duration-150" />
              </div>
            </div>
            {/* Scale labels */}
            <div className="flex justify-between mt-3 text-[10px] text-white/25 tabular-nums">
              <span>1y</span>
              <span>10y</span>
            </div>
          </div>

          {/* Stats cards - OPTIMIZED: removed backdrop-blur */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Yuki */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative p-6 rounded-2xl bg-brand/[0.08] overflow-hidden group"
            >
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                  <span className="text-sm font-medium text-white/70">Yuki</span>
                  <span className="text-xs text-white/40 ml-auto">8% APY</span>
                </div>
                <div className="text-3xl sm:text-4xl font-semibold text-white mb-1">
                  <AnimatedValue value={currentData.yuki} />
                </div>
                <div className="text-sm text-brand/80">
                  +<AnimatedValue value={yukiGain} /> earned
                </div>
              </div>
            </motion.div>

            {/* HYSA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-6 rounded-2xl bg-white/[0.03]"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-zinc-400" />
                <span className="text-sm font-medium text-white/70">High Yield Savings</span>
                <span className="text-xs text-white/40 ml-auto">4% APY</span>
              </div>
              <div className="text-3xl sm:text-4xl font-semibold text-white/70 mb-1">
                <AnimatedValue value={currentData.hysa} />
              </div>
              <div className="text-sm text-white/40">
                +<AnimatedValue value={hysaGain} /> earned
              </div>
            </motion.div>

            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 rounded-2xl bg-white/[0.02]"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <span className="text-sm font-medium text-white/70">Traditional Bank</span>
                <span className="text-xs text-white/40 ml-auto">~0.4% APY</span>
              </div>
              <div className="text-3xl sm:text-4xl font-semibold text-white/50 mb-1">
                <AnimatedValue value={currentData.traditional} />
              </div>
              <div className="text-sm text-white/30">
                +<AnimatedValue value={traditionalGain} /> earned
              </div>
            </motion.div>
          </div>

          {/* Difference callout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-white/40">
              In {years} year{years !== 1 ? "s" : ""}, Yuki earns you{" "}
              <span className="text-brand font-medium">
                <AnimatedValue value={yukiGain - traditionalGain} prefix="+" />
              </span>{" "}
              more than a traditional bank.
            </p>
            <p className="text-xs text-white/25 mt-4">
              APY is variable and not guaranteed. Past performance does not guarantee future results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
