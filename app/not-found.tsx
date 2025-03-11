"use client";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-xl mx-auto px-6 py-16 text-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-blue-900/10 rounded-2xl"></div>
        <div className="absolute -z-10 top-0 right-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h1 className="font-vacay bg-gradient-accent bg-clip-text text-transparent text-9xl mb-4">
            404
          </h1>

          <h2 className="text-3xl font-light mb-6">Page not found</h2>

          <p className="text-gray-300 text-lg mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>

          <Link
            href="/"
            className="bg-white/10 text-white px-5 py-2.5 rounded-lg font-medium backdrop-blur-sm inline-flex items-center hover:bg-white/15 transition-all duration-300"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go back home
          </Link>

          <div className="mt-8">
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300 bg-white/5 px-4 py-2 rounded-lg hover:bg-white/8"
            >
              Contact support →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
