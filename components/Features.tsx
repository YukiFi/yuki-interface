"use client";
import React from "react";
import {
  CreditCardIcon,
  CpuChipIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Fiat On-Ramp",
    description: "Connect your bank account or debit card directly. We handle the conversion to stablecoins automatically, so you can start earning without touching crypto exchanges.",
    icon: CreditCardIcon,
  },
  {
    name: "Smart Yield Routing",
    description: "Our protocol continuously monitors and rebalances across top DeFi lending markets like Aave, Compound, and Morpho to capture the best available yields.",
    icon: CpuChipIcon,
  },
  {
    name: "Self-Custody",
    description: "You maintain full control of your assets. We create a non-custodial smart wallet for you. Your keys, your crypto, always.",
    icon: LockClosedIcon,
  },
  {
    name: "Audited Security",
    description: "All smart contracts are audited by leading security firms. We prioritize capital preservation and implement multiple layers of protection.",
    icon: ShieldCheckIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-dark-900 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mb-4">
            Features
          </h2>
          <p className="text-gray-500 max-w-md">
            Everything you need to earn DeFi yields without the complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group p-6 bg-dark-800/30 border border-white/5 rounded-lg hover:bg-dark-800/50 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
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
