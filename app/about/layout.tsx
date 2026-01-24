import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Yuki - a non-custodial, on-chain savings protocol that makes earning yield simple, transparent, and adaptive.",
  openGraph: {
    title: "About Yuki",
    description: "Learn about Yuki - a non-custodial, on-chain savings protocol that makes earning yield simple, transparent, and adaptive.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

