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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#features");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 relative bg-fdfffc">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-0f52fb/5 rounded-tl-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-0f52fb/10 text-0f52fb text-sm font-medium">
            Protocol Features
          </span>
          <h2 className="text-4xl font-recoleta  font-bold  mb-6 text-303130">
            Access DeFi through{" "}
            <span className="text-0f52fb">one protocol</span>
          </h2>
          <p className="text-lg text-303130/80">
            Interact with multiple DeFi protocols through a single interface,
            with transparent governance and methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`bg-fdfffc shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${
                index % 3 === 0 ? "rounded-2xl" : "rounded-sharp"
              } overflow-hidden ${
                isInView ? "animate-fade-in" : "opacity-0"
              } border border-cfd0ce/20`}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              onMouseEnter={() => setActiveFeature(feature.name)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="p-8 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-accent opacity-0 transition-opacity duration-300 ${
                    activeFeature === feature.name ? "opacity-5" : ""
                  }`}
                ></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-0f52fb/10 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-0f52fb" />
                  </div>

                  <span className="inline-block px-3 py-1.5 text-xs font-medium mb-4 rounded-md bg-gradient-to-r from-0f52fb/10 to-cfd0ce/20 border border-cfd0ce/10 text-303130 shadow-sm">
                    {feature.category}
                  </span>

                  <h3 className="text-xl font-recoleta  font-bold  mb-3 text-303130">
                    {feature.name}
                  </h3>

                  <p className="text-303130/80 mb-6">{feature.description}</p>
                </div>
              </div>

              <div className="px-8 py-4 bg-cfd0ce/10 border-t border-cfd0ce/20">
                <p className="text-303130/70 text-sm">{feature.detail}</p>
              </div>

              <div className="px-8 py-4 bg-cfd0ce/5 border-t border-cfd0ce/20">
                <Link
                  href="#"
                  className="bg-0f52fb/10 text-0f52fb px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center hover:bg-0f52fb/20 transition-all duration-300"
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
