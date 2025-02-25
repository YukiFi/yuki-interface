"use client";
import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  LockClosedIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-base font-semibold leading-7 text-emerald-400"
        >
          Key Benefits
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-2 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Everything you need
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* Large card - Low-risk diversification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex p-px lg:col-span-4"
          >
            <div className="overflow-hidden rounded-lg bg-neutral-900/30 border border-zinc-800 hover:border-emerald-900 transition-colors duration-300 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full">
              <div className="h-80 bg-gradient-to-br from-emerald-900/20 to-neutral-900/20 flex items-center justify-center relative overflow-hidden">
                <ShieldCheckIcon className="h-32 w-32 text-emerald-500/20 absolute -right-8 -bottom-8 transform rotate-12" />
                <div className="p-8 max-w-md">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    Low-risk diversification
                  </h3>
                  <p className="mt-4 text-lg text-zinc-300">
                    Your funds are allocated across audited, over-collateralized
                    DeFi protocols to minimize risk while maximizing returns.
                  </p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-sm font-semibold text-emerald-400">
                  Security First
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  Protected by design
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-zinc-400">
                  Our diversification strategy ensures your savings are never
                  exposed to high-risk protocols or volatile assets.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Medium card - Automated rebalancing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex p-px lg:col-span-2"
          >
            <div className="overflow-hidden rounded-lg bg-neutral-900/30 border border-zinc-800 hover:border-emerald-900 transition-colors duration-300 lg:rounded-tr-[2rem] w-full">
              <div className="h-80 bg-gradient-to-br from-emerald-900/20 to-neutral-900/20 flex items-center justify-center relative overflow-hidden">
                <ArrowPathIcon className="h-24 w-24 text-emerald-500/20 absolute -right-6 -bottom-6 transform rotate-12" />
                <div className="p-6 max-w-xs">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    Automated rebalancing
                  </h3>
                  <p className="mt-3 text-zinc-300">
                    Smart contracts continuously adjust to capture the best
                    yields.
                  </p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-sm font-semibold text-emerald-400">
                  Optimization
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  Always the best rates
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-zinc-400">
                  Our algorithms monitor the market 24/7 to ensure your funds
                  are always earning optimal returns.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Medium card - Bank integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex p-px lg:col-span-2"
          >
            <div className="overflow-hidden rounded-lg bg-neutral-900/30 border border-zinc-800 hover:border-emerald-900 transition-colors duration-300 lg:rounded-bl-[2rem] w-full">
              <div className="h-80 bg-gradient-to-br from-emerald-900/20 to-neutral-900/20 flex items-center justify-center relative overflow-hidden">
                <CurrencyDollarIcon className="h-24 w-24 text-emerald-500/20 absolute -right-6 -bottom-6 transform rotate-12" />
                <div className="p-6 max-w-xs">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    Bank integration
                  </h3>
                  <p className="mt-3 text-zinc-300">
                    Seamless deposits and withdrawals in your local currency.
                  </p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-sm font-semibold text-emerald-400">
                  Convenience
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  Connect your bank
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-zinc-400">
                  Move money between your bank account and Grove with just a few
                  clicks, no crypto knowledge required.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Large card - Institutional security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex p-px lg:col-span-4"
          >
            <div className="overflow-hidden rounded-lg bg-neutral-900/30 border border-zinc-800 hover:border-emerald-900 transition-colors duration-300 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] w-full">
              <div className="h-80 bg-gradient-to-br from-emerald-900/20 to-neutral-900/20 flex items-center justify-center relative overflow-hidden">
                <LockClosedIcon className="h-32 w-32 text-emerald-500/20 absolute -right-8 -bottom-8 transform rotate-12" />
                <div className="p-8 max-w-md">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    Institutional security
                  </h3>
                  <p className="mt-4 text-lg text-zinc-300">
                    Audited smart contracts with optional insurance coverage
                    protect your assets at all times.
                  </p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-sm font-semibold text-emerald-400">
                  Enterprise-grade
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  Bank-level protection
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-zinc-400">
                  Multiple security layers, regular audits, and optional
                  insurance coverage ensure your funds are as safe as possible.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
