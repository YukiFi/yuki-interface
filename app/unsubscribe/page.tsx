"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

type PageStatus = "loading" | "invalid" | "ready" | "processing" | "success" | "error";

interface TokenData {
  email: string;
  type: string;
}

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  
  const [status, setStatus] = useState<PageStatus>("loading");
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Verify token on mount
  const verifyToken = useCallback(async () => {
    if (!token) {
      setStatus("invalid");
      setErrorMessage("No unsubscribe token provided");
      return;
    }

    try {
      const res = await fetch(`/api/unsubscribe?token=${encodeURIComponent(token)}`);
      const data = await res.json();

      if (!res.ok || !data.valid) {
        setStatus("invalid");
        setErrorMessage(data.error || "Invalid or expired unsubscribe link");
        return;
      }

      setTokenData({ email: data.email, type: data.type });
      setStatus("ready");
    } catch {
      setStatus("invalid");
      setErrorMessage("Failed to verify unsubscribe link");
    }
  }, [token]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  const handleUnsubscribe = async () => {
    if (!token) return;

    setStatus("processing");

    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to unsubscribe");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "waitlist":
        return "waitlist updates";
      case "marketing":
        return "marketing emails";
      case "product":
        return "product updates";
      case "all":
      default:
        return "all emails";
    }
  };

  return (
    <div className="min-h-screen bg-[#050506] flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Loading State */}
          {status === "loading" && (
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/[0.05] flex items-center justify-center">
                <svg className="w-8 h-8 text-white/40 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
              <p className="text-white/50">Verifying your request...</p>
            </div>
          )}

          {/* Invalid Token */}
          {status === "invalid" && (
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-medium text-white mb-2">Invalid Link</h1>
                <p className="text-white/50">{errorMessage}</p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to home
              </Link>
            </div>
          )}

          {/* Ready to Unsubscribe */}
          {status === "ready" && tokenData && (
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/[0.05] flex items-center justify-center">
                <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-medium text-white mb-2">Unsubscribe</h1>
                <p className="text-white/50">
                  You&apos;re about to unsubscribe <span className="text-white/70">{tokenData.email}</span> from {getTypeLabel(tokenData.type)}.
                </p>
              </div>
              <button
                onClick={handleUnsubscribe}
                className="w-full py-3 px-6 bg-white/[0.08] hover:bg-white/[0.12] text-white rounded-lg transition-colors font-medium"
              >
                Confirm Unsubscribe
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                Cancel and go back
              </Link>
            </div>
          )}

          {/* Processing */}
          {status === "processing" && (
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/[0.05] flex items-center justify-center">
                <svg className="w-8 h-8 text-white/40 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
              <p className="text-white/50">Processing your request...</p>
            </div>
          )}

          {/* Success */}
          {status === "success" && (
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-medium text-white mb-2">Unsubscribed</h1>
                <p className="text-white/50">
                  You&apos;ve been successfully unsubscribed. You won&apos;t receive any more emails from us.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to home
              </Link>
            </div>
          )}

          {/* Error */}
          {status === "error" && (
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-medium text-white mb-2">Something Went Wrong</h1>
                <p className="text-white/50">{errorMessage}</p>
              </div>
              <button
                onClick={handleUnsubscribe}
                className="w-full py-3 px-6 bg-white/[0.08] hover:bg-white/[0.12] text-white rounded-lg transition-colors font-medium"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to home
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

// Loading fallback for Suspense
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#050506] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-white/[0.05] flex items-center justify-center">
          <svg className="w-8 h-8 text-white/40 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </div>
        <p className="text-white/50">Loading...</p>
      </div>
    </div>
  );
}

// Wrap in Suspense for useSearchParams
export default function UnsubscribePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <UnsubscribeContent />
    </Suspense>
  );
}
