"use client";
import React, { useState, useEffect } from "react";
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
      "Our protocol adjusts allocations monthly based on our transparent index methodology, which evaluates various protocol metrics and market factors.",
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

// Strategy categories with winter-themed colors
const strategies = [
  { name: "Lending", color: "#0F52FB", icon: "💰" }, // Deep blue
  { name: "Liquidity", color: "#3B82F6", icon: "💧" }, // Blue
  { name: "Yield Farming", color: "#60A5FA", icon: "🌱" }, // Light blue
  { name: "Stablecoins", color: "#93C5FD", icon: "🔒" }, // Pale blue
  { name: "Derivatives", color: "#BFDBFE", icon: "📈" }, // Very light blue
  { name: "Staking", color: "#DBEAFE", icon: "⚓" }, // Almost white blue
];

export default function ModernHowItWorks() {
  const [isClientSide, setIsClientSide] = useState(false);
  const [allocations, setAllocations] = useState<number[]>([]);
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState(0);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [timelinePeriods, setTimelinePeriods] = useState<
    Array<{ month: string; year: number }>
  >([]);
  const [activeRoadmapItem, setActiveRoadmapItem] = useState<number | null>(
    null
  );

  // Roadmap data
  const roadmapItems = [
    {
      period: "Q1 2025",
      title: "Foundation Building",
      description:
        "We'll finalize our design and architecture while beginning internal testing to ensure a solid foundation for our users.",
      highlights: [
        "Complete protocol design and specifications",
        "Begin comprehensive testing phase",
        "Develop seamless fiat on/off ramp integration",
      ],
      icon: "🏗️",
    },
    {
      period: "Q2 2025",
      title: "Security & Beta Launch",
      description:
        "After rigorous security audits, we'll launch our beta version on Ethereum mainnet with limited capacity for early adopters.",
      highlights: [
        "Complete security audits with top firms",
        "Release beta version with core features",
        "Gather user feedback for improvements",
      ],
      icon: "🚀",
    },
    {
      period: "Q3 2025",
      title: "Feature Expansion",
      description:
        "We'll enhance our protocol with additional yield strategies and optimize our automated systems for better performance.",
      highlights: [
        "Add new yield strategies across DeFi categories",
        "Optimize rebalancing and harvesting mechanisms",
        "Improve user dashboard with enhanced analytics",
      ],
      icon: "⚙️",
    },
    {
      period: "Q4 2025",
      title: "Growth & Accessibility",
      description:
        "Our focus shifts to making the protocol more accessible while preparing for full-scale launch and multi-chain support.",
      highlights: [
        "Enhance user interface for broader accessibility",
        "Prepare for multi-chain deployment",
        "Build strategic partnerships within DeFi",
      ],
      icon: "📈",
    },
    {
      period: "Q1 2026",
      title: "Full Launch & Beyond",
      description:
        "With our complete feature set, we'll fully launch the protocol and continue improving based on community feedback.",
      highlights: [
        "Execute full-scale public launch",
        "Expand support team for seamless user experience",
        "Implement community-driven improvements",
      ],
      icon: "🌟",
    },
  ];

  // Generate random allocations that sum to 100%
  const generateAllocations = () => {
    // Start with random values
    const randomValues = strategies.map(() => Math.random() * 20 + 5);

    // Calculate sum
    const sum = randomValues.reduce((acc, val) => acc + val, 0);

    // Normalize to 100%
    return randomValues.map((val) =>
      parseFloat(((val / sum) * 100).toFixed(1))
    );
  };

  // Generate timeline periods
  const generateTimelinePeriods = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonthIndex = currentDate.getMonth();

    const periods = [];

    // Generate 24 months starting from current month
    for (let i = 0; i < 24; i++) {
      const monthIndex = (currentMonthIndex + i) % 12;
      const yearOffset = Math.floor((currentMonthIndex + i) / 12);
      const year = currentYear + yearOffset;

      periods.push({
        month: months[monthIndex],
        year: year,
      });
    }

    return periods;
  };

  // Initialize
  useEffect(() => {
    setIsClientSide(true);

    // Generate timeline periods
    const periods = generateTimelinePeriods();
    setTimelinePeriods(periods);
    setCurrentMonth(periods[0].month);
    setCurrentYear(periods[0].year);

    // Set initial allocations
    const initialAllocations = generateAllocations();
    setAllocations(initialAllocations);

    // Set up interval for updating allocations
    const intervalId = setInterval(() => {
      const newAllocations = generateAllocations();
      setAllocations(newAllocations);

      // Update timeline every 4 updates
      setActiveTimelineIndex((prev) => {
        const newIndex = (prev + 1) % 12;

        // Update month/year when timeline advances
        if (newIndex % 3 === 0) {
          const nextPeriodIndex = Math.min(
            Math.floor(newIndex / 3),
            periods.length - 1
          );
          setCurrentMonth(periods[nextPeriodIndex].month);
          setCurrentYear(periods[nextPeriodIndex].year);
        }

        return newIndex;
      });
    }, 3000);

    // Cleanup
    return () => clearInterval(intervalId);
  }, []);

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
            <h2 className="text-5xl font-recoleta font-bold mb-6 text-303130">
              Yuki Token Portfolio
            </h2>
            <p className="text-lg text-303130/80 max-w-2xl mx-auto">
              Our protocol automatically allocates your assets across multiple
              DeFi strategies, creating a balanced portfolio with a unique
              geometric pattern.
            </p>
          </div>

          {/* Portfolio Visualization */}
          <div className="mb-16 overflow-hidden rounded-xl border border-cfd0ce/10 bg-gradient-to-r from-fdfffc to-0f52fb/5 shadow-lg">
            <div className="p-10 md:p-12">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Hexagonal Frost Pattern Visualization */}
                  <div className="relative">
                    <div className="aspect-square max-w-md mx-auto relative">
                      {/* Outer decorative ring */}
                      <div
                        className="absolute inset-0 border-4 border-dashed border-0f52fb/20 rounded-full animate-spin-slow"
                        style={{ animationDuration: "120s" }}
                      ></div>

                      {/* Frost pattern SVG */}
                      <svg
                        viewBox="0 0 400 400"
                        className="absolute inset-0 w-full h-full"
                      >
                        <defs>
                          <filter
                            id="glow"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                          >
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feComposite
                              in="SourceGraphic"
                              in2="blur"
                              operator="over"
                            />
                          </filter>
                        </defs>

                        {/* Background circle */}
                        <circle cx="200" cy="200" r="190" fill="#f8fafc" />

                        {isClientSide && allocations.length > 0 && (
                          <>
                            {/* Main hexagonal structure */}
                            {Array.from({ length: 6 }).map((_, i) => {
                              const angle = (i * 60 * Math.PI) / 180;
                              const x1 = 200;
                              const y1 = 200;
                              const x2 = 200 + 180 * Math.cos(angle);
                              const y2 = 200 + 180 * Math.sin(angle);

                              // Calculate which strategy this branch represents
                              const strategyIndex = i % strategies.length;
                              const strategyColor =
                                strategies[strategyIndex].color;

                              return (
                                <g key={`branch-${i}`}>
                                  {/* Main branch */}
                                  <line
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke={strategyColor}
                                    strokeWidth="3"
                                    opacity="0.8"
                                    filter="url(#glow)"
                                  />

                                  {/* Secondary branches */}
                                  {Array.from({ length: 2 }).map((_, j) => {
                                    const branchLength = 60 + j * 40;
                                    const branchX =
                                      200 + branchLength * Math.cos(angle);
                                    const branchY =
                                      200 + branchLength * Math.sin(angle);

                                    // Calculate perpendicular angle
                                    const perpAngle1 = angle + Math.PI / 3;
                                    const perpAngle2 = angle - Math.PI / 3;

                                    const length = 30 + j * 20;

                                    const endX1 =
                                      branchX + length * Math.cos(perpAngle1);
                                    const endY1 =
                                      branchY + length * Math.sin(perpAngle1);
                                    const endX2 =
                                      branchX + length * Math.cos(perpAngle2);
                                    const endY2 =
                                      branchY + length * Math.sin(perpAngle2);

                                    return (
                                      <g key={`secondary-${i}-${j}`}>
                                        <line
                                          x1={branchX}
                                          y1={branchY}
                                          x2={endX1}
                                          y2={endY1}
                                          stroke={strategyColor}
                                          strokeWidth="2"
                                          opacity="0.7"
                                        />
                                        <line
                                          x1={branchX}
                                          y1={branchY}
                                          x2={endX2}
                                          y2={endY2}
                                          stroke={strategyColor}
                                          strokeWidth="2"
                                          opacity="0.7"
                                        />

                                        {/* Tertiary branches */}
                                        {j === 1 && (
                                          <>
                                            <line
                                              x1={endX1}
                                              y1={endY1}
                                              x2={
                                                endX1 +
                                                15 * Math.cos(perpAngle1)
                                              }
                                              y2={
                                                endY1 +
                                                15 * Math.sin(perpAngle1)
                                              }
                                              stroke={strategyColor}
                                              strokeWidth="1.5"
                                              opacity="0.6"
                                            />
                                            <line
                                              x1={endX2}
                                              y1={endY2}
                                              x2={
                                                endX2 +
                                                15 * Math.cos(perpAngle2)
                                              }
                                              y2={
                                                endY2 +
                                                15 * Math.sin(perpAngle2)
                                              }
                                              stroke={strategyColor}
                                              strokeWidth="1.5"
                                              opacity="0.6"
                                            />
                                          </>
                                        )}
                                      </g>
                                    );
                                  })}

                                  {/* Strategy indicator */}
                                  <circle
                                    cx={200 + 150 * Math.cos(angle)}
                                    cy={200 + 150 * Math.sin(angle)}
                                    r={10 + allocations[strategyIndex] / 5}
                                    fill={strategyColor}
                                    opacity="0.8"
                                    className="animate-pulse-slow"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                  />
                                </g>
                              );
                            })}

                            {/* Connecting hexagon */}
                            <polygon
                              points={Array.from({ length: 6 })
                                .map((_, i) => {
                                  const angle = (i * 60 * Math.PI) / 180;
                                  const x = 200 + 80 * Math.cos(angle);
                                  const y = 200 + 80 * Math.sin(angle);
                                  return `${x},${y}`;
                                })
                                .join(" ")}
                              fill="none"
                              stroke="#0F52FB"
                              strokeWidth="1.5"
                              opacity="0.4"
                            />

                            {/* Inner hexagon */}
                            <polygon
                              points={Array.from({ length: 6 })
                                .map((_, i) => {
                                  const angle = (i * 60 * Math.PI) / 180;
                                  const x = 200 + 40 * Math.cos(angle);
                                  const y = 200 + 40 * Math.sin(angle);
                                  return `${x},${y}`;
                                })
                                .join(" ")}
                              fill="#0F52FB"
                              opacity="0.2"
                            />

                            {/* Center */}
                            <circle
                              cx="200"
                              cy="200"
                              r="25"
                              fill="#0F52FB"
                              className="animate-pulse-slow"
                            />
                            <text
                              x="200"
                              y="205"
                              textAnchor="middle"
                              fill="#fdfffc"
                              fontSize="14"
                              fontWeight="bold"
                              fontFamily="sans-serif"
                            >
                              YUKI
                            </text>

                            {/* Decorative dots */}
                            {Array.from({ length: 24 }).map((_, i) => {
                              const angle = (i * 15 * Math.PI) / 180;
                              const distance = 170 + (i % 3) * 10;
                              return (
                                <circle
                                  key={`dot-${i}`}
                                  cx={200 + distance * Math.cos(angle)}
                                  cy={200 + distance * Math.sin(angle)}
                                  r={1.5}
                                  fill="#0F52FB"
                                  opacity={0.3 + (i % 3) * 0.2}
                                  className="animate-pulse-slow"
                                  style={{ animationDelay: `${i * 0.1}s` }}
                                />
                              );
                            })}
                          </>
                        )}
                      </svg>
                    </div>

                    {/* Legend */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {strategies.map((strategy, index) => (
                        <div
                          key={`legend-${index}`}
                          className="flex items-center"
                        >
                          <div
                            className="w-4 h-4 rounded-full mr-2"
                            style={{ backgroundColor: strategy.color }}
                          ></div>
                          <span className="text-sm text-303130/80">
                            {strategy.name}{" "}
                            {isClientSide && allocations[index]
                              ? `(${allocations[index]}%)`
                              : ""}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Portfolio Description */}
                  <div>
                    <h3 className="text-2xl font-recoleta font-bold text-303130 mb-6">
                      Balanced DeFi Exposure
                    </h3>

                    <div className="space-y-6">
                      <p className="text-303130/80">
                        The Yuki token represents a carefully balanced portfolio
                        across multiple DeFi strategies, designed to optimize
                        returns while managing risk through diversification.
                      </p>

                      <div className="bg-fdfffc rounded-xl p-6 shadow-sm border border-0f52fb/10">
                        <h4 className="font-recoleta font-bold text-xl text-303130 mb-4">
                          Geometric Portfolio Design
                        </h4>
                        <p className="text-303130/70 mb-4">
                          Your Yuki portfolio adapts to changing market
                          conditions through our proprietary rebalancing
                          algorithm, creating a unique pattern as distinctive as
                          a winter morning.
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-0f52fb/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <svg
                                className="w-3 h-3 text-0f52fb"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="text-303130/80">
                              <span className="font-medium text-303130">
                                Automatic Rebalancing:
                              </span>{" "}
                              Monthly adjustments ensure optimal strategy
                              allocation
                            </p>
                          </div>

                          <div className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-0f52fb/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <svg
                                className="w-3 h-3 text-0f52fb"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="text-303130/80">
                              <span className="font-medium text-303130">
                                Risk Management:
                              </span>{" "}
                              Exposure limits prevent overconcentration in any
                              single protocol
                            </p>
                          </div>

                          <div className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-0f52fb/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <svg
                                className="w-3 h-3 text-0f52fb"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="text-303130/80">
                              <span className="font-medium text-303130">
                                Yield Optimization:
                              </span>{" "}
                              Continuous monitoring to capture the best yields
                              across DeFi
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <a
                          href="#features"
                          className="bg-0f52fb/10 text-0f52fb px-5 py-2.5 rounded-lg text-sm font-medium inline-flex items-center hover:bg-0f52fb/20 transition-all duration-300"
                        >
                          Learn more about our strategies
                          <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blue background section */}
          <section className="py-24 bg-0f52fb text-fdfffc relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-fdfffc/5 rounded-bl-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-fdfffc/5 rounded-tr-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 mb-6 rounded-full bg-fdfffc/10 text-fdfffc text-sm font-medium">
                  Protocol Benefits
                </span>
                <h2 className="text-5xl font-recoleta font-bold mb-6">
                  Why Choose <span className="text-fdfffc">Yuki</span> Protocol?
                </h2>
                <p className="text-xl text-fdfffc/80 max-w-3xl mx-auto">
                  Our protocol offers a simplified approach to DeFi
                  participation with transparency and efficiency at its core.
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
                  <h3 className="text-xl font-recoleta font-bold mb-3">
                    Simplified Security
                  </h3>
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
                  <h3 className="text-xl font-recoleta font-bold mb-3">
                    Diversified Exposure
                  </h3>
                  <p className="text-fdfffc/80">
                    Access a basket of top DeFi protocols through a single
                    token, reducing the complexity of managing multiple
                    positions.
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
                  <h3 className="text-xl font-recoleta font-bold mb-3">
                    Efficient Rebalancing
                  </h3>
                  <p className="text-fdfffc/80">
                    Our monthly rebalancing ensures your exposure remains
                    optimized to the current state of the DeFi ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
