import React from "react";
import Link from "next/link";

const problems = [
  {
    title: "Centralized Failures",
    description: "Terra Luna. FTX. Celsius. BlockFi. The list goes on. Billions of dollars lost because users trusted centralized entities with their assets. These weren't edge cases—they were systemic failures of the custodial model.",
  },
  {
    title: "Eroded Trust",
    description: "Every collapse chips away at the promise of crypto. Users are left wondering: if I can't trust exchanges, and I can't trust \"yield platforms,\" where do I put my money? The answer shouldn't be \"back under your mattress.\"",
  },
  {
    title: "Traditional Finance Isn't Better",
    description: "Banks offer 0.5% APY while inflation runs at 3-5%. The S&P 500 averages 10% but comes with volatility and lock-ups. Meanwhile, institutions access yields that retail investors never see. The system is designed to keep you out.",
  },
  {
    title: "DeFi Is Inaccessible",
    description: "The yields exist. Aave, Compound, Morpho—battle-tested protocols offering 5-15%+ on stablecoins. But accessing them requires wallets, bridges, gas fees, and technical knowledge that 99% of people don't have.",
  },
];

const principles = [
  {
    title: "Self-Custody First",
    description: "Your assets never leave your control. We create a smart wallet that only you can access. No counterparty risk. No \"sorry, withdrawals are paused.\" Your keys, your crypto.",
  },
  {
    title: "Transparent Strategies",
    description: "Every yield strategy is on-chain and verifiable. No black boxes. No proprietary \"algorithms\" hiding risk. You can see exactly where your money is at all times.",
  },
  {
    title: "Bank-Grade Onramp",
    description: "Connect your bank account. Deposit dollars. We handle the conversion. You don't need to understand gas fees or DEXs or bridges. Just deposit and earn.",
  },
  {
    title: "Institutional Yields, Retail Access",
    description: "The same DeFi strategies that institutions use to generate alpha—now accessible to everyone. No minimum investment. No accreditation required.",
  },
];

export default function About() {
  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-dark-900 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-fdfffc transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-medium text-fdfffc mb-6 leading-tight">
            The financial system is broken. <br />
            <span className="text-gray-500">We&apos;re here to fix it.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Yuki exists because people deserve access to real yields without trusting entities that have proven themselves untrustworthy.
          </p>
        </div>

        {/* The Problem */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">The Problem</span>
            <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mt-2">
              Trust has been shattered
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={problem.title}
                className="p-6 bg-dark-800/30 border border-white/5 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-gray-600 mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-fdfffc mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-0f52fb uppercase tracking-widest">The Solution</span>
            <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mt-2">
              Yuki: DeFi yields, zero trust required
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={principle.title}
                className="p-6 border-l-2 border-0f52fb/30 bg-0f52fb/5"
              >
                <h3 className="text-lg font-medium text-fdfffc mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Vision */}
        <div className="mb-16 p-8 md:p-12 bg-dark-800/50 border border-white/5 rounded-lg">
          <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Our Vision</span>
          <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mt-2 mb-6">
            A world where everyone has access to real yields
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              We believe that access to competitive yields shouldn&apos;t require a finance degree, a crypto wallet, or trust in a centralized entity that might disappear with your money.
            </p>
            <p>
              Yuki bridges the gap between traditional banking simplicity and DeFi&apos;s yield potential. We&apos;re building the infrastructure that lets anyone—from a first-time saver to a seasoned investor—access the same opportunities that were previously reserved for institutions.
            </p>
            <p>
              No more 0.5% savings accounts while banks lend your money at 7%. No more watching your purchasing power erode to inflation. No more trusting companies that put your assets at risk.
            </p>
            <p className="text-fdfffc font-medium">
              Just connect, deposit, and earn. Your money, your control, institutional yields.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 mb-6">
            Ready to take control of your financial future?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://discord.com/invite/ZuS6Mj4r8j"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fdfffc text-dark-900 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Join our Discord
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </Link>
            <Link
              href="https://x.com/yukiprotocol"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-fdfffc rounded-lg font-medium hover:bg-white/5 transition-colors"
            >
              Follow on X
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

