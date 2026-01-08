"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay mounting to sync with hero animation
    const timer = setTimeout(() => setMounted(true), 2200);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
      }`}
      style={{ 
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-100%)",
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Background with blur - dark when scrolled */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-400"
        style={{ 
          opacity: scrolled ? 1 : 0,
          pointerEvents: "none",
        }}
      />
      
      <div className="max-w-page mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/Logo.svg"
              alt="Yuki Logo"
              width={32}
              height={32}
              className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Right side - Single CTA */}
          <a
            href="https://tally.so/r/zxyOJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 bg-brand hover:bg-brand/90 text-black rounded-full text-sm font-semibold transition-all duration-300"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
