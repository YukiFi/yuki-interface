"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 2.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3"
          : "py-5"
      }`}
    >
      {/* Background with blur - only shows when scrolled */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? "bg-white/70 backdrop-blur-xl" 
            : "bg-transparent"
        }`}
      />
      
      <div className="max-w-page mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/Logo.svg"
              alt="Yuki Logo"
              width={36}
              height={36}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Right side - CTA */}
          <div className="flex items-center gap-2">
            <Link
              href="https://app.yuki.fi/login"
              target="_blank"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
              className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-full text-sm font-medium transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
