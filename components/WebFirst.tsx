"use client";
import React from "react";
import { ComputerDesktopIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

export default function WebFirst() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-page mx-auto px-6 text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-black uppercase leading-[1] tracking-tight mb-16">
          Start on the web. Go everywhere next.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-4 bg-0f52fb hover:bg-0f52fb/90 text-white font-medium rounded-3xl transition-all duration-200 flex items-center justify-center gap-2">
            <ComputerDesktopIcon className="w-5 h-5" />
            Get Early Web Access
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-gray-50 hover:bg-gray-100 text-black font-medium rounded-3xl transition-all duration-200 flex items-center justify-center gap-2">
            <DevicePhoneMobileIcon className="w-5 h-5" />
            Join iOS & Android Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
