"use client";

import {
  ArrowPathIcon,
  BanknotesIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const steps = [
  {
    name: "Deposit funds",
    description:
      "Connect your bank account or deposit stablecoins directly. We support multiple fiat currencies and popular stablecoins like USDC and DAI.",
    icon: BanknotesIcon,
  },
  {
    name: "Automated allocation",
    description:
      "Smart contracts diversify your funds across low-risk DeFi protocols, optimizing for the best yields while maintaining strong security standards.",
    icon: ArrowPathIcon,
  },
  {
    name: "Watch savings grow",
    description:
      "Track performance in real-time through our intuitive dashboard. Withdraw anytime without penalties or lock-up periods.",
    icon: LockClosedIcon,
  },
];

export default function HowItWorks() {
  return (
    <div
      id="how-it-works"
      className="overflow-hidden bg-neutral-950 py-24 sm:py-32 relative"
    >
      {/* Background gradients */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-900/20 rounded-full blur-[180px] -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-base/7 font-semibold text-emerald-400"
              >
                Simplified DeFi
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-2 text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl"
              >
                How Grove Works
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-6 text-lg/8 text-zinc-300"
              >
                No technical knowledge required. Grove handles all the
                complexity of DeFi, so you can focus on growing your savings
                with confidence.
              </motion.p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-zinc-300 lg:max-w-none">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.name}
                    className="relative pl-9"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <dt className="inline font-semibold text-white">
                      <step.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 size-5 text-emerald-500"
                      />
                      {step.name}
                    </dt>{" "}
                    <dd className="inline">{step.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10">
              {/* Gradient overlay for the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-neutral-900/30 z-10"></div>

              {/* Dashboard mockup */}
              <div className="bg-neutral-900 rounded-t-xl p-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="bg-neutral-800 p-6 relative z-0">
                <div className="bg-neutral-900 rounded-lg p-6 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-white font-medium">Total Balance</h3>
                      <p className="text-2xl font-bold text-white">
                        $12,458.32
                      </p>
                    </div>
                    <div className="bg-emerald-900/30 px-3 py-1 rounded-full">
                      <span className="text-emerald-400 text-sm">
                        +5.8% APY
                      </span>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-32 w-full mt-4 rounded-lg overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-emerald-500/20 to-emerald-500/5 relative">
                      <svg
                        viewBox="0 0 100 20"
                        className="absolute bottom-0 left-0 w-full"
                      >
                        <path
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="0.5"
                          d="M0,10 Q30,5 50,10 T100,10"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-900 rounded-lg p-4">
                    <h4 className="text-zinc-400 text-sm mb-1">
                      Lending Pools
                    </h4>
                    <p className="text-white font-semibold">$6,229.16</p>
                    <div className="mt-2 text-xs text-emerald-400">
                      6.2% APY
                    </div>
                  </div>
                  <div className="bg-neutral-900 rounded-lg p-4">
                    <h4 className="text-zinc-400 text-sm mb-1">
                      Liquidity Pools
                    </h4>
                    <p className="text-white font-semibold">$6,229.16</p>
                    <div className="mt-2 text-xs text-emerald-400">
                      5.4% APY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
