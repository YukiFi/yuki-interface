"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-black">Testnet</span>
                <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                <a href="#" className="flex items-center gap-x-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Live Now
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="-mr-2 h-5 w-5 text-gray-400"
                  />
                </a>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              DeFi complexity, simplified.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With Grove, gain broad exposure to yield-generating assets and
              leverage sophisticated strategies, all while enjoying a simplified
              and user-friendly experience.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="outline-1 outline outline-black hover:bg-black hover:text-white duration-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Launch App
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow opacity-50">
            <img
              alt=""
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhydra.nat.uni-magdeburg.de%2Fpacking%2Fcsq24.png&f=1&nofb=1&ipt=f9f8c29793da5f24b1d7bf03273e70553299c55587770ebe99c33b4bbf5c4c92&ipo=images"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
