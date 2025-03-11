"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowPathIcon,
  BanknotesIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    name: "Access the ecosystem",
    description:
      "Yuki tokens represent participation in a basket of DeFi protocols according to our index methodology. Access may be obtained using supported digital assets.",
    icon: BanknotesIcon,
  },
  {
    name: "Index rebalancing",
    description:
      "Our protocol adjusts allocations quarterly based on our transparent index methodology, which evaluates various protocol metrics and market factors.",
    icon: ArrowPathIcon,
  },
  {
    name: "Risk considerations",
    description:
      "We implement risk management parameters to help address protocol-specific risks, though all participation involves significant risks inherent to digital assets.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Transparent operations",
    description:
      "Monitor index composition and methodology changes in real-time through our dashboard. Protocol participation doesn't involve lockup periods.",
    icon: LockClosedIcon,
  },
];

// Simplified strategy categories with clean colors
const strategies = [
  { name: "Lending", color: "#B186FF" },
  { name: "Liquidity Provision", color: "#FF007A" },
  { name: "Yield Farming", color: "#00D395" },
  { name: "Stablecoins", color: "#1AAB9B" },
  { name: "Derivatives", color: "#A5A4CE" },
  { name: "Staking", color: "#00A3FF" },
  { name: "Governance", color: "#5641F1" },
  { name: "Insurance", color: "#FF5D89" },
];

// Quarters for the timeline (repeating to create infinite scroll)
const timelinePeriods = [
  { quarter: "Q1", year: 2077 },
  { quarter: "Q2", year: 2077 },
  { quarter: "Q3", year: 2077 },
  { quarter: "Q4", year: 2077 },
  { quarter: "Q1", year: 2077 },
  { quarter: "Q2", year: 2077 },
  { quarter: "Q3", year: 2077 },
  { quarter: "Q4", year: 2077 },
  { quarter: "Q1", year: 2077 },
  { quarter: "Q2", year: 2077 },
  { quarter: "Q3", year: 2077 },
  { quarter: "Q4", year: 2077 },
  // Repeat to ensure seamless looping
  { quarter: "Q1", year: 2077 },
  { quarter: "Q2", year: 2077 },
  { quarter: "Q3", year: 2077 },
  { quarter: "Q4", year: 2077 },
];

// Initial equal allocations to prevent hydration mismatch
const initialAllocations = strategies.map(() => 12.5);

// Generate random allocations that sum to 100
const generateAllocations = () => {
  // Start with random weights that aren't too small
  const weights = strategies.map(() => 5 + Math.random() * 15);

  // Normalize to ensure sum is 100
  const sum = weights.reduce((acc, val) => acc + val, 0);
  const normalized = weights.map((w) => (w / sum) * 100);

  // Return weights rounded to 1 decimal place
  return normalized.map((w) => parseFloat(w.toFixed(1)));
};

// Function to calculate SVG path for a pie slice
const getSlicePath = (
  startAngle: number,
  endAngle: number,
  radius = 150,
  innerRadius = 80
) => {
  const center = { x: 200, y: 200 };

  // Outer arc
  const startOuter = {
    x: center.x + radius * Math.cos(startAngle),
    y: center.y + radius * Math.sin(startAngle),
  };
  const endOuter = {
    x: center.x + radius * Math.cos(endAngle),
    y: center.y + radius * Math.sin(endAngle),
  };

  // Inner arc
  const startInner = {
    x: center.x + innerRadius * Math.cos(endAngle),
    y: center.y + innerRadius * Math.sin(endAngle),
  };
  const endInner = {
    x: center.x + innerRadius * Math.cos(startAngle),
    y: center.y + innerRadius * Math.sin(startAngle),
  };

  const largeArcFlagOuter = endAngle - startAngle <= Math.PI ? "0" : "1";
  const largeArcFlagInner = endAngle - startAngle <= Math.PI ? "0" : "1";

  // Create a path with both outer and inner arcs (donut shape)
  return `
    M ${startOuter.x} ${startOuter.y}
    A ${radius} ${radius} 0 ${largeArcFlagOuter} 1 ${endOuter.x} ${endOuter.y}
    L ${startInner.x} ${startInner.y}
    A ${innerRadius} ${innerRadius} 0 ${largeArcFlagInner} 0 ${endInner.x} ${endInner.y}
    Z
  `;
};

export default function ModernHowItWorks() {
  // Use a ref to store quarter-specific allocations to prevent hydration issues
  const quarterAllocationsRef = useRef<Record<string, number[]>>({
    Q1: [],
    Q2: [],
    Q3: [],
    Q4: [],
  });

  const [currentAllocations, setCurrentAllocations] =
    useState(initialAllocations);
  const [targetAllocations, setTargetAllocations] =
    useState(initialAllocations);
  const [animatedAllocations, setAnimatedAllocations] =
    useState(initialAllocations);
  const [isRebalancing, setIsRebalancing] = useState(false);
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
  const [currentQuarter, setCurrentQuarter] = useState(0);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [isClientSide, setIsClientSide] = useState(false);
  const animationRef = useRef<number | null>(null);
  const animationStartTimeRef = useRef<number | null>(null);
  const animationDuration = 2000; // Longer duration for more visible transition
  const firstRenderRef = useRef(true);
  const [slices, setSlices] = useState<any[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rebalanceIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Pre-calculate allocation sets on client-side only
  useEffect(() => {
    if (!isClientSide) {
      setIsClientSide(true);

      // Generate specific allocation sets for each quarter
      quarterAllocationsRef.current = {
        Q1: generateAllocations(),
        Q2: generateAllocations(),
        Q3: generateAllocations(),
        Q4: generateAllocations(),
      };

      // Set initial allocations to current quarter (Q1)
      const initialQuarter = "Q1";
      const initialSet = quarterAllocationsRef.current[initialQuarter];
      setCurrentAllocations(initialSet);
      setTargetAllocations(initialSet);
      setAnimatedAllocations(initialSet);

      // Set initial slices
      updateSlices(initialSet);

      firstRenderRef.current = false;
    }

    // Start the rebalancing cycle
    startAutoRebalance();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rebalanceIntervalRef.current)
        clearInterval(rebalanceIntervalRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isClientSide]);

  // Start automatic rebalancing every 8 seconds
  const startAutoRebalance = () => {
    // Initial rebalance after a short delay
    timeoutRef.current = setTimeout(() => {
      rebalanceNow();

      // Then set up regular interval
      rebalanceIntervalRef.current = setInterval(rebalanceNow, 8000);
    }, 2000);
  };

  // Function to trigger a rebalance
  const rebalanceNow = () => {
    // Move to next quarter
    const nextQuarterIndex = (activeTimelineIndex + 1) % timelinePeriods.length;
    setActiveTimelineIndex(nextQuarterIndex);

    const nextQuarter = timelinePeriods[nextQuarterIndex].quarter;
    setCurrentQuarter(["Q1", "Q2", "Q3", "Q4"].indexOf(nextQuarter));

    // Get the allocation set for this quarter
    const newTargetAllocations = [
      ...quarterAllocationsRef.current[nextQuarter],
    ];

    // Start rebalancing
    setIsRebalancing(true);
    setTargetAllocations(newTargetAllocations);

    // Save current allocations as starting point
    setCurrentAllocations([...animatedAllocations]);

    // Start animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationStartTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animateAllocations);
  };

  // Animation function for smooth transitions
  const animateAllocations = (timestamp: number) => {
    if (animationStartTimeRef.current === null) {
      animationStartTimeRef.current = timestamp;
    }

    const elapsed = timestamp - animationStartTimeRef.current;
    const progress = Math.min(elapsed / animationDuration, 1);

    // Use cubic-bezier easing for more natural motion
    const easedProgress = cubicBezier(0.25, 0.1, 0.25, 1.0, progress);

    // Calculate intermediate allocations based on progress
    const newAllocations = currentAllocations.map((start, i) => {
      const end = targetAllocations[i];
      const current = start + (end - start) * easedProgress;
      return parseFloat(current.toFixed(1));
    });

    setAnimatedAllocations(newAllocations);
    updateSlices(newAllocations);

    if (progress < 1) {
      // Continue animation
      animationRef.current = requestAnimationFrame(animateAllocations);
    } else {
      // Animation complete
      setCurrentAllocations([...targetAllocations]);
      setAnimatedAllocations([...targetAllocations]);
      updateSlices(targetAllocations);
      setIsRebalancing(false);
      animationStartTimeRef.current = null;
    }
  };

  // Cubic bezier easing function
  const cubicBezier = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    t: number
  ) => {
    // Simple cubic bezier calculation for easing
    const cx = 3 * x1;
    const bx = 3 * (x2 - x1) - cx;
    const ax = 1 - cx - bx;
    const cy = 3 * y1;
    const by = 3 * (y2 - y1) - cy;
    const ay = 1 - cy - by;

    const tSquared = t * t;
    const tCubed = tSquared * t;

    return ay * tCubed + by * tSquared + cy * t;
  };

  // Update slices based on allocations
  const updateSlices = (allocations: number[]) => {
    const newSlices = [];
    let startAngle = -Math.PI / 2; // Start from top

    // Calculate slice for each allocation
    for (let i = 0; i < allocations.length; i++) {
      const allocation = allocations[i];
      const angle = (allocation / 100) * (2 * Math.PI);
      const endAngle = startAngle + angle;

      newSlices.push({
        path: getSlicePath(startAngle, endAngle),
        name: strategies[i].name,
        color: strategies[i].color,
        allocation: allocation,
      });

      startAngle = endAngle;
    }

    setSlices(newSlices);
  };

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/5 pointer-events-none"></div>
      <div className="absolute -bottom-64 -left-64 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
            Protocol Mechanics
          </span>
          <h2 className="text-4xl font-light mb-6">
            How{" "}
            <span className="font-vacay bg-gradient-accent bg-clip-text text-transparent">
              Yuki
            </span>{" "}
            Works
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            Yuki Protocol provides exposure to a basket of top DeFi protocols
            through a single token. Our methodology adapts to the changing
            landscape with quarterly rebalancing.
          </p>
        </div>

        {/* Horizontal scrolling timeline */}
        {isClientSide && (
          <div className="relative mb-16 overflow-hidden">
            <div className="h-20 w-full bg-white/5 backdrop-blur-sm rounded-xl relative">
              {/* Active period indicator (stays in center) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-24 border-l-2 border-r-2 border-white/20 z-10 flex items-center justify-center">
                <div className="h-16 w-1 bg-gradient-to-b from-purple-500/80 to-blue-500/80 rounded-full animate-pulse"></div>
              </div>

              {/* Scrolling timeline */}
              <div className="absolute whitespace-nowrap animate-timeline">
                {timelinePeriods.map((period, index) => (
                  <div
                    key={index}
                    className={`timeline-item inline-block w-40 h-full text-center py-4
                    ${
                      index === activeTimelineIndex
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  >
                    <div className="text-2xl font-medium">{period.quarter}</div>
                    <div className="text-sm">{period.year}</div>
                  </div>
                ))}
              </div>

              {/* Left fade */}
              <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[rgb(10,10,20)] to-transparent z-20"></div>

              {/* Right fade */}
              <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[rgb(10,10,20)] to-transparent z-20"></div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side: minimalist description */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <ArrowPathIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Adaptive Strategy
                  </h3>
                  <p className="text-gray-300">
                    Our index automatically rebalances every quarter, adjusting
                    to protocol metrics and market conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white text-xl">Current Period</span>
                <span
                  className={`text-white font-medium text-xl ${
                    isRebalancing ? "animate-pulse" : ""
                  }`}
                >
                  {timelinePeriods[activeTimelineIndex].quarter}{" "}
                  {timelinePeriods[activeTimelineIndex].year}
                </span>
              </div>

              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${(activeTimelineIndex % 4) * 25 + 25}%` }}
                ></div>
              </div>

              {isRebalancing && (
                <div className="text-sm text-blue-400 flex items-center justify-end gap-2">
                  <ArrowPathIcon className="h-4 w-4 animate-spin" />
                  Rebalancing strategies...
                </div>
              )}
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400">
                Digital asset participation involves significant risk
              </p>
            </div>
          </div>

          {/* Right side: minimal pie chart */}
          <div>
            <div className="relative">
              {/* SVG Pie Chart */}
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                className="mx-auto"
              >
                {/* Subtle glow effect for pie chart */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Pie slices with smooth animations */}
                {slices.map((slice, i) => (
                  <path
                    key={`${strategies[i].name}-${i}`}
                    d={slice.path}
                    fill={slice.color}
                    className="transition-all duration-700 ease-in-out"
                    style={{
                      opacity:
                        hoveredSlice === i
                          ? 1
                          : hoveredSlice !== null
                          ? 0.6
                          : 0.9,
                      transform:
                        hoveredSlice === i ? "scale(1.02)" : "scale(1)",
                    }}
                    stroke="rgba(255,255,255,0.15)" // Subtle white outline
                    strokeWidth="1"
                    onMouseEnter={() => setHoveredSlice(i)}
                    onMouseLeave={() => setHoveredSlice(null)}
                  >
                    <title>{`${slice.name}: ${slice.allocation.toFixed(
                      1
                    )}%`}</title>
                  </path>
                ))}

                {/* Center circle (hole) with subtle outline */}
                <circle
                  cx="200"
                  cy="200"
                  r="80"
                  fill="rgba(15,15,25,0.9)"
                  stroke="rgba(255, 255, 255, 0.15)" // Matching outer outline
                  strokeWidth="1.5"
                  filter="url(#glow)"
                />

                {/* Center text */}
                <text
                  x="200"
                  y="190"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="500"
                  className="font-medium"
                >
                  {isRebalancing ? "Rebalancing" : "Strategy Mix"}
                </text>
                <text
                  x="200"
                  y="215"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.7)"
                  fontSize="14"
                >
                  {timelinePeriods[activeTimelineIndex].quarter}{" "}
                  {timelinePeriods[activeTimelineIndex].year}
                </text>
              </svg>
            </div>

            {/* Minimal legend */}
            <div className="mt-6 grid grid-cols-2 gap-2 max-w-sm mx-auto text-sm">
              {strategies.map((strategy, index) => (
                <div
                  key={strategy.name}
                  className="flex items-center gap-2"
                  onMouseEnter={() => setHoveredSlice(index)}
                  onMouseLeave={() => setHoveredSlice(null)}
                >
                  <div
                    className="w-3 h-3 rounded-full border border-white/15"
                    style={{ backgroundColor: strategy.color }}
                  ></div>
                  <span className="text-gray-300">{strategy.name}</span>
                  {isClientSide && (
                    <span
                      className={`text-gray-400 ml-auto ${
                        isRebalancing && index === hoveredSlice
                          ? "animate-pulse"
                          : ""
                      }`}
                    >
                      {`${animatedAllocations[index].toFixed(1)}%`}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add the CSS animation for the timeline */}
      <style jsx>{`
        @keyframes scrollTimeline {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-timeline {
          animation: scrollTimeline 60s linear infinite;
          /* Ensure we have enough timeline items to make the loop seamless */
          width: fit-content;
        }
      `}</style>
    </section>
  );
}
