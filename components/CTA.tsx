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
        <h2 className="text-5xl md:text-7xl font-medium text-fdfffc tracking-tighter mb-12">
          Join the future.
        </h2>

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
