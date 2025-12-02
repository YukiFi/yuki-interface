import React from "react";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly to us, such as when you create an account, connect a wallet, or contact us for support. This may include your email address, wallet addresses, and transaction data related to your use of our services.",
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.",
  },
  {
    title: "Information Sharing",
    content: "We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with service providers who assist us in operating our platform, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.",
  },
  {
    title: "Blockchain Data",
    content: "Please note that blockchain transactions are public by nature. When you interact with DeFi protocols through our platform, your wallet address and transaction history will be publicly visible on the blockchain. We have no control over this publicly available information.",
  },
  {
    title: "Data Security",
    content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.",
  },
  {
    title: "Cookies and Tracking",
    content: "We may use cookies and similar tracking technologies to collect information about your browsing activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us using the information provided below.",
  },
  {
    title: "Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-dark-900 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-fdfffc transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-medium text-fdfffc mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Intro */}
        <div className="mb-12 pb-12 border-b border-white/5">
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            At Yuki Protocol, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={section.title} className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-4">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-medium text-fdfffc">
                    {section.title}
                  </h2>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-gray-600">
                  {String(sections.length + 1).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-medium text-fdfffc">
                  Contact Us
                </h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-gray-400 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <a
                href="mailto:privacy@yuki.fi"
                className="text-0f52fb hover:text-fdfffc transition-colors"
              >
                privacy@yuki.fi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

