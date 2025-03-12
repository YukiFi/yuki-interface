"use client";
import Link from "next/link";
import React from "react";

export default function ModernCallToAction() {
  return (
    <section
      id="join-waitlist"
      className="py-24 relative overflow-hidden bg-fdfffc"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-fdfffc to-cfd0ce/10 pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-0f52fb/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="font-gloock text-5xl text-0f52fb mb-8 block">
            Get Involved
          </span>
          <h2 className="text-3xl font-gloock mb-8 text-303130">
            Join the DeFi ecosystem
          </h2>
          <p className="text-lg text-303130/80 max-w-2xl mx-auto mb-12">
            Connect with us on social media to stay updated on our progress and
            be part of our growing community.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Link
              href="https://discord.com/invite/ZuS6Mj4r8j"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#5865F2] text-fdfffc rounded-lg hover:bg-[#5865F2]/90 transition-all duration-300 font-medium text-lg"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              Join Discord
            </Link>
            <Link
              href="https://x.com/yukiprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0F1419] text-fdfffc rounded-lg hover:bg-[#0F1419]/90 transition-all duration-300 font-medium text-lg"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow on X
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-303130/60 text-sm">
              Not an offer to sell securities or financial advice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
