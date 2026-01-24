import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Yuki Terms of Use - The terms and conditions for using the Yuki platform.",
  openGraph: {
    title: "Terms of Use | Yuki",
    description: "Yuki Terms of Use - The terms and conditions for using the Yuki platform.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

