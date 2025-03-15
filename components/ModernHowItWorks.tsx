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
    name: "Access",
    description:
      "Our index token represents participation in a basket of DeFi protocols according to our methodology. Access may be obtained using supported digital assets.",
    icon: BanknotesIcon,
  },
  {
    name: "Rebalance",
    description:
      "Our protocol adjusts allocations monthly based on our transparent index methodology, which evaluates various protocol metrics and market factors.",
    icon: ArrowPathIcon,
  },
  {
    name: "Secure",
    description:
      "We implement risk management parameters to help address protocol-specific risks, though all participation involves significant risks inherent to digital assets.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Monitor",
    description:
      "Track index composition and methodology changes in real-time through our dashboard. Protocol participation doesn't involve lockup periods.",
    icon: LockClosedIcon,
  },
];

// Strategy categories with winter-themed colors
const strategies = [
  { name: "Lending", color: "#000000", icon: "💰" },
  { name: "Liquidity", color: "#222222", icon: "💧" },
  { name: "Yield Farming", color: "#333333", icon: "🌱" },
  { name: "Stablecoins", color: "#444444", icon: "🔒" },
  { name: "Derivatives", color: "#555555", icon: "📈" },
  { name: "Staking", color: "#666666", icon: "⚓" },
];

export default function ModernHowItWorks() {
  const [isClientSide, setIsClientSide] = useState(false);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [activeRoadmapItem, setActiveRoadmapItem] = useState<number | null>(
    null
  );

  useEffect(() => {
    setIsClientSide(true);
  }, []);

  return (
    <>
      <section
        id="how-it-works"
        className="py-24 bg-fdfffc relative overflow-hidden"
      >
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              How Yuki works
            </h2>
            <p className="text-xl text-303130/80 max-w-3xl">
              A simplified approach to DeFi participation with transparency and
              efficiency at its core.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {steps.map((step, index) => (
              <div
                key={step.name}
                className="bg-white border border-black/10 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.name}</h3>
                <p className="text-303130/80">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Strategy visualization */}
          <div className="bg-black text-white p-12 rounded-xl mb-20">
            <div className="mb-10">
              <h3 className="text-3xl font-bold mb-4">Strategy allocation</h3>
              <p className="text-white/80 max-w-2xl">
                Our protocol dynamically allocates assets across multiple DeFi
                strategies to optimize returns while managing risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategies.map((strategy) => (
                <div
                  key={strategy.name}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{strategy.icon}</span>
                    <h4 className="text-xl font-medium">{strategy.name}</h4>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{
                        width: `${Math.floor(Math.random() * 70) + 20}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-10 text-black">
              Protocol roadmap
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-black/20 transform md:translate-x-px"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    date: "Q1 2025",
                    title: "Foundation",
                    description:
                      "Complete protocol design and begin comprehensive testing phase",
                  },
                  {
                    date: "Q2 2025",
                    title: "Security & Beta",
                    description:
                      "Security audits and beta launch on Ethereum mainnet",
                  },
                  {
                    date: "Q3 2025",
                    title: "Full Launch",
                    description:
                      "Public launch with expanded protocol support and features",
                  },
                  {
                    date: "Q4 2025",
                    title: "Expansion",
                    description:
                      "Cross-chain integration and advanced yield strategies",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                    onMouseEnter={() => setActiveRoadmapItem(index)}
                    onMouseLeave={() => setActiveRoadmapItem(null)}
                  >
                    <div className="md:w-1/2 pb-10 md:pb-0 md:px-8">
                      <div
                        className={`bg-white border ${
                          activeRoadmapItem === index
                            ? "border-black"
                            : "border-black/10"
                        } p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300`}
                      >
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-black text-white rounded-full">
                          {item.date}
                        </span>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-303130/80">{item.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-black transform -translate-x-1.5 md:-translate-x-2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Black background section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-tr-full blur-3xl"></div>

        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Why Choose <span className="text-white">Yuki</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our protocol offers a simplified approach to DeFi participation
              with transparency and efficiency at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-xl font-bold mb-3">Simplified Security</h3>
              <p className="text-white/80">
                Our protocol implements risk management parameters to help
                address various technical risks inherent to DeFi protocols.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-xl font-bold mb-3">Diversified Exposure</h3>
              <p className="text-white/80">
                Access a basket of top DeFi protocols through a single token,
                reducing the complexity of managing multiple positions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
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
              <h3 className="text-xl font-bold mb-3">Efficient Rebalancing</h3>
              <p className="text-white/80">
                Our monthly rebalancing ensures your exposure remains optimized
                to the current state of the DeFi ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
