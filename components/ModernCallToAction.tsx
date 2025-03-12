"use client";
import Link from "next/link";
import React from "react";

export default function ModernCallToAction() {
  return (
    <section className="py-24 relative overflow-hidden bg-fdfffc">
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
          <p className="text-lg text-303130/80 max-w-2xl mx-auto">
            Connect with our community to stay updated on Yuki Protocol's
            development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Discord Link */}
            <div className="bg-fdfffc hover:bg-cfd0ce/10 rounded-xl p-8 transition-all duration-300 group shadow-card hover:shadow-card-hover border border-cfd0ce/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-0f52fb/10 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-0f52fb"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-gloock text-303130">Discord</h4>
                  <p className="text-303130/70 text-sm">Join our community</p>
                </div>
              </div>
              <p className="text-303130/80 mb-6">
                Connect with developers, ask questions, and stay updated on the
                latest protocol developments.
              </p>
              <Link
                href="https://discord.gg/ZuS6Mj4r8j"
                target="_blank"
                className="w-full bg-0f52fb text-fdfffc px-4 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300"
              >
                Join Discord
                <svg
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* X (Twitter) Link */}
            <div className="bg-fdfffc hover:bg-cfd0ce/10 rounded-xl p-8 transition-all duration-300 group shadow-card hover:shadow-card-hover border border-cfd0ce/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-0f52fb/10 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-0f52fb"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-gloock text-303130">
                    X (Twitter)
                  </h4>
                  <p className="text-303130/70 text-sm">Follow for updates</p>
                </div>
              </div>
              <p className="text-303130/80 mb-6">
                Get the latest announcements, protocol updates, and DeFi
                insights from our team.
              </p>
              <Link
                href="https://x.com/yukiprotocol"
                target="_blank"
                className="w-full bg-0f52fb text-fdfffc px-4 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300"
              >
                Follow on X
                <svg
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* GitHub link as a separate, more subtle element */}
          <div className="mt-8 text-center">
            <Link
              href="https://github.com/yukiprotocol"
              target="_blank"
              className="inline-flex items-center text-303130/80 hover:text-303130 transition-colors duration-300 bg-cfd0ce/20 hover:bg-cfd0ce/30 px-5 py-3 rounded-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
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
