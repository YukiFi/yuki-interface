"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-48 pb-32 relative min-h-screen bg-dark-900 flex items-center">
        {/* Minimal Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900"></div>
           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-0f52fb/5 rounded-full blur-[150px] opacity-30"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full text-center">
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs font-medium text-gray-400">
            Error 404
          </div>

          <h1 className="text-6xl md:text-8xl font-medium text-fdfffc tracking-tighter mb-6">
            Page not found.
          </h1>

          <p className="text-lg text-gray-500 mb-12 max-w-md mx-auto font-light">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-fdfffc text-dark-900 px-8 py-3 rounded-lg font-medium text-base hover:bg-gray-200 transition-all duration-300 hover:-translate-y-0.5"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
