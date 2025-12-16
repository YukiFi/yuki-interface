"use client";
import React from "react";
import {
  AdjustmentsHorizontalIcon,
  ArrowDownTrayIcon,
  SparklesIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ScaleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    name: "Choose a Risk Level",
    description: "Select Low, Medium, or High based on your comfort with volatility and yield expectations.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Deposit Once",
    description: "No strategy selection, no manual rebalancing, no constant monitoring required.",
    icon: ArrowDownTrayIcon,
  },
  {
    name: "Yuki Handles the Rest",
    description: "Funds are automatically allocated, monitored, and rebalanced according to on-chain rules.",
    icon: SparklesIcon,
  },
];

const vaults = [
  {
    name: "Low Risk",
    description: "Focused on capital preservation and stability. Prioritizes conservative strategies and minimizes exposure to volatility.",
    icon: ShieldCheckIcon,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
  },
  {
    name: "Medium Risk",
    description: "Balances stability and yield. May rotate into higher-yield opportunities while maintaining strict exposure limits.",
    icon: ScaleIcon,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
  },
  {
    name: "High Risk",
    description: "Designed for maximum yield. Actively reallocates to capture temporary APY opportunities, accepting higher volatility.",
    icon: BoltIcon,
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "border-rose-400/20",
  },
];

const comparisons = [
  {
    name: "vs Yield Aggregators",
    description: "Traditional yield aggregators are strategy-driven for power users. Yuki is outcome-driven for people who just want their savings to work.",
  },
  {
    name: "vs Staking (stETH, stUSD)",
    description: "Staking is asset-specific exposure. Yuki is a savings layer that uses staking when appropriate, but never forces it.",
  },
  {
    name: "vs Single-Protocol Lending",
    description: "Parking funds in one protocol is unmanaged risk. Yuki diversifies, monitors, and adapts automatically.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-dark-900 relative overflow-hidden border-b border-white/5"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10Y">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3 block">How It Works</span>
          <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mb-4">
            DeFi complexity, abstracted
          </h2>
          <p className="text-gray-400 max-w-lg">
            Yuki transforms fragmented DeFi protocols into a simple savings experience. Choose your risk, deposit, and let the protocol do the work.
          </p>
        </div>

        {/* Steps - Horizontal Flow */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0 mb-24">
          {steps.map((step, index) => (
            <React.Fragment key={step.name}>
              <div className="flex-1 bg-dark-800 border border-white/10 rounded-lg p-6 hover:bg-dark-700 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-0f52fb/10 border border-0f52fb/20 flex items-center justify-center text-0f52fb">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-gray-500">Step {index + 1}</span>
                </div>
                <h3 className="text-xl font-medium text-fdfffc mb-2">{step.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 &&
                <div className="hidden md:flex items-center justify-center px-4">
                  <ArrowRightIcon className="w-5 h-5 text-gray-500" />
                </div>
              }
            </React.Fragment>
          ))}
        </div>

        {/* Risk-Based Vaults */}
        <div className="mb-24">
          <div className="mb-10">
            <span className="text-xs font-mono text-0f52fb uppercase tracking-widest mb-3 block">Risk-Based Vaults</span>
            <h3 className="text-xl md:text-2xl font-medium text-fdfffc mb-3">
              Organized around risk tolerance, not protocols
            </h3>
            <p className="text-gray-500 max-w-lg text-sm">
              Each vault follows clear, on-chain rules governing maximum exposure per protocol, strategy constraints, rebalancing behavior, and risk boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vaults.map((vault) => (
              <div 
                key={vault.name}
                className={`p-6 bg-dark-800/50 border ${vault.borderColor} rounded-lg hover:bg-dark-800 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-lg ${vault.bgColor} flex items-center justify-center ${vault.color} mb-4`}>
                  <vault.icon className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-medium ${vault.color} mb-2`}>{vault.name}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{vault.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-dark-800 border border-white/10 rounded-lg p-8">
          <h3 className="text-lg font-medium text-fdfffc mb-2">How Yuki Compares</h3>
          <p className="text-sm text-gray-500 mb-8">See how Yuki stacks up against other yield options.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisons.map((comparison) => (
              <div key={comparison.name} className="border-l-2 border-0f52fb/30 pl-4">
                <h4 className="text-sm font-medium text-fdfffc mb-2">{comparison.name}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{comparison.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
