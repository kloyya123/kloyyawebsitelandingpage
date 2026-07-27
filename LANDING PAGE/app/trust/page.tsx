import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Trust, Security & Compliance",
  description:
    "How Kloyya secures data, handles AI responsibly, and builds trust into every layer of the platform.",
  alternates: {
    canonical: "/trust",
  },
};

export default function TrustPage() {
  return (
    <LegalShell kicker="Legal · Trust" title="Trust, Security & Compliance" updated="July 26, 2026">
      <p>
        At Kloyya, protecting your information is fundamental to everything we
        build. We design our platform with security, privacy, and reliability
        at its core so you can confidently connect your work, collaborate with
        your team, and use AI responsibly.
      </p>
      <p>
        This page explains how we secure your data and the principles that
        guide our platform.
      </p>

      <h2>
        <span className="num">01</span>Our security principles
      </h2>
      <p>Everything we build follows these principles:</p>
      <ul>
        <li><span>Security by Design</span></li>
        <li><span>Privacy by Default</span></li>
        <li><span>Least Privilege Access</span></li>
        <li><span>Customer Data Ownership</span></li>
        <li><span>Transparent AI</span></li>
        <li><span>Continuous Improvement</span></li>
      </ul>
      <p>
        These principles influence every feature, integration, and
        infrastructure decision we make.
      </p>

      <h2>
        <span className="num">02</span>Infrastructure security
      </h2>
      <p>
        Kloyya is built on modern cloud infrastructure designed for reliability
        and security. Our platform uses trusted providers including:
      </p>
      <ul>
        <li><span>Supabase</span></li>
        <li><span>Vercel</span></li>
        <li><span>Resend</span></li>
        <li><span>Industry-leading AI providers</span></li>
      </ul>
      <p>
        Infrastructure is monitored continuously and protected using multiple
        layers of security.
      </p>

      <h2>
        <span className="num">03</span>Data encryption
      </h2>
      <p>We protect customer data using encryption throughout its lifecycle.</p>
      <p>
        <strong>Data in transit.</strong> All communication between your device
        and Kloyya is encrypted using HTTPS/TLS.
      </p>
      <p>
        <strong>Data at rest.</strong> Stored information is encrypted using
        industry-standard encryption technologies provided by our
        infrastructure partners.
      </p>

      <h2>
        <span className="num">04</span>Authentication &amp; access control
      </h2>
      <p>Kloyya protects user accounts using secure authentication systems. Security features include:</p>
      <ul>
        <li><span>Secure authentication</span></li>
        <li><span>Email verification</span></li>
        <li><span>Session management</span></li>
        <li><span>Access controls</span></li>
        <li><span>Role-based permissions</span></li>
        <li><span>Workspace isolation</span></li>
        <li><span>Secure password handling</span></li>
      </ul>
      <p>We never store passwords in plain text.</p>

      <h2>
        <span className="num">05</span>Workspace isolation
      </h2>
      <p>
        Every workspace is logically isolated from every other workspace.
        Users can only access information they are authorized to view. Our
        database policies enforce access controls to prevent unauthorized
        access across organizations and workspaces.
      </p>

      <h2>
        <span className="num">06</span>AI security
      </h2>
      <p>AI should help you work smarter while respecting your privacy. Kloyya is designed so that:</p>
      <ul>
        <li><span>AI only processes information you authorize.</span></li>
        <li><span>Connected data remains under your control.</span></li>
        <li><span>AI responses are based on available context and connected sources.</span></li>
        <li><span>AI-generated content should be reviewed before making important decisions.</span></li>
        <li><span>Private workspace information is not used to train public AI models unless you explicitly opt in.</span></li>
      </ul>

      <h2>
        <span className="num">07</span>Connected applications
      </h2>
      <p>
        Kloyya integrates with third-party applications to help you work from
        one place. We request only the permissions required to provide the
        features you enable. You can disconnect integrations at any time.
      </p>

      <h2>
        <span className="num">08</span>Monitoring &amp; threat detection
      </h2>
      <p>To protect our platform, we monitor for:</p>
      <ul>
        <li><span>Suspicious logins</span></li>
        <li><span>Unauthorized access attempts</span></li>
        <li><span>Abuse and spam</span></li>
        <li><span>Service interruptions</span></li>
        <li><span>Security anomalies</span></li>
        <li><span>Infrastructure health</span></li>
      </ul>
      <p>
        Monitoring helps us detect and respond to potential security incidents
        quickly.
      </p>

      <h2>
        <span className="num">09</span>Secure development
      </h2>
      <p>Security is built into our development process. We regularly:</p>
      <ul>
        <li><span>Review code</span></li>
        <li><span>Test new features</span></li>
        <li><span>Apply security updates</span></li>
        <li><span>Monitor dependencies</span></li>
        <li><span>Validate infrastructure changes</span></li>
        <li><span>Review access permissions</span></li>
        <li><span>Improve platform resilience</span></li>
      </ul>
      <p>Security is considered throughout development — not only before release.</p>

      <h2>
        <span className="num">10</span>Responsible AI
      </h2>
      <p>Kloyya is committed to responsible AI. Our goals include:</p>
      <ul>
        <li><span>Transparent AI assistance</span></li>
        <li><span>Reliable information retrieval</span></li>
        <li><span>User control over connected data</span></li>
        <li><span>Clear attribution where possible</span></li>
        <li><span>Continuous improvements to accuracy and safety</span></li>
      </ul>
      <p>AI is designed to assist users, not replace professional judgment.</p>

      <h2>
        <span className="num">11</span>Data ownership
      </h2>
      <p>
        Your data belongs to you. You retain ownership of the content you
        upload, create, or connect through Kloyya. We process your data only to
        provide the Services described in our Privacy Policy and Terms of
        Service. We do not sell customer data.
      </p>

      <h2>
        <span className="num">12</span>Privacy
      </h2>
      <p>
        Privacy is a core part of our platform. We collect only the information
        necessary to operate and improve Kloyya. You remain in control of your
        connected accounts and may disconnect them or request deletion of your
        account in accordance with our Privacy Policy.
      </p>

      <h2>
        <span className="num">13</span>Incident response
      </h2>
      <p>If we detect a security incident, our response includes:</p>
      <ul>
        <li><span>Investigation</span></li>
        <li><span>Containment</span></li>
        <li><span>Impact assessment</span></li>
        <li><span>Recovery</span></li>
        <li><span>User notification where required by applicable law</span></li>
        <li><span>Continuous improvements to prevent similar incidents</span></li>
      </ul>

      <h2>
        <span className="num">14</span>Business continuity
      </h2>
      <p>We are committed to maintaining reliable service. Our operational practices include:</p>
      <ul>
        <li><span>Secure cloud infrastructure</span></li>
        <li><span>Backup and recovery processes</span></li>
        <li><span>Service monitoring</span></li>
        <li><span>Planned maintenance procedures</span></li>
        <li><span>Ongoing platform improvements</span></li>
      </ul>

      <h2>
        <span className="num">15</span>Compliance
      </h2>
      <p>
        Kloyya is designed with privacy and security best practices in mind. As
        the platform grows, we will continue investing in compliance programs
        and recognized security standards appropriate for our customers and
        business. Our compliance efforts focus on:
      </p>
      <ul>
        <li><span>Data protection</span></li>
        <li><span>Privacy regulations</span></li>
        <li><span>Secure software development</span></li>
        <li><span>Risk management</span></li>
        <li><span>Access controls</span></li>
        <li><span>Auditability</span></li>
        <li><span>Responsible AI practices</span></li>
      </ul>
      <p>As certifications become available, they will be listed here.</p>

      <h2>
        <span className="num">16</span>Reporting security issues
      </h2>
      <p>
        If you believe you have discovered a security vulnerability, we
        encourage responsible disclosure. Please contact us with sufficient
        information to reproduce the issue.
      </p>
      <p>
        Email: <a href="mailto:contactsupport@kloyya.com">contactsupport@kloyya.com</a>
      </p>
      <p>
        We appreciate responsible security research and will investigate
        reported issues promptly.
      </p>

      <h2>
        <span className="num">17</span>Contact
      </h2>
      <p>If you have questions about security, privacy, or compliance, please contact us.</p>
      <p>
        Email: <a href="mailto:contactsupport@kloyya.com">contactsupport@kloyya.com</a>
      </p>
      <p>Thank you for trusting Kloyya with your work.</p>
    </LegalShell>
  );
}
