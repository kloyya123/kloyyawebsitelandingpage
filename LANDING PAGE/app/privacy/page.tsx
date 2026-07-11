import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Kloyya handles the information you share while joining the waitlist. Plain language, no dark patterns.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalShell kicker="Legal · Privacy" title="Privacy" updated="July 8, 2026">
      <p>
        This notice explains what we collect while Kloyya is in active build, why
        we collect it, and the control you keep over it. We&apos;ve written it in
        plain language on purpose. If anything here is unclear, email{" "}
        <a href="mailto:privacy@kloyya.com">privacy@kloyya.com</a> and a person
        will answer.
      </p>

      <h2>
        <span className="num">01</span>What we collect
      </h2>
      <p>
        Today Kloyya is a waitlist, not a live product. We only collect what you
        hand us on this page:
      </p>
      <ul>
        <li>
          <span>
            <strong>Your email address</strong> — required to hold your place and
            send you build updates.
          </span>
        </li>
        <li>
          <span>
            <strong>Optional context</strong> — if you choose to answer, the tools
            that fracture your focus and your team size. These are optional and
            you can skip them.
          </span>
        </li>
        <li>
          <span>
            <strong>Basic delivery metadata</strong> — standard email
            deliverability signals (whether a message was delivered or bounced),
            handled by our email provider.
          </span>
        </li>
      </ul>
      <p>
        We do <strong>not</strong> connect to your Slack, email, or other tools at
        this stage. Nothing is read from your accounts. When integrations launch,
        they will run through scoped permissions you grant explicitly and can
        revoke at any time — and this notice will be updated first.
      </p>

      <h2>
        <span className="num">02</span>Why we collect it
      </h2>
      <ul>
        <li><span>To reserve your waitlist place and prevent duplicate entries.</span></li>
        <li><span>To send you genuine development updates and, eventually, a private beta key.</span></li>
        <li><span>To understand, in aggregate, which workflows to prioritize building.</span></li>
      </ul>
      <p>
        We never invent urgency, sell your data, or use it for advertising.
      </p>

      <h2>
        <span className="num">03</span>Who processes it
      </h2>
      <p>
        We keep our stack small and name it openly. Your information is stored and
        processed by:
      </p>
      <ul>
        <li>
          <span>
            <strong>Supabase</strong> — our database, where the waitlist record
            lives, protected by row-level security.
          </span>
        </li>
        <li>
          <span>
            <strong>Resend</strong> — our transactional email provider, used to
            send the confirmation and future updates.
          </span>
        </li>
      </ul>
      <p>
        These providers act on our instructions as processors. We don&apos;t share
        your information with anyone else.
      </p>

      <h2>
        <span className="num">04</span>How long we keep it
      </h2>
      <p>
        We keep your waitlist record until the earlier of: you ask us to delete
        it, or you tell us you&apos;re no longer interested. If Kloyya is
        discontinued before launch, we delete the waitlist entirely.
      </p>

      <h2>
        <span className="num">05</span>Your rights
      </h2>
      <p>
        You can ask us to show you what we hold, correct it, or delete it — no
        hoops. Email <a href="mailto:privacy@kloyya.com">privacy@kloyya.com</a> and
        we&apos;ll action it promptly. Every email we send also offers an easy
        way out — reply with &ldquo;unsubscribe&rdquo; and we remove you
        completely.
      </p>

      <h2>
        <span className="num">06</span>Cookies
      </h2>
      <p>
        This site runs without advertising or tracking cookies. We don&apos;t
        build a profile of your browsing.
      </p>

      <h2>
        <span className="num">07</span>Changes
      </h2>
      <p>
        As the product takes shape, this notice will change — especially when
        integrations arrive. We&apos;ll revise the effective date above and, for
        material changes, tell waitlist members by email before they take effect.
      </p>

      <h2>
        <span className="num">08</span>Contact
      </h2>
      <p>
        Questions about privacy go to{" "}
        <a href="mailto:privacy@kloyya.com">privacy@kloyya.com</a>. Anything else,{" "}
        <a href="mailto:hello@kloyya.com">hello@kloyya.com</a>.
      </p>
    </LegalShell>
  );
}
