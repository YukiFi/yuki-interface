import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Grove",
  description: "Next generation decentralized savings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-950">
        <div className="px-6 lg:px-8">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
