"use client";
import Link from "next/link";
import React, { memo } from "react";
import Image from "next/image";

// OPTIMIZED: Memoized as static component
const Footer = memo(function Footer() {
  return (
    <footer className="relative bg-[#050506]">
      {/* Subtle atmospheric separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.03]" />
      
      <div className="max-w-page mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-5">
            <Image
              src="/images/yuki.svg"
              alt="Yuki logo"
              width={80}
              height={28}
              priority
              className="w-[6.5rem] h-10"
            />
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">
              The next generation money app. Non-custodial yield, instant transfers, complete transparency.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16 md:gap-24">
            {/* Connect */}
            <div>
              <h4 className="text-xs text-white/30 uppercase tracking-widest mb-5 font-medium">
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://x.com/yukiprotocol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/ZuS6Mj4r8j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs text-white/30 uppercase tracking-widest mb-5 font-medium">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/terms-of-use"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom - atmospheric separator */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Yuki Protocol
          </p>
          <p className="text-xs text-white/30">
            Non-custodial by design
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
