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
      setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-gray-200 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-page mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <Image
              src="/images/logo-blue.png"
              alt="Yuki Logo"
              width={40}
              height={40}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Right side - CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="https://app.yuki.fi"
              target="_blank"
              className="px-6 py-2.5 bg-black hover:bg-gray-800 text-white rounded-3xl text-sm font-medium transition-all duration-200"
            >
              Coming Soon
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
