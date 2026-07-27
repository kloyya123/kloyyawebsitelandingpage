import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Kloyya collects, uses, protects, and discloses your information across our website, applications, and services.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalShell kicker="Legal · Privacy" title="Privacy Policy" updated="July 26, 2026">
      <p>
        Welcome to Kloyya (&ldquo;Kloyya,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo;
        or &ldquo;us&rdquo;). Kloyya is an AI-powered workspace designed to help
        individuals, teams, and businesses organize information, connect their
        existing tools, automate workflows, and make better decisions.
      </p>
      <p>
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, protect, and disclose your information when you use our
        website, applications, and services (collectively, the
        &ldquo;Services&rdquo;).
      </p>
      <p>
        By using Kloyya, you agree to the collection and use of information as
        described in this Privacy Policy.
      </p>

      <h2>
        <span className="num">01</span>Information we collect
      </h2>
      <p>We collect information in the following categories.</p>
      <p>
        <strong>Account information.</strong> When you create an account, we may
        collect:
      </p>
      <ul>
        <li><span>Name</span></li>
        <li><span>Email address</span></li>
        <li><span>Profile picture</span></li>
        <li><span>Password (encrypted through Supabase Authentication)</span></li>
        <li><span>Company or organization name</span></li>
        <li><span>Workspace information</span></li>
        <li><span>Subscription details</span></li>
      </ul>

      <p>
        <strong>Connected services.</strong> When you connect third-party
        applications, Kloyya may access only the permissions you authorize.
        Examples include:
      </p>
      <ul>
        <li><span>Google Workspace</span></li>
        <li><span>Microsoft 365</span></li>
        <li><span>Notion</span></li>
        <li><span>Slack</span></li>
        <li><span>GitHub</span></li>
        <li><span>Jira</span></li>
        <li><span>Linear</span></li>
        <li><span>Dropbox</span></li>
        <li><span>Google Drive</span></li>
        <li><span>OneDrive</span></li>
        <li><span>Zoom</span></li>
        <li><span>HubSpot</span></li>
        <li><span>Salesforce</span></li>
        <li><span>Other supported integrations</span></li>
      </ul>
      <p>We only access information necessary to provide requested features.</p>

      <p>
        <strong>Usage information.</strong> We automatically collect information
        such as:
      </p>
      <ul>
        <li><span>Device type</span></li>
        <li><span>Browser</span></li>
        <li><span>Operating system</span></li>
        <li><span>IP address</span></li>
        <li><span>Session information</span></li>
        <li><span>Pages visited</span></li>
        <li><span>Feature usage</span></li>
        <li><span>Search activity</span></li>
        <li><span>AI interactions</span></li>
        <li><span>Performance metrics</span></li>
        <li><span>Error reports</span></li>
      </ul>

      <p>
        <strong>Uploaded content.</strong> You may choose to upload documents,
        PDFs, images, notes, presentations, spreadsheets, or other files.
        Uploaded content remains under your control.
      </p>

      <p>
        <strong>Payment information.</strong> If you purchase a subscription,
        payment information is processed by our payment providers. Kloyya does
        not store complete payment card information.
      </p>

      <h2>
        <span className="num">02</span>How we use your information
      </h2>
      <p>We use your information to:</p>
      <ul>
        <li><span>Provide our Services</span></li>
        <li><span>Authenticate users</span></li>
        <li><span>Manage workspaces</span></li>
        <li><span>Connect third-party services</span></li>
        <li><span>Deliver AI-powered responses</span></li>
        <li><span>Improve search accuracy</span></li>
        <li><span>Generate summaries</span></li>
        <li><span>Automate workflows</span></li>
        <li><span>Detect fraud</span></li>
        <li><span>Prevent abuse</span></li>
        <li><span>Improve product performance</span></li>
        <li><span>Respond to support requests</span></li>
        <li><span>Communicate important updates</span></li>
        <li><span>Comply with legal obligations</span></li>
      </ul>

      <h2>
        <span className="num">03</span>AI processing
      </h2>
      <p>Kloyya uses artificial intelligence to assist users. AI may process:</p>
      <ul>
        <li><span>Documents</span></li>
        <li><span>Emails</span></li>
        <li><span>Notes</span></li>
        <li><span>Tasks</span></li>
        <li><span>Calendar events</span></li>
        <li><span>Connected application data</span></li>
        <li><span>User prompts</span></li>
      </ul>
      <p>
        AI processing is performed only to provide requested features. We do not
        use your private workspace data to train public AI models unless you
        explicitly opt in.
      </p>

      <h2>
        <span className="num">04</span>Third-party services
      </h2>
      <p>Kloyya works with trusted infrastructure providers, including:</p>
      <ul>
        <li><span>Supabase</span></li>
        <li><span>Vercel</span></li>
        <li><span>Resend</span></li>
        <li><span>AI model providers</span></li>
        <li><span>Cloud infrastructure providers</span></li>
        <li><span>Analytics providers</span></li>
        <li><span>Authentication providers</span></li>
      </ul>
      <p>Each provider processes data according to its own privacy practices.</p>

      <h2>
        <span className="num">05</span>Cookies
      </h2>
      <p>We use cookies and similar technologies to:</p>
      <ul>
        <li><span>Keep you signed in</span></li>
        <li><span>Remember preferences</span></li>
        <li><span>Improve performance</span></li>
        <li><span>Protect accounts</span></li>
        <li><span>Measure product usage</span></li>
        <li><span>Enhance security</span></li>
      </ul>
      <p>You may control cookies through your browser settings.</p>

      <h2>
        <span className="num">06</span>Data security
      </h2>
      <p>
        Protecting your information is one of our highest priorities. We use
        industry-standard security measures including:
      </p>
      <ul>
        <li><span>Encryption in transit</span></li>
        <li><span>Encryption at rest</span></li>
        <li><span>Secure authentication</span></li>
        <li><span>Role-Based Access Control</span></li>
        <li><span>Row Level Security (RLS)</span></li>
        <li><span>Secure cloud infrastructure</span></li>
        <li><span>Continuous monitoring</span></li>
        <li><span>Audit logging</span></li>
        <li><span>Secure backups</span></li>
        <li><span>Access controls</span></li>
        <li><span>Environment secret management</span></li>
      </ul>
      <p>
        While no system is completely secure, we continuously improve our
        security practices.
      </p>

      <h2>
        <span className="num">07</span>Data sharing
      </h2>
      <p>We do not sell your personal information. We may share information only:</p>
      <ul>
        <li><span>With your permission</span></li>
        <li><span>To provide requested services</span></li>
        <li><span>With trusted service providers</span></li>
        <li><span>During business transfers</span></li>
        <li><span>When legally required</span></li>
        <li><span>To protect users and our platform</span></li>
      </ul>

      <h2>
        <span className="num">08</span>Data retention
      </h2>
      <p>We retain information only as long as necessary to:</p>
      <ul>
        <li><span>Provide our Services</span></li>
        <li><span>Meet legal obligations</span></li>
        <li><span>Resolve disputes</span></li>
        <li><span>Enforce agreements</span></li>
      </ul>
      <p>You may request deletion of your account at any time.</p>

      <h2>
        <span className="num">09</span>Your rights
      </h2>
      <p>Depending on your location, you may have rights to:</p>
      <ul>
        <li><span>Access your data</span></li>
        <li><span>Correct inaccurate information</span></li>
        <li><span>Delete your information</span></li>
        <li><span>Export your data</span></li>
        <li><span>Restrict processing</span></li>
        <li><span>Withdraw consent</span></li>
        <li><span>Object to processing</span></li>
      </ul>
      <p>Requests may be submitted through our support channels.</p>

      <h2>
        <span className="num">10</span>Children&apos;s privacy
      </h2>
      <p>
        Kloyya is not intended for children under the age required by applicable
        law. We do not knowingly collect personal information from children.
      </p>

      <h2>
        <span className="num">11</span>International data transfers
      </h2>
      <p>
        Your information may be processed in countries other than your own.
        Where required, we use appropriate safeguards to protect transferred
        information.
      </p>

      <h2>
        <span className="num">12</span>Data breach response
      </h2>
      <p>If a security incident affects your information, we will:</p>
      <ul>
        <li><span>Investigate promptly</span></li>
        <li><span>Contain the incident</span></li>
        <li><span>Notify affected users where required</span></li>
        <li><span>Cooperate with relevant authorities</span></li>
        <li><span>Implement corrective measures</span></li>
      </ul>

      <h2>
        <span className="num">13</span>Changes to this Privacy Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes
        will be communicated through our website or application. The latest
        version will always include the effective date.
      </p>

      <h2>
        <span className="num">14</span>Contact us
      </h2>
      <p>If you have questions regarding this Privacy Policy, please contact us.</p>
      <p>
        Kloyya
        <br />
        Email: <a href="mailto:contactsupport@kloyya.com">contactsupport@kloyya.com</a>
        <br />
        Website: <a href="https://www.kloyya.com">https://www.kloyya.com</a>
      </p>

      <h2>
        <span className="num">15</span>Summary
      </h2>
      <ul>
        <li><span>We only collect information necessary to provide Kloyya.</span></li>
        <li><span>You control your connected accounts and uploaded content.</span></li>
        <li><span>We do not sell your personal information.</span></li>
        <li><span>Your data is protected using modern security practices.</span></li>
        <li><span>You can access, update, export, or delete your information, subject to applicable law.</span></li>
      </ul>
    </LegalShell>
  );
}
