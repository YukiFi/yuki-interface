import "./globals.css";
import type { Metadata } from "next";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";

export const metadata: Metadata = {
  title: "Yuki",
  description: "The future of DeFi-based funds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans min-h-screen bg-gradient-dark text-dark-50">
        <div className="fixed inset-0 bg-[url('/images/grid.svg')] opacity-10 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
        <div className="relative z-10">
          <ModernNavbar />
          <main>{children}</main>
          <ModernFooter />
        </div>
      </body>
    </html>
  );
}
