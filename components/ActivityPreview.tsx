"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownIcon, ArrowUpIcon, SparklesIcon } from "@heroicons/react/24/outline";

const names = ["Alex", "Sarah", "Mike", "Emma", "David", "Lisa", "James", "Sofia", "Ryan"];
const messages = [
  "pizza 🍕",
  "coffee ☕",
  "gas fees lol",
  "lunch",
  "rent",
  "groceries",
  "concert tickets",
  "ETH transaction",
  "dinner",
  "USDC swap",
  "drinks",
  "Uber",
  "Netflix",
  "splitting bill",
  "birthday gift 🎁",
  "taxi",
  "breakfast",
];

const getRandomName = () => names[Math.floor(Math.random() * names.length)];
const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];
const getRandomAmount = (min: number, max: number) => 
  (Math.random() * (max - min) + min).toFixed(2);

export default function ActivityPreview() {
  const usedCombos = useRef<Set<string>>(new Set());

  const getUniqueCombo = () => {
    let name, message, combo;
    let attempts = 0;
    do {
      name = getRandomName();
      message = getRandomMessage();
      combo = `${name}-${message}`;
      attempts++;
    } while (usedCombos.current.has(combo) && attempts < 50);
    
    usedCombos.current.add(combo);
    if (usedCombos.current.size > 10) {
      const firstCombo = Array.from(usedCombos.current)[0];
      usedCombos.current.delete(firstCombo);
    }
    
    return { name, message };
  };

  // Initialize with proper structure
  const initializeActivities = () => {
    const combo1 = getUniqueCombo();
    const combo2 = getUniqueCombo();
    
    return [
      {
        id: 1,
        type: "received" as const,
        icon: ArrowDownIcon,
        name: combo1.name,
        message: combo1.message,
        time: "2 hours ago",
        amount: `+$${getRandomAmount(20, 200)}`,
      },
      {
        id: 2,
        type: "sent" as const,
        icon: ArrowUpIcon,
        name: combo2.name,
        message: combo2.message,
        time: "5 hours ago",
        amount: `-$${getRandomAmount(10, 100)}`,
      },
      {
        id: 3,
        type: "earned" as const,
        icon: SparklesIcon,
        text: "Balance earned today",
        time: "Just now",
        amount: `+$${getRandomAmount(1, 5)}`,
        highlight: true,
      },
    ];
  };

  const [activities, setActivities] = useState(initializeActivities);

  useEffect(() => {
    const interval = setInterval(() => {
      const activityType = Math.random();
      let newActivity;

      if (activityType < 0.4) {
        // Received
        const { name, message } = getUniqueCombo();
        const amount = getRandomAmount(20, 200);
        newActivity = {
          id: Date.now(),
          type: "received" as const,
          icon: ArrowDownIcon,
          name,
          message,
          time: "Just now",
          amount: `+$${amount}`,
        };
      } else if (activityType < 0.7) {
        // Sent
        const { name, message } = getUniqueCombo();
        const amount = getRandomAmount(10, 100);
        newActivity = {
          id: Date.now(),
          type: "sent" as const,
          icon: ArrowUpIcon,
          name,
          message,
          time: "Just now",
          amount: `-$${amount}`,
        };
      } else {
        // Earned
        const amount = getRandomAmount(0.5, 3);
        newActivity = {
          id: Date.now(),
          type: "earned" as const,
          icon: SparklesIcon,
          text: "Balance earned",
          time: "Just now",
          amount: `+$${amount}`,
          highlight: true,
        };
      }

      setActivities((prev) => [newActivity, ...prev.slice(0, 2)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-page mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight mb-4">
            Your money,
            <br />
            <span className="text-0f52fb">in motion.</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Activity Feed with fixed height container */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false}>
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: index * 110, // Fixed spacing
                  }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className={`absolute w-full p-6 rounded-3xl ${
                    activity.highlight
                      ? "bg-0f52fb"
                      : activity.type === "received"
                      ? "bg-white"
                      : activity.type === "sent"
                      ? "bg-gray-100"
                      : "bg-white"
                  }`}
                  style={{ height: "94px" }}
                >
                  <div className="flex items-center gap-4 h-full">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: activity.highlight ? 180 : 0 
                      }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.highlight
                          ? "bg-white/20"
                          : activity.type === "received"
                          ? "bg-blue-50"
                          : activity.type === "sent"
                          ? "bg-gray-200"
                          : "bg-blue-50"
                      }`}
                    >
                      <activity.icon
                        className={`w-6 h-6 ${
                          activity.highlight 
                            ? "text-white" 
                            : "text-0f52fb"
                        }`}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {activity.highlight ? (
                        <p className="font-medium mb-1 text-white">
                          {activity.text}
                        </p>
                      ) : (
                        <>
                          <p className={`font-medium mb-1 text-black truncate`}>
                            {activity.type === "received" ? "From" : "To"} {activity.name}
                          </p>
                          <p className={`text-sm ${
                            activity.highlight ? "text-white/70" : "text-gray-500"
                          } truncate`}>
                            "{activity.message}"
                          </p>
                        </>
                      )}
                    </div>

                    {/* Amount */}
                    <div className={`text-lg font-bold flex-shrink-0 ${
                      activity.highlight
                        ? "text-white"
                        : activity.amount.startsWith("+")
                        ? "text-0f52fb"
                        : "text-gray-600"
                    }`}>
                      {activity.amount}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {/* Spacer to maintain height */}
            <div style={{ height: "330px" }}></div>
          </div>

          {/* Live indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-2 text-gray-500"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-0f52fb rounded-full"
            />
            <span className="text-sm">Live updates</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
