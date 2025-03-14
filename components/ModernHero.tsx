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
      {/* Rich background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-fdfffc via-fdfffc/95 to-fdfffc/90 pointer-events-none"></div>

      {/* Enhanced geometric patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large colorful gradient blobs */}
        <div className="absolute -top-[5%] -right-[5%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-0f52fb/15 via-purple-500/5 to-transparent opacity-60 blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-0f52fb/10 via-cyan-500/5 to-transparent opacity-50 blur-3xl"></div>

        {/* Animated floating elements */}
        <div className="absolute top-[15%] right-[20%] w-64 h-64 border-2 border-0f52fb/20 rounded-full opacity-70 animate-pulse-slow"></div>
        <div
          className="absolute bottom-[20%] left-[25%] w-48 h-48 border border-0f52fb/15 rounded-full opacity-60 animate-float"
          style={{ animationDuration: "8s" }}
        ></div>

        {/* Diagonal lines with enhanced styling */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[5%] w-[400px] h-[2px] bg-gradient-to-r from-transparent via-0f52fb/30 to-transparent rotate-[30deg] opacity-70"></div>
          <div className="absolute top-[30%] right-[10%] w-[350px] h-[1.5px] bg-gradient-to-r from-transparent via-0f52fb/25 to-transparent rotate-[-25deg] opacity-60"></div>
          <div className="absolute bottom-[25%] left-[15%] w-[300px] h-[1.5px] bg-gradient-to-r from-transparent via-0f52fb/25 to-transparent rotate-[15deg] opacity-60"></div>
        </div>

        {/* Enhanced grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0F52FB 1px, transparent 1px), linear-gradient(to bottom, #0F52FB 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Floating dots with animation */}
        <div className="absolute top-[25%] left-[30%] w-3 h-3 rounded-full bg-0f52fb/40 animate-pulse-slow"></div>
        <div
          className="absolute top-[60%] right-[25%] w-4 h-4 rounded-full bg-0f52fb/30 animate-float"
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className="absolute bottom-[30%] left-[40%] w-3 h-3 rounded-full bg-0f52fb/35 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Additional decorative elements */}
        <div className="absolute top-[40%] right-[15%] w-32 h-32">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full opacity-20 animate-spin-slow"
            style={{ animationDuration: "20s" }}
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#0F52FB"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="#0F52FB"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              stroke="#0F52FB"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="15"
              stroke="#0F52FB"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="absolute bottom-[15%] right-[35%] w-24 h-24">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full opacity-20 animate-float"
            style={{ animationDuration: "10s" }}
          >
            <rect
              x="15"
              y="15"
              width="70"
              height="70"
              stroke="#0F52FB"
              strokeWidth="1.5"
              fill="none"
            />
            <rect
              x="30"
              y="30"
              width="40"
              height="40"
              stroke="#0F52FB"
              strokeWidth="1.5"
              fill="none"
            />
            <rect
              x="45"
              y="45"
              width="10"
              height="10"
              stroke="#0F52FB"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Abstract tech-inspired elements */}
        <div className="absolute top-[70%] right-[10%]">
          <svg
            width="150"
            height="80"
            viewBox="0 0 150 80"
            className="opacity-15"
          >
            <path
              d="M10,40 L30,20 L50,40 L70,20 L90,40 L110,20 L130,40"
              stroke="#0F52FB"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M10,60 L30,40 L50,60 L70,40 L90,60 L110,40 L130,60"
              stroke="#0F52FB"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2,2"
            />
          </svg>
        </div>

        <div className="absolute top-[20%] left-[10%]">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="opacity-15"
          >
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#0F52FB"
              strokeWidth="1.5"
              fill="none"
            />
            <line
              x1="10"
              y1="60"
              x2="110"
              y2="60"
              stroke="#0F52FB"
              strokeWidth="1.5"
            />
            <line
              x1="60"
              y1="10"
              x2="60"
              y2="110"
              stroke="#0F52FB"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Particle effect */}
        {Array.from({ length: 20 }).map((_, i) => {
          const size = Math.floor(Math.random() * 3) + 2; // 2-4px
          const top = `${Math.floor(Math.random() * 90) + 5}%`;
          const left = `${Math.floor(Math.random() * 90) + 5}%`;
          const opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4
          const delay = `${Math.random() * 5}s`;
          const duration = `${Math.random() * 10 + 15}s`;

          return (
            <div
              key={i}
              className="absolute rounded-full animate-pulse-slow"
              style={{
                top,
                left,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: "#0F52FB",
                opacity,
                animationDelay: delay,
                animationDuration: duration,
              }}
            ></div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element above heading */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-0f52fb/40 to-0f52fb/80 rounded-full"></div>
          </div>

          <h1
            className={`font-recoleta font-bold text-5xl sm:text-6xl md:text-7xl mb-6 text-303130 leading-tight transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The secure yield aggregator{" "}
            <span className="text-0f52fb relative">
              your finances deserve.
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 opacity-30"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0,5 Q25,10 50,5 T100,5"
                  fill="none"
                  stroke="#0F52FB"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </h1>

          <p
            className={`text-xl text-303130/80 mb-12 mx-auto max-w-2xl transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Earn high returns without complexity or compromise.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-6 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="#how-it-works"
              className="bg-0f52fb/80 text-fdfffc px-5 py-2 rounded-full font-semibold inline-flex items-center hover:bg-0f52fb/90 backdrop-blur-lg transition-all duration-300 shadow-button-primary hover:shadow-button-primary-hover text-base"
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
    </section>
  );
}
