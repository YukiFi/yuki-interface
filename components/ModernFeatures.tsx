"use client";
import React, { useState, useEffect } from "react";
import {
  DocumentTextIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    name: "Simplified access",
    description:
      "A single token provides exposure to a diversified basket of DeFi protocols, making participation straightforward and efficient.",
    detail:
      "Our protocol design eliminates the complexity of managing multiple positions across different DeFi platforms, providing a streamlined experience.",
    icon: DocumentTextIcon,
    category: "TOKEN DESIGN",
  },
  {
    name: "Transparent methodology",
    description:
      "Our index follows a clearly defined and publicly available methodology for protocol selection and weighting.",
    detail:
      "Selection criteria include protocol fundamentals, usage metrics, and technical parameters to determine inclusion and weighting across the represented protocols.",
    icon: ArrowPathIcon,
    category: "METHODOLOGY",
  },
  {
    name: "Security considerations",
    description:
      "We implement multiple measures to address various technical risks inherent to DeFi protocols.",
    detail:
      "Our approach includes protocol exposure limits, technical assessments, and optional coverage mechanisms for certain smart contract risks.",
    icon: ShieldCheckIcon,
    category: "RISK MANAGEMENT",
  },
  {
    name: "Technology integration",
    description:
      "The protocol is designed to accommodate various forms of digital asset participation.",
    detail:
      "Technical infrastructure enables interaction with the protocol using supported digital assets, with appropriate compliance measures.",
    icon: CurrencyDollarIcon,
    category: "INFRASTRUCTURE",
  },
];

export default function ModernFeatures() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <section id="features" className="py-24 bg-fdfffc relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Abstract shapes */}
        <div className="absolute top-1/3 left-[10%] w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-[5%] w-48 h-48 bg-black/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Key features
          </h2>
          <p className="text-xl text-303130/80 max-w-3xl">
            Our protocol offers a simplified approach to DeFi participation with
            transparency and efficiency at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white border border-black/10 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setActiveFeature(feature.name)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="p-8 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-300 ${
                    activeFeature === feature.name ? "opacity-100" : ""
                  }`}
                ></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>

                  <span className="inline-block px-3 py-1.5 text-xs font-medium mb-4 rounded-md bg-black/10 text-black shadow-sm">
                    {feature.category}
                  </span>

                  <h3 className="text-xl font-bold mb-3 text-black">
                    {feature.name}
                  </h3>

                  <p className="text-303130/80 mb-6">{feature.description}</p>
                </div>
              </div>

              <div className="px-8 py-4 bg-black/5 border-t border-black/10">
                <p className="text-303130/70 text-sm">{feature.detail}</p>
              </div>

              <div className="px-8 py-4 bg-white border-t border-black/10">
                <Link
                  href="#"
                  className="bg-black/90 text-fdfffc px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
