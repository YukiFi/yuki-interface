import React from "react";
import Link from "next/link";
import ModernNavbar from "@/components/ModernNavbar";
import ModernFooter from "@/components/ModernFooter";

export default function TermsOfUse() {
  return (
    <>
      <ModernNavbar />
      <main className="pt-32 pb-24 bg-fdfffc">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-303130">Terms of Use</h1>

          <div className="prose prose-lg max-w-none text-303130/80">
            <p className="lead">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            <p>
              Please read these Terms of Use (&quot;Terms&quot;) carefully
              before using the Yuki Protocol website and services.
            </p>

            <h2 className="text-2xl font-recoleta  font-bold  mt-8 mb-4 text-303130">
              1. Acceptance of Terms
            </h2>

            <p>
              By accessing or using our website, you agree to be bound by these
              Terms and our Privacy Policy. If you do not agree to these Terms,
              please do not use our website or services.
            </p>

            <h2 className="text-2xl font-recoleta  font-bold  mt-8 mb-4 text-303130">
              2. Changes to Terms
            </h2>

            <p>
              We reserve the right to modify these Terms at any time. We will
              provide notice of any material changes by updating the &quot;Last
              Updated&quot; date at the top of these Terms. Your continued use
              of the website after such modifications will constitute your
              acknowledgment of the modified Terms.
            </p>

            <h2 className="text-2xl font-recoleta  font-bold  mt-8 mb-4 text-303130">
              3. Access and Use of the Website
            </h2>

            <p>
              You are responsible for ensuring that your access to our website
              complies with applicable laws and regulations. We reserve the
              right to terminate or restrict your access to our website for any
              reason, including violation of these Terms.
            </p>

            <h2 className="text-2xl font-recoleta  font-bold  mt-8 mb-4 text-303130">
              4. Intellectual Property Rights
            </h2>

            <p>
              The website and its original content, features, and functionality
              are owned by Yuki Protocol and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property or proprietary rights laws.
            </p>

            <h2 className="text-2xl font-recoleta  font-bold  mt-8 mb-4 text-303130">
              5. User Contributions
            </h2>

            <p>
              Any content you contribute to our website must not be illegal,
              obscene, threatening, defamatory, invasive of privacy, infringing
              of intellectual property rights, or otherwise injurious to third
              parties or objectionable.
            </p>

            <h2 className="text-2xl font-recoleta  font-bold  mt-8 mb-4 text-303130">
              6. Prohibited Activities
            </h2>

            <p>You agree not to:</p>

            <ul className="list-disc pl-6 mb-6">
              <li>
                Use the website in any way that violates any applicable laws or
                regulations.
              </li>
              <li>
                Engage in any conduct that restricts or inhibits anyone&apos;s
                use or enjoyment of the website.
              </li>
              <li>
                Use the website to advertise or offer to sell goods and
                services.
              </li>
              <li>
                Attempt to gain unauthorized access to, interfere with, damage,
                or disrupt any parts of the website.
              </li>
              <li>
                Use any robot, spider, or other automatic device to access the
                website for any purpose.
              </li>
            </ul>

            <h2 className="text-2xl font-recoleta  font-bold  mt-8 mb-4 text-303130">
              7. Disclaimer of Warranties
            </h2>

            <p>
              The website is provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis, without any warranties of any kind, either
              express or implied. We disclaim all warranties, including but not
              limited to, implied warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>

            <h2 className="text-2xl font-recoleta  font-bold  mt-8 mb-4 text-303130">
              8. Limitation of Liability
            </h2>

            <p>
              In no event shall Yuki Protocol be liable for any indirect,
              incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the website.
            </p>

            <h2 className="text-2xl font-recoleta  font-bold  mt-8 mb-4 text-303130">
              9. Indemnification
            </h2>

            <p>
              You agree to defend, indemnify, and hold harmless Yuki Protocol
              from and against any claims, liabilities, damages, judgments,
              awards, losses, costs, expenses, or fees (including reasonable
              attorneys&apos; fees) arising out of or relating to your violation
              of these Terms or your use of the website.
            </p>

            <h2 className="text-2xl font-recoleta  font-bold  mt-8 mb-4 text-303130">
              10. Governing Law
            </h2>

            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Yuki Protocol operates,
              without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-recoleta  font-bold  mt-8 mb-4 text-303130">
              11. Contact Information
            </h2>

            <p>
              If you have any questions about these Terms, please contact us at:
            </p>

            <p>
              <a
                href="mailto:contact@yuki.fi"
                className="text-0f52fb hover:underline"
              >
                contact@yuki.fi
              </a>
            </p>

            <div className="mt-12 pt-8 border-t border-cfd0ce/20">
              <Link
                href="/"
                className="bg-black/90 text-fdfffc px-5 py-2 rounded-lg font-semibold inline-flex items-center hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg"
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <ModernFooter />
    </>
  );
}
