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
    <section className="pt-32 pb-20 md:pt-40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500/10 rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/10 rounded-tr-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span
            className={`inline-block px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium transition-all duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Introducing Yuki Protocol
          </span>

          <h1
            className={`font-vacay text-5xl sm:text-6xl md:text-7xl mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Complete{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              DeFi Ecosystem
            </span>{" "}
            in One Token
          </h1>

          <p
            className={`text-lg text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Access a diversified portfolio of top DeFi protocols with
            transparent methodology and quarterly rebalancing.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="#how-it-works"
              className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white px-5 py-2.5 rounded-lg font-medium backdrop-blur-sm inline-flex items-center hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 shadow-lg shadow-purple-500/10"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5"
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
            <Link
              href="http://app.yukiprotocol.com"
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white px-5 py-2.5 rounded-lg font-medium backdrop-blur-sm inline-flex items-center hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 shadow-lg shadow-blue-500/10"
            >
              Launch app
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
