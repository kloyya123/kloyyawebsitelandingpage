import type { Metadata } from "next";
import Link from "next/link";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Legal Center",
  description:
    "All of Kloyya's legal documents in one place — privacy, terms, security, and how to reach us.",
  alternates: {
    canonical: "/legal",
  },
};

const LIVE_DOCS = [
  { title: "Privacy Policy", href: "/privacy", desc: "What data Kloyya collects, how it is used, stored, shared, and protected." },
  { title: "Terms of Service", href: "/terms", desc: "The legal agreement governing use of Kloyya's services, subscriptions, accounts, and responsibilities." },
  { title: "Trust, Security & Compliance", href: "/trust", desc: "Kloyya's security architecture, encryption, authentication, infrastructure, AI safeguards, and compliance commitments." },
];

const PLANNED_DOCS = [
  { title: "Cookie Policy", desc: "The cookies and similar technologies Kloyya uses, their purpose, and how users can manage them." },
  { title: "Acceptable Use Policy", desc: "Prohibited activities such as illegal use, spam, malware, abuse, scraping, and attempts to compromise the platform." },
  { title: "AI Usage Policy", desc: "How Kloyya's AI works, limitations of AI-generated content, responsible use, and user responsibilities." },
  { title: "Data Processing Addendum (DPA)", desc: "Contractual terms for customers subject to GDPR and other privacy regulations, outlining Kloyya's role as a data processor." },
  { title: "Subprocessors", desc: "Third-party service providers that process customer data on Kloyya's behalf, along with the purpose of processing." },
  { title: "Security & Vulnerability Disclosure", desc: "How security researchers can responsibly report vulnerabilities and how Kloyya responds to security incidents." },
  { title: "Copyright & Trademark Policy", desc: "Ownership of Kloyya's intellectual property, copyright complaints, trademark use, and brand guidelines." },
  { title: "Law Enforcement Guidelines", desc: "How Kloyya responds to valid legal requests from government and law enforcement authorities." },
  { title: "Account & Data Deletion Policy", desc: "How users can delete their accounts, what data is removed, what may be retained for legal obligations, and expected timelines." },
  { title: "Changelog", desc: "Updates to legal policies so customers can see what changed and when." },
];

export default function LegalCenterPage() {
  return (
    <LegalShell kicker="Legal · Center" title="Legal Center" updated="July 26, 2026">
      <p>
        This page provides access to the legal information that governs your
        use of Kloyya&apos;s website, applications, APIs, and services. It also
        explains your rights, responsibilities, and our commitments as a
        provider of AI-powered productivity software.
      </p>

      <h2>
        <span className="num">01</span>Legal documents
      </h2>
      <p>The following documents form the legal agreement between you and Kloyya.</p>
      <ul>
        {LIVE_DOCS.map((doc) => (
          <li key={doc.href}>
            <span>
              <Link href={doc.href} className="font-medium text-ink underline decoration-ink/25 underline-offset-2 hover:decoration-signal">
                {doc.title}
              </Link>{" "}
              — {doc.desc}
            </span>
          </li>
        ))}
      </ul>
      <p>Please review these documents carefully before using our Services.</p>

      <h2>
        <span className="num">02</span>Intellectual property
      </h2>
      <p>
        Kloyya, including its software, source code, AI systems, branding,
        trademarks, logos, user interface designs, graphics, documentation, and
        website content, is protected by applicable intellectual property laws.
        Unless otherwise stated, all rights are reserved. Nothing in our
        Services grants ownership of Kloyya&apos;s intellectual property except
        where expressly permitted.
      </p>

      <h2>
        <span className="num">03</span>Trademarks
      </h2>
      <p>
        &ldquo;Kloyya,&rdquo; the Kloyya logo, product names, service names, and
        branding elements are trademarks or registered trademarks of Kloyya.
        You may not use our trademarks without prior written permission except
        for reasonable references to our products.
      </p>

      <h2>
        <span className="num">04</span>Copyright
      </h2>
      <p>All original content published by Kloyya is protected by copyright law. This includes:</p>
      <ul>
        <li><span>Website content</span></li>
        <li><span>Product documentation</span></li>
        <li><span>Design assets</span></li>
        <li><span>Graphics</span></li>
        <li><span>Videos</span></li>
        <li><span>Educational materials</span></li>
        <li><span>Marketing content</span></li>
        <li><span>Product interfaces</span></li>
      </ul>
      <p>Unauthorized reproduction or distribution may violate applicable copyright laws.</p>

      <h2>
        <span className="num">05</span>User content
      </h2>
      <p>
        You retain ownership of the files, documents, information, and other
        content you upload to Kloyya. By using our Services, you grant Kloyya a
        limited license to process that content solely to operate, maintain,
        secure, and improve the Services in accordance with our Privacy Policy.
        We do not claim ownership of your content.
      </p>

      <h2>
        <span className="num">06</span>Open source software
      </h2>
      <p>
        Some parts of Kloyya may include or depend on open-source software
        licensed under their respective licenses. Where required, attribution
        and license information will be made available. Nothing in these Terms
        limits the rights granted by applicable open-source licenses.
      </p>

      <h2>
        <span className="num">07</span>Acceptable use
      </h2>
      <p>To help maintain a safe platform, users must not use Kloyya to:</p>
      <ul>
        <li><span>Break the law.</span></li>
        <li><span>Distribute malware or malicious software.</span></li>
        <li><span>Attempt unauthorized access to systems or data.</span></li>
        <li><span>Circumvent security controls.</span></li>
        <li><span>Violate the rights of others.</span></li>
        <li><span>Upload unlawful or harmful content.</span></li>
        <li><span>Spam or abuse the Services.</span></li>
        <li><span>Interfere with the availability or security of the platform.</span></li>
        <li><span>Reverse engineer or exploit the Services except where permitted by law.</span></li>
      </ul>
      <p>Violation of these rules may result in suspension or termination of your account.</p>

      <h2>
        <span className="num">08</span>Copyright infringement
      </h2>
      <p>
        Kloyya respects the intellectual property rights of others. If you
        believe that material available through our Services infringes your
        copyright, please send a notice including:
      </p>
      <ul>
        <li><span>Your contact information.</span></li>
        <li><span>Identification of the copyrighted work.</span></li>
        <li><span>Identification of the allegedly infringing material.</span></li>
        <li><span>A statement that you believe the use is unauthorized.</span></li>
        <li><span>A statement made in good faith that the information is accurate.</span></li>
      </ul>
      <p>
        Reports may be sent to <a href="mailto:contactsupport@kloyya.com">contactsupport@kloyya.com</a>.
      </p>

      <h2>
        <span className="num">09</span>Responsible disclosure
      </h2>
      <p>
        We welcome responsible security research. If you discover a potential
        security vulnerability, please report it privately rather than publicly
        disclosing it. Please include:
      </p>
      <ul>
        <li><span>Steps to reproduce the issue.</span></li>
        <li><span>Affected systems.</span></li>
        <li><span>Supporting screenshots or evidence where appropriate.</span></li>
      </ul>
      <p>
        Contact <a href="mailto:contactsupport@kloyya.com">contactsupport@kloyya.com</a>.
        We will investigate all legitimate reports promptly.
      </p>

      <h2>
        <span className="num">10</span>Export compliance
      </h2>
      <p>
        You agree to comply with all applicable export control and sanctions
        laws when using Kloyya. You may not use the Services where prohibited
        by applicable law or in violation of export regulations.
      </p>

      <h2>
        <span className="num">11</span>Availability of Services
      </h2>
      <p>
        Kloyya continually improves its platform. Features may be added,
        modified, or discontinued over time to improve security, reliability,
        or functionality. Where practical, we will provide advance notice of
        significant changes.
      </p>

      <h2>
        <span className="num">12</span>Third-party services
      </h2>
      <p>
        Kloyya integrates with third-party platforms and services. Your use of
        those services is governed by their respective terms and privacy
        policies. Kloyya is not responsible for third-party products, services,
        or content.
      </p>

      <h2>
        <span className="num">13</span>Artificial intelligence
      </h2>
      <p>
        Kloyya uses artificial intelligence to assist users with organizing
        information, generating content, summarizing knowledge, automating
        workflows, and supporting decision-making. AI-generated responses:
      </p>
      <ul>
        <li><span>May contain errors or omissions.</span></li>
        <li><span>Should be reviewed before being relied upon.</span></li>
        <li><span>Are provided to assist — not replace — human judgment.</span></li>
      </ul>
      <p>Users remain responsible for decisions made using AI-generated content.</p>

      <h2>
        <span className="num">14</span>Changes to legal documents
      </h2>
      <p>
        We may update our legal documents from time to time to reflect changes
        in our Services, legal requirements, or business practices. When
        significant updates are made, we will revise the effective date and
        provide notice where required. Continued use of the Services after
        changes become effective constitutes acceptance of the updated
        documents.
      </p>

      <h2>
        <span className="num">15</span>Contact information
      </h2>
      <p>
        For questions relating to legal matters, please contact us at{" "}
        <a href="mailto:contactsupport@kloyya.com">contactsupport@kloyya.com</a>.
      </p>

      <h2>
        <span className="num">16</span>Additional policies
      </h2>
      <p>
        These documents are on our roadmap and will be published here as the
        platform moves toward general availability:
      </p>
      <ul>
        {PLANNED_DOCS.map((doc) => (
          <li key={doc.title}>
            <span>
              <strong>{doc.title}</strong> — {doc.desc}
            </span>
          </li>
        ))}
      </ul>
      <p>
        Together with the live documents above, these will govern your
        relationship with Kloyya and explain how we protect your information,
        operate our platform, and provide our Services.
      </p>
      <p>Thank you for choosing Kloyya.</p>
    </LegalShell>
  );
}
