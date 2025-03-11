"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function ModernCallToAction() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Here you would send the email to your API
    console.log("Submitting email:", email);
    setSubmitted(true);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/5 to-purple-900/10 pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="font-vacay text-5xl bg-gradient-accent bg-clip-text text-transparent mb-6 block">
            join
          </span>
          <h2 className="text-3xl font-light mb-6">
            Interested in the DeFi ecosystem?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join our information list to receive updates about Yuki Protocol and
            our approach to DeFi protocol indexing. All participation involves
            significant risks.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-glass shadow-card hover:shadow-card-hover transition-all duration-300 rounded-2xl p-8">
            <h3 className="text-xl font-medium mb-8 text-center">
              Stay informed
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-white/5 p-3 text-white ${
                      error
                        ? "ring-1 ring-red-400"
                        : "focus:ring-1 focus:ring-purple-400"
                    } rounded-lg outline-none transition`}
                    placeholder="Enter your email"
                  />
                  {error && (
                    <p className="mt-1 text-sm text-red-400">{error}</p>
                  )}
                </div>
                <div className="flex-shrink-0 md:self-end">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-white/10 text-white px-5 py-2.5 rounded-lg font-medium backdrop-blur-sm inline-flex items-center justify-center hover:bg-white/15 transition-all duration-300"
                    disabled={submitted}
                  >
                    {submitted ? "Thank you!" : "Join Updates List"}
                    {!submitted && (
                      <svg
                        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-8 py-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-y-2">
              <p className="text-gray-400 text-sm">
                Not an offer to sell securities or financial advice
              </p>
              <Link
                href="#"
                className="text-gray-300 text-sm hover:text-white group transition-colors duration-300 inline-flex items-center bg-white/5 px-4 py-2 rounded-lg hover:bg-white/8"
              >
                Read our technical documentation
                <svg
                  className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
