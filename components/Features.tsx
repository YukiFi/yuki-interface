"use client";
import React from "react";
import {
  EyeIcon,
  ArrowPathIcon,
  LockClosedIcon,
  SparklesIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const differentiators = [
  {
    name: "Built for Savings, Not Speculation",
    description: "Yuki feels like a savings account, not a trading dashboard or yield farm. You manage risk levels, not protocol complexity.",
    icon: SparklesIcon,
  },
  {
    name: "Adaptive, Not Static",
    description: "Unlike single-protocol staking, Yuki continuously adapts allocations as market conditions change. Your savings stay optimized.",
    icon: ArrowPathIcon,
  },
  {
    name: "Transparent by Design",
    description: "Every strategy, allocation, and rule is visible and verifiable on-chain. No black boxes, no hidden leverage, no surprises.",
    icon: EyeIcon,
  },
  {
    name: "Non-Custodial Always",
    description: "You retain full ownership of your funds at all times. Yuki never takes custody. Your keys, your crypto.",
    icon: LockClosedIcon,
  },
  {
    name: "Risk-Based Vaults",
    description: "Choose Low, Medium, or High risk based on your comfort level. Each vault follows clear, on-chain rules for exposure and rebalancing.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Audited Security",
    description: "Funds are allocated exclusively across audited protocols. Every strategy constraint and risk boundary is enforced on-chain.",
    icon: ShieldCheckIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-dark-900 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-0f52fb uppercase tracking-widest mb-3 block">What Makes Yuki Different</span>
          <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mb-4">
            DeFi yield, reimagined for savers
          </h2>
          <p className="text-gray-500 max-w-lg">
            Most yield solutions are fragmented, opaque, and built for power users. Yuki is built for everyone who just wants their savings to work.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((feature, index) => (
            <div
              key={feature.name}
              className="group p-6 bg-dark-800/30 border border-white/5 rounded-lg hover:bg-dark-800/50 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-0f52fb/10 border border-0f52fb/20 flex items-center justify-center text-0f52fb shrink-0">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-fdfffc mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
