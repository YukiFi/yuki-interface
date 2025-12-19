import React from "react";
import Link from "next/link";

const problems = [
  {
    title: "Fragmented Across Protocols",
    description: "Yield opportunities are scattered across dozens of DeFi protocols, each with different interfaces, risks, and requirements. Users are expected to research, compare, and manually manage positions across an ever-changing landscape.",
  },
  {
    title: "Opaque Fund Management",
    description: "Most existing yield products don't clearly explain where funds are deployed or what risks they're taking. Users deposit and hope for the best, with no visibility into actual strategy execution.",
  },
  {
    title: "Built for Power Users",
    description: "DeFi yield products assume users understand protocols, strategies, and market conditions. The interfaces are complex, the terminology is technical, and the learning curve is steep.",
  },
  {
    title: "Static and Unmanaged",
    description: "Single-protocol solutions don't adapt to changing conditions. Users park funds in one place and stay exposed to that protocol's risks, regardless of whether better opportunities exist elsewhere.",
  },
];

const solutions = [
  {
    title: "One Decision: Risk Level",
    description: "Choose Low, Medium, or High risk based on your comfort level. That's it. No strategy selection, no protocol research, no constant monitoring.",
  },
  {
    title: "Transparent by Default",
    description: "Every allocation, exposure limit, and strategy rule is visible and verifiable on-chain. See exactly where your funds are deployed at any time.",
  },
  {
    title: "Adaptive Allocation",
    description: "Yuki continuously monitors conditions and rebalances across audited yield sources according to predefined rules. Your savings stay optimized without your attention.",
  },
  {
    title: "Non-Custodial Always",
    description: "You retain full ownership of your funds at all times. Yuki never takes custody. Every action is governed by on-chain rules you can verify.",
  },
];

const vaults = [
  {
    title: "Conservative Vault",
    description: "Focused on capital preservation and stability. Prioritizes conservative strategies and minimizes exposure to volatility. Best for those who want steady, reliable yield with minimal risk.",
    color: "text-emerald-400",
    border: "border-emerald-400/30",
  },
  {
    title: "Moderate Vault",
    description: "Balances stability and yield. May rotate into higher-yield opportunities while maintaining strict exposure limits. Best for those seeking a balance between growth and safety.",
    color: "text-amber-400",
    border: "border-amber-400/30",
  },
  {
    title: "Aggressive Vault",
    description: "Designed for users seeking maximum yield. Automatically reallocates to capture temporary APY opportunities, accepting higher volatility. Best for those comfortable with fluctuations in pursuit of higher yield.",
    color: "text-rose-400",
    border: "border-rose-400/30",
  },
];

const comparisons = [
  {
    versus: "vs Yield Aggregators",
    description: "Traditional yield aggregators are strategy-driven and optimized for power users who want to pick specific strategies. Yuki is outcome-driven and optimized for people who just want their savings to work.",
  },
  {
    versus: "vs Staking Products (stETH, stUSD, etc.)",
    description: "Staking products are asset-specific exposure tied to a single protocol or mechanism. Yuki is a savings layer that can use staking when appropriate, but diversifies across sources and never forces single-asset exposure.",
  },
  {
    versus: "vs Single-Protocol Lending",
    description: "Parking funds in one lending protocol is unmanaged risk. If conditions change or better opportunities emerge, your funds stay static. Yuki diversifies across protocols, monitors conditions, and adapts automatically.",
  },
];

const audiences = [
  {
    title: "Individuals",
    description: "People seeking simple, on-chain savings without the complexity of managing DeFi protocols directly.",
  },
  {
    title: "DAOs & Treasuries",
    description: "Organizations managing idle treasury assets that want transparent, non-custodial yield without operational overhead.",
  },
  {
    title: "Crypto-Native Users",
    description: "Experienced users who want reliable yield without constant decision-making and portfolio management.",
  },
];

export default function About() {
  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-dark-900 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
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
            On-chain savings that <br />
            <span className="text-gray-500">adapts so you don&apos;t have to.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Yuki is a non-custodial, on-chain savings protocol that makes earning yield simple, transparent, and adaptive.
          </p>
        </div>

        {/* What is Yuki */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-0f52fb uppercase tracking-widest">What is Yuki</span>
            <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mt-2">
              Yield without the complexity
            </h2>
          </div>

          <div className="bg-dark-800/30 border border-white/5 rounded-lg p-8 md:p-10">
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Instead of asking users to manage protocols, strategies, or market conditions, Yuki lets you choose a risk level (low, medium, or high) and automatically handles everything else.
              </p>
              <p>
                Funds are allocated across audited yield sources, continuously monitored, and rebalanced according to clear, on-chain rules. You keep full control of your assets at all times.
              </p>
              <p className="text-fdfffc font-medium">
                Every allocation, exposure, and strategy decision is visible and verifiable on-chain.
              </p>
            </div>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">The Problem</span>
            <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mt-2">
              DeFi yield is powerful but inaccessible
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl">
              DeFi offers many ways to earn yield like lending, staking, and liquidity provision. But using them effectively requires constant attention, technical knowledge, and comfort with risk.
            </p>
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
          
          <p className="text-gray-500 mt-8 text-center max-w-xl mx-auto">
            As a result, many people either do nothing with their assets or park funds in single-protocol &quot;safe&quot; yield and hope nothing goes wrong.
          </p>
        </div>

        {/* The Solution */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-0f52fb uppercase tracking-widest">The Solution</span>
            <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mt-2">
              A simple savings experience
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl">
              Yuki abstracts DeFi complexity into something anyone can use. Full transparency, always.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={solution.title}
                className="p-6 border-l-2 border-0f52fb/30 bg-0f52fb/5"
              >
                <h3 className="text-lg font-medium text-fdfffc mb-3">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk-Based Vaults */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Risk-Based Vaults</span>
            <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mt-2">
              Organized around risk tolerance, not protocols
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl">
              Each vault follows clear, on-chain rules governing maximum exposure per protocol, strategy constraints, rebalancing behavior, and risk boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vaults.map((vault) => (
              <div 
                key={vault.title}
                className={`p-6 bg-dark-800/30 border ${vault.border} rounded-lg`}
              >
                <h3 className={`text-lg font-medium ${vault.color} mb-3`}>
                  {vault.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {vault.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How Yuki Compares */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">How Yuki Compares</span>
            <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mt-2">
              Built different
            </h2>
          </div>

          <div className="space-y-6">
            {comparisons.map((comparison) => (
              <div 
                key={comparison.versus}
                className="p-6 md:p-8 bg-dark-800/30 border border-white/5 rounded-lg"
              >
                <h3 className="text-lg font-medium text-0f52fb mb-3">
                  {comparison.versus}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {comparison.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who Yuki Is For */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Who Yuki Is For</span>
            <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mt-2">
              Built for savers, not speculators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((audience) => (
              <div 
                key={audience.title}
                className="p-6 bg-dark-800/30 border border-white/5 rounded-lg"
              >
                <h3 className="text-lg font-medium text-fdfffc mb-3">
                  {audience.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Vision */}
        <div className="mb-16 p-8 md:p-12 bg-dark-800/50 border border-white/5 rounded-lg">
          <span className="text-xs font-mono text-0f52fb uppercase tracking-widest">The Vision</span>
          <h2 className="text-2xl md:text-3xl font-medium text-fdfffc mt-2 mb-6">
            Make on-chain savings feel obvious
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              A place where people can confidently park money, earn yield, and stay fully in control without becoming DeFi experts.
            </p>
            <p className="text-fdfffc font-medium text-lg italic">
              When Yuki wins, the question becomes: &quot;Why would I leave my money idle anywhere else?&quot;
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 mb-6">
            Ready to experience on-chain savings done right?
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
