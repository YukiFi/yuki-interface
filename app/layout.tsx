import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import { WaitlistProvider } from "@/context/WaitlistContext";

export const metadata: Metadata = {
  title: "Yuki - Your Money, Always Working",
  description: "A new kind of money app. Your balance earns while you spend, send, and live. Non-custodial and transparent by design.",
  metadataBase: new URL("https://yuki.fi"),
  keywords: ["savings", "yield", "crypto", "DeFi", "money app", "earn", "non-custodial"],
  authors: [{ name: "Yuki Protocol" }],
  creator: "Yuki Protocol",
  openGraph: {
    title: "Yuki - Your Money, Always Working",
    description: "A new kind of money app. Your balance earns while you spend, send, and live. Non-custodial and transparent by design.",
    url: "https://yuki.fi",
    siteName: "Yuki",
    images: [
      {
        url: "/images/OG.png",
        width: 1200,
        height: 630,
        alt: "Yuki - Your Money, Always Working",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuki - Your Money, Always Working",
    description: "A new kind of money app. Your balance earns while you spend, send, and live.",
    images: ["/images/OG.png"],
    creator: "@yukiprotocol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-mabrypro antialiased">
        <WaitlistProvider>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </WaitlistProvider>
        <Analytics />
      </body>
    </html>
  );
}
