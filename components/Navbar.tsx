"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import { useWaitlist } from "@/context/WaitlistContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { openWaitlist } = useWaitlist();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300);

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
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-6"
      )}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease, padding 0.3s ease",
      }}
    >
      {/* Background with subtle glass effect - no shadows */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500",
          scrolled 
            ? "bg-[#08080a]/60 backdrop-blur-[12px]" 
            : "bg-transparent"
        )}
      />

      <div className="max-w-page mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.svg"
              alt="Yuki logo"
              width={32}
              height={32}
              priority
              className="w-8 h-8"
            />
          </Link>

          {/* CTA Button - glassmorphic */}
          <Button 
            onClick={openWaitlist} 
            size="default"
            className="bg-white/[0.06] hover:bg-white/[0.10] text-white backdrop-blur-sm transition-all duration-300 hover:brightness-110"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}