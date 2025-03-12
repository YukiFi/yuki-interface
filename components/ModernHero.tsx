"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Top DeFi protocols that might be in an index
const protocols = [
  { symbol: "AAVE", name: "Aave", category: "Lending" },
  { symbol: "UNI", name: "Uniswap", category: "DEX" },
  { symbol: "MKR", name: "Maker", category: "Stablecoin" },
  { symbol: "CRV", name: "Curve", category: "DEX" },
];

export default function ModernHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-40 pb-32 md:pt-48 md:pb-40 relative overflow-hidden bg-fdfffc">
      {/* Ultra-subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-fdfffc via-fdfffc to-fdfffc pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-0f52fb/3 rounded-bl-full blur-3xl opacity-[0.02]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-0f52fb/3 rounded-tr-full blur-3xl opacity-[0.02]"></div>

      {/* Extremely subtle decorative elements */}
      <div className="absolute top-1/4 left-1/6 w-24 h-24 rounded-full bg-0f52fb/3 blur-2xl opacity-[0.03] animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/6 w-32 h-32 rounded-full bg-0f52fb/3 blur-2xl opacity-[0.03] animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-cfd0ce/20 blur-xl opacity-[0.03] animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span
            className={`inline-block px-3 py-1 mb-8 rounded-full bg-0f52fb/10 text-0f52fb text-sm font-medium transition-all duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Introducing Yuki Protocol
          </span>

          <h1
            className={`font-gloock text-5xl sm:text-6xl md:text-7xl mb-10 text-303130 leading-tight transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Complete <span className="text-0f52fb">DeFi Ecosystem</span> in
            One Token
          </h1>

          <p
            className={`text-xl text-303130/80 mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Access a diversified portfolio of top DeFi protocols with
            transparent methodology and quarterly rebalancing.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-6 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="#how-it-works"
              className="bg-0f52fb text-fdfffc px-8 py-4 rounded-lg font-medium inline-flex items-center hover:bg-0f52fb/90 transition-all duration-300 shadow-button-primary hover:shadow-button-primary-hover text-lg"
            >
              Learn more
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-0.5"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
