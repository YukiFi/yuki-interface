"use client";
import Link from "next/link";
import React from "react";

const footerLinks = {
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
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-page mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-4">
              <span className="font-bold text-xl text-black">Yuki</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              A new kind of money app.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Social</h4>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors"
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
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Yuki Protocol
          </p>
          <p className="text-xs text-gray-500">
            Built on proven infrastructure. Non-custodial by design.
          </p>
        </div>
      </div>
    </footer>
  );
}
