import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Yuki Privacy Policy - Learn how we handle and protect your data.",
  openGraph: {
    title: "Privacy Policy | Yuki",
    description: "Yuki Privacy Policy - Learn how we handle and protect your data.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

