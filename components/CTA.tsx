"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CTA() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="join-waitlist"
      className="py-48 relative overflow-hidden bg-dark-900 text-white"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-0f52fb/10 blur-[120px] rounded-t-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">The Vision</p>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-fdfffc tracking-tight mb-6 max-w-3xl mx-auto leading-[1.1]">
          Make on-chain savings <br className="hidden sm:block" />
          <span className="text-gray-500">feel obvious.</span>
        </h2>
        
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-4">
          A place where people can confidently park money, earn yield, and stay fully in control without becoming DeFi experts.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="https://discord.com/invite/ZuS6Mj4r8j"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-fdfffc transition-colors"
          >
            Discord
          </Link>
          <span className="text-gray-700">/</span>
          <Link
            href="https://x.com/yukiprotocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-fdfffc transition-colors"
          >
            X (Twitter)
          </Link>
        </div>
      </div>
    </section>
  );
}
