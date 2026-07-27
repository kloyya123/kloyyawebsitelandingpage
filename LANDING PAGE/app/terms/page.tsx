import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing access to and use of Kloyya's website, applications, APIs, and related services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalShell kicker="Legal · Terms" title="Terms of Service" updated="July 26, 2026">
      <p>
        Welcome to Kloyya (&ldquo;Kloyya,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo;
        or &ldquo;us&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;) govern
        your access to and use of Kloyya&apos;s website, applications, APIs, and
        related services (collectively, the &ldquo;Services&rdquo;).
      </p>
      <p>
        By creating an account, accessing, or using the Services, you agree to be
        bound by these Terms. If you do not agree, you must not use the Services.
      </p>

      <h2>
        <span className="num">01</span>Eligibility
      </h2>
      <p>
        You must be legally capable of entering into a binding agreement in your
        jurisdiction to use Kloyya. If you are using Kloyya on behalf of a
        company, organization, or other entity, you represent that you have the
        authority to bind that entity to these Terms.
      </p>

      <h2>
        <span className="num">02</span>Your account
      </h2>
      <p>You are responsible for:</p>
      <ul>
        <li><span>Providing accurate account information.</span></li>
        <li><span>Maintaining the confidentiality of your login credentials.</span></li>
        <li><span>All activity that occurs under your account.</span></li>
        <li><span>Promptly notifying us of any unauthorized access or suspected security incident.</span></li>
      </ul>
      <p>
        You may not share your account in a way that violates your subscription
        plan or compromises platform security.
      </p>

      <h2>
        <span className="num">03</span>The Services
      </h2>
      <p>Kloyya provides AI-powered productivity tools that help users:</p>
      <ul>
        <li><span>Connect third-party applications.</span></li>
        <li><span>Search across connected information.</span></li>
        <li><span>Organize knowledge.</span></li>
        <li><span>Generate summaries and insights.</span></li>
        <li><span>Draft content.</span></li>
        <li><span>Automate workflows.</span></li>
        <li><span>Support decision-making.</span></li>
      </ul>
      <p>
        The Services will evolve over time, and we may add, modify, or
        discontinue features as needed.
      </p>

      <h2>
        <span className="num">04</span>AI features
      </h2>
      <p>Kloyya uses artificial intelligence to assist users. AI-generated responses:</p>
      <ul>
        <li><span>May contain inaccuracies or incomplete information.</span></li>
        <li><span>Should not be considered legal, financial, medical, or professional advice.</span></li>
        <li><span>Should be reviewed by users before making important decisions.</span></li>
      </ul>
      <p>You remain responsible for how you use AI-generated content.</p>

      <h2>
        <span className="num">05</span>Connected services
      </h2>
      <p>
        You may connect third-party applications to Kloyya. You authorize Kloyya
        to access and process only the information necessary to provide
        requested functionality. Your use of connected services remains subject
        to the terms and policies of those providers.
      </p>

      <h2>
        <span className="num">06</span>Acceptable use
      </h2>
      <p>You agree not to:</p>
      <ul>
        <li><span>Violate any applicable laws or regulations.</span></li>
        <li><span>Attempt unauthorized access to systems or accounts.</span></li>
        <li><span>Circumvent authentication or security measures.</span></li>
        <li><span>Upload malicious software or harmful code.</span></li>
        <li><span>Reverse engineer, copy, or interfere with the Services except where permitted by law.</span></li>
        <li><span>Use the Services to infringe the rights of others.</span></li>
        <li><span>Distribute spam, phishing content, or malware.</span></li>
        <li><span>Use automated systems to abuse or overload the platform.</span></li>
        <li><span>Misrepresent your identity or affiliation.</span></li>
      </ul>
      <p>We may suspend or terminate accounts that violate these Terms.</p>

      <h2>
        <span className="num">07</span>User content
      </h2>
      <p>
        You retain ownership of the content you upload or create using Kloyya.
        By using the Services, you grant Kloyya a limited, non-exclusive license
        to process your content solely for the purpose of operating, maintaining,
        securing, and improving the Services. We do not claim ownership of your
        content.
      </p>

      <h2>
        <span className="num">08</span>Intellectual property
      </h2>
      <p>
        Kloyya, including its software, branding, trademarks, designs,
        documentation, and other intellectual property, is owned by Kloyya or
        its licensors and is protected by applicable intellectual property laws.
        Except as expressly permitted, you may not copy, distribute, modify, or
        create derivative works from the Services.
      </p>

      <h2>
        <span className="num">09</span>Subscription and billing
      </h2>
      <p>Some features require a paid subscription. If you purchase a subscription:</p>
      <ul>
        <li><span>Fees are billed according to your selected plan.</span></li>
        <li><span>Subscription fees are due in advance.</span></li>
        <li><span>Unless otherwise stated, subscriptions automatically renew until canceled.</span></li>
        <li><span>Taxes may apply depending on your location.</span></li>
      </ul>
      <p>
        Failure to pay applicable fees may result in suspension or termination of
        access to paid features.
      </p>

      <h2>
        <span className="num">10</span>Cancellation
      </h2>
      <p>
        You may cancel your subscription at any time. Cancellation will take
        effect at the end of the current billing period unless otherwise stated.
        No refunds are provided except where required by applicable law or
        expressly stated by Kloyya.
      </p>

      <h2>
        <span className="num">11</span>Availability
      </h2>
      <p>
        We strive to keep Kloyya available and reliable, but we do not guarantee
        uninterrupted or error-free operation. Scheduled maintenance, upgrades,
        or unforeseen events may temporarily affect availability.
      </p>

      <h2>
        <span className="num">12</span>Security
      </h2>
      <p>
        We implement commercially reasonable technical and organizational
        measures to protect user data, including secure authentication,
        encryption, access controls, and continuous monitoring. No online
        service can guarantee absolute security. You are responsible for
        maintaining the security of your account credentials.
      </p>

      <h2>
        <span className="num">13</span>Third-party services
      </h2>
      <p>Kloyya integrates with services provided by third parties. We are not responsible for:</p>
      <ul>
        <li><span>Third-party availability.</span></li>
        <li><span>Third-party content.</span></li>
        <li><span>Third-party security practices.</span></li>
        <li><span>Changes made by third-party providers.</span></li>
      </ul>
      <p>
        Your relationship with those providers is governed by their own terms
        and policies.
      </p>

      <h2>
        <span className="num">14</span>Disclaimer of warranties
      </h2>
      <p>
        The Services are provided &ldquo;as is&rdquo; and &ldquo;as
        available.&rdquo; To the fullest extent permitted by law, Kloyya
        disclaims all warranties, express or implied, including warranties of
        merchantability, fitness for a particular purpose, non-infringement, and
        uninterrupted availability.
      </p>

      <h2>
        <span className="num">15</span>Limitation of liability
      </h2>
      <p>
        To the fullest extent permitted by law, Kloyya and its affiliates,
        directors, employees, and partners shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from or
        relating to your use of the Services.
      </p>
      <p>
        Our total liability for any claim shall not exceed the amount you paid
        to Kloyya during the twelve (12) months preceding the event giving rise
        to the claim, or US$100 if you have not paid for the Services, whichever
        is greater.
      </p>

      <h2>
        <span className="num">16</span>Indemnification
      </h2>
      <p>
        You agree to defend, indemnify, and hold harmless Kloyya, its officers,
        employees, affiliates, and partners from any claims, damages, losses,
        liabilities, costs, or expenses arising from:
      </p>
      <ul>
        <li><span>Your use of the Services.</span></li>
        <li><span>Your violation of these Terms.</span></li>
        <li><span>Your infringement of another person&apos;s rights.</span></li>
        <li><span>Your violation of applicable law.</span></li>
      </ul>

      <h2>
        <span className="num">17</span>Suspension and termination
      </h2>
      <p>We may suspend or terminate your access if:</p>
      <ul>
        <li><span>You violate these Terms.</span></li>
        <li><span>Your use presents a security risk.</span></li>
        <li><span>We are required to do so by law.</span></li>
        <li><span>You fail to pay applicable fees.</span></li>
        <li><span>Your activities threaten the integrity or availability of the Services.</span></li>
      </ul>
      <p>Upon termination, your right to use the Services ends immediately.</p>

      <h2>
        <span className="num">18</span>Changes to the Services
      </h2>
      <p>
        We may modify, improve, replace, or discontinue features of the Services
        at any time. Where practical, we will provide advance notice of material
        changes.
      </p>

      <h2>
        <span className="num">19</span>Changes to these Terms
      </h2>
      <p>
        We may update these Terms from time to time. If material changes are
        made, we will notify users through the Services or other appropriate
        communication channels. Continued use of the Services after changes
        become effective constitutes acceptance of the revised Terms.
      </p>

      <h2>
        <span className="num">20</span>Governing law
      </h2>
      <p>
        These Terms are governed by the laws applicable to Kloyya&apos;s
        operating entity, without regard to conflict of law principles. Any
        disputes shall be resolved in the courts having jurisdiction over
        Kloyya&apos;s principal place of business, unless otherwise required by
        applicable law.
      </p>

      <h2>
        <span className="num">21</span>Contact
      </h2>
      <p>If you have questions regarding these Terms, please contact us.</p>
      <p>
        Kloyya
        <br />
        Email: <a href="mailto:contactsupport@kloyya.com">contactsupport@kloyya.com</a>
        <br />
        Website: <a href="https://www.kloyya.com">https://www.kloyya.com</a>
      </p>

      <h2>
        <span className="num">22</span>Summary
      </h2>
      <p>
        By using Kloyya, you agree to use the Services responsibly, respect the
        rights of others, safeguard your account, and comply with these Terms.
        Kloyya is committed to providing a secure, reliable, and continuously
        improving AI workspace while protecting user data and maintaining
        transparency.
      </p>
    </LegalShell>
  );
}
