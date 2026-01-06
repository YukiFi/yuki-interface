"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      {/* Background with blur - only shows when scrolled */}
      <div 
        className="absolute inset-0 bg-white/70 backdrop-blur-xl transition-opacity duration-400"
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

          {/* Right side - CTA */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="https://app.yuki.fi/login"
              target="_blank"
              className={`px-3 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "text-gray-600 hover:text-black hover:bg-gray-100"
                  : "text-black/70 hover:text-black hover:bg-black/5"
              }`}
            >
              Log In
            </Link>
            <Link
              href="https://app.yuki.fi/login?su"
              target="_blank"
              className="px-3 sm:px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-full text-sm font-medium transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
