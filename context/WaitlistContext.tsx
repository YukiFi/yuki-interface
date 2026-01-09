"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import WaitlistModal from "@/components/WaitlistModal";

interface WaitlistContextType {
  openWaitlist: () => void;
  closeWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WaitlistContext.Provider
      value={{
        openWaitlist: () => setIsOpen(true),
        closeWaitlist: () => setIsOpen(false),
      }}
    >
      {children}
      <WaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}

