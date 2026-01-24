"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Apple-style easing
const appleEase = [0.25, 0.1, 0.25, 1];

type FormStatus = "idle" | "loading" | "success" | "already_joined" | "error";

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Honeypot field for bots
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formLoadTime = useRef<number>(0);

  // Track when form is opened for time-based bot detection
  useEffect(() => {
    if (isOpen) {
      formLoadTime.current = Date.now();
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

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
          website: honeypot, // Honeypot field
          formLoadTime: formLoadTime.current, // Time-based detection
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

      // Check if already exists
      if (data.alreadyExists) {
        setStatus("already_joined");
      } else {
        setStatus("success");
      }
      setEmail("");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const resetAndClose = () => {
    setStatus("idle");
    setEmail("");
    setHoneypot("");
    setErrorMessage("");
    onClose();
  };

  const isSuccessState = status === "success" || status === "already_joined";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop - OPTIMIZED: solid instead of blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: appleEase }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-black/85"
          />

          {/* Modal - OPTIMIZED: solid background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: appleEase }}
            className="relative w-full max-w-md"
          >
            <Card className="bg-[#0c0c0e] overflow-hidden">
              {/* Close button */}
              <button
                onClick={resetAndClose}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/[0.12] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {isSuccessState ? (
                <>
                  <CardHeader className="text-center pb-4 pt-8">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: appleEase }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        status === "already_joined" ? "bg-amber-500/80" : "bg-brand/80"
                      }`}
                    >
                      {status === "already_joined" ? (
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2, ease: appleEase }}
                    >
                      <CardTitle className="text-2xl sm:text-3xl text-foreground">
                        {status === "already_joined" ? "Already on the List!" : "You're In!"}
                      </CardTitle>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3, ease: appleEase }}
                    >
                      <CardDescription className="text-base mt-2">
                        {status === "already_joined" 
                          ? "You've already joined the waitlist. We'll notify you when Yuki launches."
                          : "We'll notify you when Yuki launches."
                        }
                      </CardDescription>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="pb-2">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4, ease: appleEase }}
                      className="text-sm text-muted-foreground text-center mb-4"
                    >
                      In the meantime, join our community
                    </motion.p>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col sm:flex-row gap-3 pb-8">
                    <motion.div
                      className="flex-1 w-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5, ease: appleEase }}
                    >
                      <Button variant="outline" size="lg" className="w-full hover:bg-white/[0.05]" asChild>
                        <a
                          href="https://discord.com/invite/ZuS6Mj4r8j"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                          </svg>
                          Discord
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      className="flex-1 w-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6, ease: appleEase }}
                    >
                      <Button variant="outline" size="lg" className="w-full hover:bg-white/[0.05]" asChild>
                        <a
                          href="https://x.com/yukiprotocol"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                          Follow on X
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </>
              ) : (
                <>
                  <CardHeader className="text-center pb-4 pt-8">
                    <CardTitle className="text-2xl sm:text-3xl text-foreground">
                      Join the Waitlist
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      Be the first to know when Yuki launches.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Honeypot field - hidden from humans, visible to bots */}
                      <div 
                        aria-hidden="true" 
                        style={{ 
                          position: 'absolute', 
                          left: '-9999px',
                          top: '-9999px',
                          opacity: 0,
                          height: 0,
                          overflow: 'hidden',
                          pointerEvents: 'none',
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
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          disabled={status === "loading"}
                          aria-invalid={status === "error"}
                          className="h-12 bg-white/[0.04]"
                          autoComplete="email"
                        />
                        {status === "error" && errorMessage && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-brand text-sm mt-2"
                          >
                            {errorMessage}
                          </motion.p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={status === "loading"}
                        size="lg"
                        className="w-full bg-brand/90 hover:bg-brand text-brand-900"
                      >
                        {status === "loading" ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Joining...
                          </span>
                        ) : (
                          "Join Waitlist"
                        )}
                      </Button>
                    </form>
                  </CardContent>

                  <CardFooter className="justify-center pb-8">
                    <p className="text-xs text-muted-foreground">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </CardFooter>
                </>
              )}
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
