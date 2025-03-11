"use client";
import Link from "next/link";
import React from "react";

const navigation = {
  product: [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Index Methodology", href: "#features" },
    { name: "Security", href: "#" },
    { name: "Development", href: "#" },
  ],
  support: [
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Disclaimer", href: "#" },
  ],
  social: [
    { name: "Twitter", href: "#" },
    { name: "Discord", href: "#" },
    { name: "GitHub", href: "#" },
  ],
};

export default function ModernFooter() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link
              href="/"
              className="text-gray-300 text-2xl font-light mb-4 inline-block"
            >
              <span className="font-vacay text-white">Yuki</span>
              <span className="font-medium bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                Protocol
              </span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs mb-6">
              A protocol designed to provide exposure to multiple DeFi protocols
              through an indexed approach with transparent methodology.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <div className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-300">
                    {item.name.charAt(0)}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-gray-300 text-sm font-medium mb-4">Protocol</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-300 text-sm font-medium mb-4">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-300 text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="bg-white/5 backdrop-blur-md p-4 text-xs text-gray-400 leading-relaxed rounded-md">
            <p>
              <strong>Risk Disclosure:</strong> Digital assets involve
              significant risks, including price volatility, technical
              vulnerabilities, and regulatory uncertainty. The Yuki Protocol is
              under development. Any information presented on this website is
              for informational purposes only and does not constitute investment
              advice or an offer to sell securities. Past performance is not
              indicative of future results. Before interacting with any digital
              asset protocol, users should conduct their own research and
              consult appropriate professionals.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Yuki Protocol. All rights
              reserved.
            </p>
            <p className="mt-2 sm:mt-0 text-xs text-gray-600">
              Not available to residents of certain jurisdictions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
