"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
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
      "Our index token represents participation in a basket of DeFi protocols according to our methodology. Access may be obtained using supported digital assets.",
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

// Simplified strategy categories with improved colors that match the site's aesthetic
const strategies = [
  { name: "Lending", color: "#0F52FB" }, // Blue
  { name: "Liquidity", color: "#3B82F6" }, // Lighter blue
  { name: "Yield Farming", color: "#10B981" }, // Green
  { name: "Stablecoins", color: "#6366F1" }, // Indigo
  { name: "Derivatives", color: "#8B5CF6" }, // Purple
  { name: "Staking", color: "#14B8A6" }, // Teal
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

// Function to create an SVG arc path
const createArcPath = (
  startAngle: number,
  endAngle: number,
  innerRadius: number,
  outerRadius: number
): string => {
  const center = { x: 200, y: 200 };

  // Convert angles from degrees to radians
  const startRad = ((startAngle - 90) * Math.PI) / 180; // -90 to start from top
  const endRad = ((endAngle - 90) * Math.PI) / 180;

  // Calculate points
  const innerStart = {
    x: center.x + innerRadius * Math.cos(startRad),
    y: center.y + innerRadius * Math.sin(startRad),
  };

  const innerEnd = {
    x: center.x + innerRadius * Math.cos(endRad),
    y: center.y + innerRadius * Math.sin(endRad),
  };

  const outerStart = {
    x: center.x + outerRadius * Math.cos(startRad),
    y: center.y + outerRadius * Math.sin(startRad),
  };

  const outerEnd = {
    x: center.x + outerRadius * Math.cos(endRad),
    y: center.y + outerRadius * Math.sin(endRad),
  };

  // Determine if the arc should be drawn the long way around
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  // Create the path
  return `
    M ${outerStart.x} ${outerStart.y}
    A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}
    L ${innerEnd.x} ${innerEnd.y}
    A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}
    Z
  `;
};

export default function ModernHowItWorks() {
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
  const [rebalanceId, setRebalanceId] = useState(Date.now().toString());
  const [rebalanceCounter, setRebalanceCounter] = useState(0);

  // Simplify the allocation generator to ensure it produces different results each time
  const generateAllocations = useCallback(() => {
    // Create completely random weights with wider variation
    const weights = strategies.map(() => 2 + Math.random() * 30);

    // Ensure at least one category gets a significantly higher allocation
    const emphasizedIndex = Math.floor(Math.random() * strategies.length);
    weights[emphasizedIndex] *= 3;

    // Ensure another category gets a significantly lower allocation
    const reducedIndex =
      (emphasizedIndex +
        Math.floor(Math.random() * (strategies.length - 1)) +
        1) %
      strategies.length;
    weights[reducedIndex] *= 0.3;

    // Normalize to 100%
    const sum = weights.reduce((acc, val) => acc + val, 0);
    const normalized = weights.map((w) => (w / sum) * 100);

    // Return weights rounded to 1 decimal place
    return normalized.map((w) => parseFloat(w.toFixed(1)));
  }, []);

  // Direct function to update the pie chart with new allocations
  const updatePieChart = useCallback((allocations: number[]) => {
    // Calculate new slices
    const newSlices = [];
    let startAngle = 0;

    for (let i = 0; i < allocations.length; i++) {
      const percentage = allocations[i];
      const angle = (percentage / 100) * 360;
      const endAngle = startAngle + angle;

      newSlices.push({
        startAngle,
        endAngle,
        percentage,
        color: strategies[i].color,
        path: createArcPath(startAngle, endAngle, 80, 160),
      });

      startAngle = endAngle;
    }

    setSlices(newSlices);
  }, []);

  // Function to animate the transition between allocations
  const animateAllocations = useCallback(
    (timestamp: number) => {
      if (animationStartTimeRef.current === null) {
        animationStartTimeRef.current = timestamp;
      }

      const elapsed = timestamp - animationStartTimeRef.current;
      const progress = Math.min(elapsed / animationDuration, 1);

      // Calculate current animated values
      const newAnimatedAllocations = currentAllocations.map((start, i) => {
        const end = targetAllocations[i];
        return start + (end - start) * progress;
      });

      setAnimatedAllocations(newAnimatedAllocations);
      updatePieChart(newAnimatedAllocations);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateAllocations);
      } else {
        // Animation complete
        setCurrentAllocations(targetAllocations);
        animationStartTimeRef.current = null;
        setIsRebalancing(false);

        // Schedule next rebalance if this was an automatic one
        if (rebalanceIntervalRef.current) {
          timeoutRef.current = setTimeout(() => {
            setCurrentQuarter((prev) => (prev + 1) % 4);
            setActiveTimelineIndex((prev) => (prev + 1) % 4);
            rebalanceNow();
          }, 10000); // 10 seconds between automatic rebalances
        }
      }
    },
    [currentAllocations, targetAllocations, updatePieChart]
  );

  // Function to trigger a rebalance
  const rebalanceNow = useCallback(() => {
    if (isRebalancing) return;

    setIsRebalancing(true);
    const newAllocations = generateAllocations();
    setTargetAllocations(newAllocations);
    setRebalanceId(Date.now().toString());
    setRebalanceCounter((prev) => prev + 1);

    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Start new animation
    animationStartTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animateAllocations);
  }, [isRebalancing, generateAllocations, animateAllocations]);

  // Initialize on client side
  useEffect(() => {
    setIsClientSide(true);

    // Initial setup
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      const initialTargetAllocations = generateAllocations();
      setTargetAllocations(initialTargetAllocations);
      setCurrentAllocations(initialTargetAllocations);
      setAnimatedAllocations(initialTargetAllocations);
      updatePieChart(initialTargetAllocations);

      // Start automatic rebalancing
      rebalanceIntervalRef.current = setTimeout(() => {
        setCurrentQuarter((prev) => (prev + 1) % 4);
        setActiveTimelineIndex((prev) => (prev + 1) % 4);
        rebalanceNow();
      }, 5000); // First rebalance after 5 seconds
    }

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (rebalanceIntervalRef.current) {
        clearTimeout(rebalanceIntervalRef.current);
      }
    };
  }, [generateAllocations, updatePieChart, rebalanceNow]);

  return (
    <>
      <section id="how-it-works" className="py-24 relative bg-fdfffc">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-0f52fb/5 rounded-br-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-0f52fb/5 rounded-tl-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-0f52fb/10 text-0f52fb text-sm font-medium">
              How It Works
            </span>
            <h2 className="text-5xl font-gloock mb-6 text-303130">
              Quarterly Index Rebalancing
            </h2>
            <p className="text-lg text-303130/80 max-w-2xl mx-auto">
              Our protocol automatically adjusts allocations based on our
              transparent methodology, ensuring optimal exposure to the DeFi
              ecosystem.
            </p>
          </div>

          {/* Timeline visualization */}
          <div className="mb-16 overflow-hidden rounded-xl border border-cfd0ce/20 bg-fdfffc shadow-card p-4">
            <h3 className="text-2xl font-gloock mb-4 text-center text-303130">
              Rebalance Schedule
            </h3>
            <div className="animate-timeline flex py-4">
              {timelinePeriods.map((period, index) => (
                <div
                  key={`${period.quarter}-${period.year}-${index}`}
                  className={`flex-shrink-0 w-40 py-3 px-6 mx-2 rounded-lg border ${
                    index % 4 === activeTimelineIndex
                      ? "border-0f52fb bg-0f52fb/10 text-0f52fb"
                      : "border-cfd0ce/20 bg-fdfffc text-303130/70"
                  } transition-all duration-300`}
                >
                  <div className="font-gloock text-lg">
                    {period.quarter} {period.year}
                  </div>
                  <div className="text-xs">Rebalance Period</div>
                </div>
              ))}
            </div>
          </div>

          {/* Steps section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {steps.map((step, index) => (
              <div
                key={step.name}
                className={`bg-fdfffc p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-cfd0ce/20 ${
                  isClientSide ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-0f52fb/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <step.icon className="h-6 w-6 text-0f52fb" />
                  </div>
                  <div>
                    <h3 className="text-xl font-gloock mb-3 text-303130">
                      {step.name}
                    </h3>
                    <p className="text-303130/70">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pie chart visualization */}
          {isClientSide && (
            <div className="bg-fdfffc rounded-xl shadow-card border border-cfd0ce/20 p-8 mb-16">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                  <div className="mb-8">
                    <h3 className="text-3xl font-gloock mb-4 text-303130">
                      Protocol Allocation
                    </h3>
                    <p className="text-303130/80 mb-6">
                      The index is rebalanced quarterly to maintain optimal
                      exposure across different DeFi categories.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {strategies.map((strategy, index) => (
                        <div
                          key={strategy.name}
                          className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                            hoveredSlice === index
                              ? "bg-cfd0ce/20"
                              : "bg-transparent"
                          }`}
                          onMouseEnter={() => setHoveredSlice(index)}
                          onMouseLeave={() => setHoveredSlice(null)}
                        >
                          <div
                            className="w-4 h-4 rounded-full mr-3"
                            style={{ backgroundColor: strategy.color }}
                          ></div>
                          <div>
                            <div className="text-sm font-medium text-303130">
                              {strategy.name}
                            </div>
                            <div className="text-xs text-303130/70">
                              {animatedAllocations[index].toFixed(1)}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={rebalanceNow}
                      className="mt-4 bg-0f52fb text-fdfffc px-5 py-3 rounded-lg font-medium inline-flex items-center hover:bg-0f52fb/90 transition-all duration-300 shadow-button-primary hover:shadow-button-primary-hover"
                      disabled={isRebalancing}
                    >
                      {isRebalancing ? (
                        <>
                          <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                          Rebalancing...
                        </>
                      ) : (
                        <>
                          <ArrowPathIcon className="h-5 w-5 mr-2" />
                          Simulate Rebalance
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-80 h-80">
                    <svg
                      width="400"
                      height="400"
                      viewBox="0 0 400 400"
                      className="transform -rotate-90"
                    >
                      {slices.map((slice, index) => (
                        <g key={`${rebalanceId}-${index}`}>
                          <path
                            d={slice.path}
                            fill={slice.color}
                            stroke="#fdfffc"
                            strokeWidth="1"
                            className={`transition-opacity duration-300 ${
                              hoveredSlice === null || hoveredSlice === index
                                ? "opacity-100"
                                : "opacity-40"
                            }`}
                            onMouseEnter={() => setHoveredSlice(index)}
                            onMouseLeave={() => setHoveredSlice(null)}
                          />
                        </g>
                      ))}
                      <circle
                        cx="200"
                        cy="200"
                        r="60"
                        fill="#fdfffc"
                        className="drop-shadow-md"
                      />
                      <text
                        x="200"
                        y="190"
                        textAnchor="middle"
                        className="text-xs font-gloock fill-303130 transform rotate-90"
                      >
                        {["Q1", "Q2", "Q3", "Q4"][currentQuarter]} 2077
                      </text>
                      <text
                        x="200"
                        y="210"
                        textAnchor="middle"
                        className="text-xs fill-303130/60 transform rotate-90"
                      >
                        Rebalance
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

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
        </div>
      </section>

      {/* Blue background section */}
      <section className="py-24 bg-0f52fb text-fdfffc relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-fdfffc/5 rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-fdfffc/5 rounded-tr-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-6 rounded-full bg-fdfffc/10 text-fdfffc text-sm font-medium">
              Protocol Benefits
            </span>
            <h2 className="text-5xl font-gloock mb-6">
              Why Choose <span className="text-fdfffc">Yuki</span> Protocol?
            </h2>
            <p className="text-xl text-fdfffc/80 max-w-3xl mx-auto">
              Our protocol offers a simplified approach to DeFi participation
              with transparency and efficiency at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-fdfffc/10 backdrop-blur-sm p-8 rounded-xl border border-fdfffc/20 hover:bg-fdfffc/15 transition-all duration-300">
              <div className="w-12 h-12 bg-fdfffc/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-fdfffc"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-gloock mb-3">Simplified Security</h3>
              <p className="text-fdfffc/80">
                Our protocol implements risk management parameters to help
                address various technical risks inherent to DeFi protocols.
              </p>
            </div>

            <div className="bg-fdfffc/10 backdrop-blur-sm p-8 rounded-xl border border-fdfffc/20 hover:bg-fdfffc/15 transition-all duration-300">
              <div className="w-12 h-12 bg-fdfffc/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-fdfffc"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-gloock mb-3">Diversified Exposure</h3>
              <p className="text-fdfffc/80">
                Access a basket of top DeFi protocols through a single token,
                reducing the complexity of managing multiple positions.
              </p>
            </div>

            <div className="bg-fdfffc/10 backdrop-blur-sm p-8 rounded-xl border border-fdfffc/20 hover:bg-fdfffc/15 transition-all duration-300">
              <div className="w-12 h-12 bg-fdfffc/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-fdfffc"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-gloock mb-3">
                Efficient Rebalancing
              </h3>
              <p className="text-fdfffc/80">
                Our quarterly rebalancing ensures your exposure remains
                optimized to the current state of the DeFi ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
