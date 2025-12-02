"use client";
import Link from "next/link";
import React from "react";

const footerLinks = {
  product: [
    { name: "About", href: "/about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
  ],
  social: [
    { name: "X (Twitter)", href: "https://x.com/yukiprotocol" },
    { name: "Discord", href: "https://discord.com/invite/ZuS6Mj4r8j" },
  ],
  legal: [
    { name: "Terms of Use", href: "/terms-of-use" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-4">
              <span className="font-medium text-xl text-fdfffc">Yuki</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Institutional-grade DeFi yields, simplified.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-fdfffc transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">Social</h4>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-fdfffc transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-fdfffc transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Yuki Protocol
          </p>
          <p className="text-xs text-gray-600">
            Not financial advice. Past performance ≠ future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
