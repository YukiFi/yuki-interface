"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Add money",
    description: "From a wallet or another Yuki user.",
  },
  {
    number: "2",
    title: "Use it normally",
    description: "Send, receive, or hold — just like cash.",
  },
  {
    number: "3",
    title: "Earn automatically",
    description: "Your balance grows in the background, every second.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-page mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight mb-4">
            Money in. Money out.
            <br />
            <span className="text-0f52fb">Always earning.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-3xl text-center ${
                index === 2 ? "bg-0f52fb" : "bg-gray-50"
              }`}
            >
              <div className={`text-3xl font-bold mb-3 ${
                index === 2 ? "text-white" : "text-black"
              }`}>
                {step.number}
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                index === 2 ? "text-white" : "text-black"
              }`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                index === 2 ? "text-white/80" : "text-gray-600"
              }`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
