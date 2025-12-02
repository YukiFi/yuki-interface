"use client";
import React from "react";
import {
  BanknotesIcon,
  ArrowPathRoundedSquareIcon,
  WalletIcon,
  CommandLineIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    name: "Connect",
    description: "Link your bank account or crypto wallet securely.",
    icon: BanknotesIcon,
  },
  {
    name: "Deposit",
    description: "Funds are automatically converted and allocated.",
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: "Earn",
    description: "Watch your savings grow with optimized yields.",
    icon: WalletIcon,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-dark-900 relative overflow-hidden border-b border-white/5"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mb-4">
            How it works
          </h2>
          <p className="text-gray-500 max-w-md">
            Three simple steps to start earning institutional-grade yields.
          </p>
        </div>

        {/* Steps - Horizontal Flow */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0 mb-24">
          {steps.map((step, index) => (
            <React.Fragment key={step.name}>
              <div className="flex-1 bg-dark-800/30 border border-white/5 rounded-lg p-6 hover:bg-dark-800/50 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-0f52fb/10 border border-0f52fb/20 flex items-center justify-center text-0f52fb">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-gray-600">Step {index + 1}</span>
                </div>
                <h3 className="text-xl font-medium text-fdfffc mb-2">{step.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-4">
                  <ArrowRightIcon className="w-5 h-5 text-gray-600" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Comparison Chart */}
        <div className="bg-dark-800/30 border border-white/5 rounded-lg p-8 mb-16">
          <h3 className="text-lg font-medium text-fdfffc mb-6">Yield Comparison</h3>
          <div className="space-y-6">
            {/* Traditional Savings */}
            <div className="flex items-center gap-4">
              <div className="w-36 text-sm text-gray-500">Savings Account</div>
              <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[3%] h-full bg-gray-600 rounded-full"></div>
              </div>
              <div className="w-16 text-right text-sm text-gray-500">0.5%</div>
            </div>
            {/* S&P 500 */}
            <div className="flex items-center gap-4">
              <div className="w-36 text-sm text-gray-500">S&P 500 (Avg)</div>
              <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[40%] h-full bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-16 text-right text-sm text-gray-500">10%</div>
            </div>
            {/* Yuki */}
            <div className="flex items-center gap-4">
              <div className="w-36 text-sm text-fdfffc font-medium">Yuki Protocol</div>
              <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-0f52fb rounded-full"></div>
              </div>
              <div className="w-16 text-right text-sm text-0f52fb font-medium">15%+</div>
            </div>
          </div>
          <p className="text-[10px] text-gray-600 mt-6">*Based on historical DeFi yields. Past performance does not guarantee future results.</p>
        </div>

        {/* Crypto Native CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-white/5 bg-white/[0.02] text-gray-400 hover:text-fdfffc hover:border-white/10 transition-colors cursor-pointer">
            <CommandLineIcon className="w-4 h-4" />
            <span className="text-sm">Already have a wallet? Connect directly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
