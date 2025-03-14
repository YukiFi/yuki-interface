"use client";
import Link from "next/link";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";

export default function NotFound() {
  return (
    <>
      <ModernNavbar />
      <main className="pt-40 pb-24 bg-fdfffc min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-8xl font-recoleta  font-bold  mb-6 text-0f52fb">
            404
          </h1>
          <h2 className="text-3xl font-recoleta  font-bold  mb-8 text-303130">
            Page Not Found
          </h2>

          <div className="mb-12 max-w-lg mx-auto">
            <p className="text-lg text-303130/80 mb-8">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/"
                className="bg-0f52fb text-fdfffc px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-0f52fb/90 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Return Home
              </Link>

              <Link
                href="https://x.com/yukiprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-0f52fb text-0f52fb px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-0f52fb/5 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow on X
              </Link>
            </div>
          </div>

          <div className="relative mt-16">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-cfd0ce/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-fdfffc px-4 text-sm text-303130/60">
                Explore more
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link
              href="/#how-it-works"
              className="p-6 bg-fdfffc rounded-xl border border-cfd0ce/20 hover:border-0f52fb/30 hover:shadow-sm transition-all duration-300 text-left"
            >
              <h3 className="text-lg font-recoleta  font-bold  mb-2 text-303130">
                How It Works
              </h3>
              <p className="text-sm text-303130/70">
                Learn about our index methodology and rebalancing process.
              </p>
            </Link>

            <Link
              href="/#features"
              className="p-6 bg-fdfffc rounded-xl border border-cfd0ce/20 hover:border-0f52fb/30 hover:shadow-sm transition-all duration-300 text-left"
            >
              <h3 className="text-lg font-recoleta  font-bold  mb-2 text-303130">
                Features
              </h3>
              <p className="text-sm text-303130/70">
                Discover the benefits of using Yuki Protocol.
              </p>
            </Link>
          </div>
        </div>
      </main>
      <ModernFooter />
    </>
  );
}
