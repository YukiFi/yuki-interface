"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ModernCallToAction() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="join-waitlist"
      className="py-24 relative overflow-hidden bg-fdfffc"
    >
      {/* Rich background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-fdfffc via-fdfffc/95 to-fdfffc/90 pointer-events-none"></div>

      {/* Enhanced geometric patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large colorful gradient blobs */}
        <div className="absolute -top-[5%] -right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-0f52fb/15 via-purple-500/5 to-transparent opacity-60 blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-0f52fb/10 via-cyan-500/5 to-transparent opacity-50 blur-3xl"></div>

        {/* Animated floating elements */}
        <div className="absolute top-[15%] left-[20%] w-48 h-48 border-2 border-0f52fb/20 rounded-full opacity-70 animate-pulse-slow"></div>
        <div
          className="absolute bottom-[20%] right-[25%] w-40 h-40 border border-0f52fb/15 rounded-full opacity-60 animate-float"
          style={{ animationDuration: "8s" }}
        ></div>

        {/* Diagonal lines with enhanced styling */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] right-[15%] w-[350px] h-[2px] bg-gradient-to-r from-transparent via-0f52fb/30 to-transparent rotate-[30deg] opacity-70"></div>
          <div className="absolute top-[30%] left-[10%] w-[300px] h-[1.5px] bg-gradient-to-r from-transparent via-0f52fb/25 to-transparent rotate-[-25deg] opacity-60"></div>
          <div className="absolute bottom-[25%] right-[15%] w-[250px] h-[1.5px] bg-gradient-to-r from-transparent via-0f52fb/25 to-transparent rotate-[15deg] opacity-60"></div>
        </div>

        {/* Enhanced grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0F52FB 1px, transparent 1px), linear-gradient(to bottom, #0F52FB 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Floating dots with animation */}
        <div className="absolute top-[25%] right-[30%] w-3 h-3 rounded-full bg-0f52fb/40 animate-pulse-slow"></div>
        <div
          className="absolute top-[60%] left-[25%] w-4 h-4 rounded-full bg-0f52fb/30 animate-float"
          style={{ animationDuration: "7s" }}
        ></div>
        <div
          className="absolute bottom-[30%] right-[40%] w-3 h-3 rounded-full bg-0f52fb/35 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Additional decorative elements */}
        <div className="absolute top-[40%] left-[15%] w-28 h-28">
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
          </svg>
        </div>

        <div className="absolute bottom-[15%] left-[35%] w-20 h-20">
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
          </svg>
        </div>

        {/* Abstract tech-inspired elements */}
        <div className="absolute top-[70%] left-[10%]">
          <svg
            width="120"
            height="60"
            viewBox="0 0 120 60"
            className="opacity-15"
          >
            <path
              d="M10,30 L30,15 L50,30 L70,15 L90,30 L110,15"
              stroke="#0F52FB"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M10,45 L30,30 L50,45 L70,30 L90,45 L110,30"
              stroke="#0F52FB"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2,2"
            />
          </svg>
        </div>

        {/* Particle effect */}
        {Array.from({ length: 15 }).map((_, i) => {
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
        <div className="text-center mb-16">
          {/* Decorative element above heading */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-0f52fb/40 to-0f52fb/80 rounded-full"></div>
          </div>

          <span
            className={`font-recoleta font-bold text-5xl text-0f52fb mb-8 block transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Get Involved
          </span>

          <h2
            className={`text-3xl font-recoleta font-bold mb-8 text-303130 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Join the DeFi ecosystem
          </h2>

          <p
            className={`text-lg text-303130/80 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Connect with us on social media to stay updated on our progress and
            be part of our growing community.
          </p>

          <div
            className={`flex flex-col sm:flex-row justify-center gap-6 mb-16 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="https://discord.com/invite/ZuS6Mj4r8j"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#5865F2] text-fdfffc rounded-lg hover:bg-[#5865F2]/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              Join Discord
            </Link>
            <Link
              href="https://x.com/yukiprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0F1419] text-fdfffc rounded-lg hover:bg-[#0F1419]/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow on X
            </Link>
          </div>

          <div
            className={`mt-12 text-center transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-303130/60 text-sm">
              Not an offer to sell securities or financial advice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
