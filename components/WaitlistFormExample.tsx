"use client";

/**
 * Minimal Waitlist Form Example
 * 
 * This is a standalone example showing how to integrate the anti-bot
 * waitlist form without any UI component libraries.
 * 
 * Features:
 * - Server-issued challenge token (fetched on mount)
 * - Cloudflare Turnstile integration
 * - Honeypot field
 * - Loading/success/error states
 * - Pure Tailwind CSS styling
 */

import React, { useState, useEffect, useRef, useCallback } from "react";

// Get this from your Cloudflare Turnstile dashboard
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

interface ChallengePayload {
  nonce: string;
  issuedAt: number;
  sig: string;
}

type FormStatus = "idle" | "loading" | "success" | "already_joined" | "error";

// Extend window for Turnstile
declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "invisible";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export default function WaitlistFormExample() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [challenge, setChallenge] = useState<ChallengePayload | null>(null);

  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const turnstileLoaded = useRef(false);

  // Fetch server challenge on mount
  const fetchChallenge = useCallback(async () => {
    try {
      const res = await fetch("/api/waitlist/challenge");
      if (res.ok) {
        const data = await res.json();
        setChallenge(data);
      }
    } catch (error) {
    }
  }, []);

  // Load Turnstile script on mount
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || turnstileLoaded.current) return;

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.onload = () => {
      turnstileLoaded.current = true;
    };
    document.head.appendChild(script);
  }, []);

  // Initialize on component mount
  useEffect(() => {
    fetchChallenge();

    const initTurnstile = () => {
      if (
        window.turnstile &&
        turnstileRef.current &&
        TURNSTILE_SITE_KEY &&
        !turnstileWidgetId.current
      ) {
        turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          "error-callback": () => setTurnstileToken(null),
          "expired-callback": () => setTurnstileToken(null),
          theme: "dark",
          size: "normal",
        });
      }
    };

    if (window.turnstile) {
      initTurnstile();
    } else {
      const checkInterval = setInterval(() => {
        if (window.turnstile) {
          initTurnstile();
          clearInterval(checkInterval);
        }
      }, 100);

      return () => clearInterval(checkInterval);
    }
  }, [fetchChallenge]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          website: honeypot,
          turnstileToken,
          challenge,
        }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setErrorMessage("Too many attempts. Please try again in a minute.");
        setStatus("error");
        return;
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      if (data.alreadyExists) {
        setStatus("already_joined");
      } else {
        setStatus("success");
      }
      setEmail("");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-md mx-auto p-6 bg-zinc-900 rounded-xl text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">You&apos;re In!</h2>
        <p className="text-zinc-400">We&apos;ll notify you when we launch.</p>
      </div>
    );
  }

  if (status === "already_joined") {
    return (
      <div className="max-w-md mx-auto p-6 bg-zinc-900 rounded-xl text-center">
        <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Already on the List!</h2>
        <p className="text-zinc-400">You&apos;ve already joined. We&apos;ll notify you when we launch.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-900 rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-2 text-center">Join the Waitlist</h2>
      <p className="text-zinc-400 text-center mb-6">Be the first to know when we launch.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot - hidden from humans */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            top: "-9999px",
            opacity: 0,
            height: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === "loading"}
            className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            autoComplete="email"
          />
          {status === "error" && errorMessage && (
            <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
          )}
        </div>

        {/* Turnstile widget */}
        {TURNSTILE_SITE_KEY && (
          <div className="flex justify-center">
            <div ref={turnstileRef} />
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full h-12 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-medium rounded-lg transition-colors"
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Joining...
            </span>
          ) : (
            "Join Waitlist"
          )}
        </button>
      </form>

      <p className="text-xs text-zinc-500 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
