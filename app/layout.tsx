import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from 'next/font/google'
import { WaitlistProvider } from "@/context/WaitlistContext";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050506',
}


export const metadata: Metadata = {
  title: {
    default: "Yuki | Your Money, Always Working",
    template: "%s | Yuki",
  },
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
    title: "Yuki | Your Money, Always Working",
    description: "A new kind of money app. Your balance earns while you spend, send, and live.",
    images: ["/images/OG.png"],
    site: "@yukiprotocol",
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
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Yuki",
              url: "https://yuki.fi",
              logo: "https://yuki.fi/images/logo.svg",
              description: "A new kind of money app. Your balance earns while you spend, send, and live. Non-custodial and transparent by design.",
              sameAs: [
                "https://twitter.com/yukiprotocol"
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Yuki",
              url: "https://yuki.fi",
            }),
          }}
        />
      </head>
      <body className={`${geist.className}`}>
        <WaitlistProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </WaitlistProvider>
        <Analytics />
      </body>
    </html>
  );
}
