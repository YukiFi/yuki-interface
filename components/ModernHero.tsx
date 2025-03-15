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
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden bg-fdfffc">
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
        <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[5%] w-48 h-48 bg-black/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">
        <div>
          <h1
            className={`font-medium text-5xl sm:text-6xl md:text-7xl mb-8 text-black leading-tight transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We built Yuki so you don&apos;t have to{" "}
            <span className="font-semibold">chase yield</span>.
          </h1>

          <p
            className={`text-lg sm:text-xl md:text-2xl text-303130/80 mb-10 max-w-2xl transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Earn high returns without complexity or compromise.
          </p>

          <div
            className={`flex flex-wrap gap-6 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="#how-it-works"
              className="bg-black/90 text-fdfffc px-5 py-2 rounded-lg font-semibold inline-flex items-center hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg text-base"
            >
              Learn more
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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

      {/* Visual separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/5 to-transparent"></div>
    </section>
  );
}
