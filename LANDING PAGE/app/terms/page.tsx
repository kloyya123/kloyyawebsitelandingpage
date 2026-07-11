import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The terms for using the Kloyya website and joining the waitlist while the product is in active build.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalShell kicker="Legal · Terms" title="Terms of use" updated="July 8, 2026">
      <p>
        These terms cover your use of the Kloyya website and waitlist while the
        product is in active build. They&apos;re intentionally short. By joining
        the waitlist you agree to them. If you don&apos;t, please don&apos;t
        submit your email.
      </p>

      <h2>
        <span className="num">01</span>What Kloyya is today
      </h2>
      <p>
        Kloyya is an autonomous AI Chief of Staff currently under development.
        This site describes what we&apos;re building and lets you join a waitlist.
        There is no live product to access yet, and nothing here is a commitment
        to ship a specific feature by a specific date.
      </p>

      <h2>
        <span className="num">02</span>The waitlist
      </h2>
      <ul>
        <li><span>Joining is free and creates no obligation for you or for us.</span></li>
        <li><span>A place on the waitlist is not a guarantee of access, pricing, or a launch date.</span></li>
        <li><span>We may open access in cohorts and can&apos;t promise a specific position or timing.</span></li>
        <li><span>You can leave at any time — reply &ldquo;unsubscribe&rdquo; to any email we send, or email us.</span></li>
      </ul>

      <h2>
        <span className="num">03</span>Using the site fairly
      </h2>
      <p>Please don&apos;t:</p>
      <ul>
        <li><span>Submit an email address that isn&apos;t yours or that you&apos;re not allowed to use.</span></li>
        <li><span>Attempt to disrupt, probe, or overload the site or its infrastructure.</span></li>
        <li><span>Scrape, resell, or misrepresent the content here.</span></li>
      </ul>

      <h2>
        <span className="num">04</span>Our content
      </h2>
      <p>
        The Kloyya name, logo, copy, and design are ours. You&apos;re welcome to
        reference and link to the site; you may not pass our materials off as your
        own or use our brand in a way that implies endorsement without permission.
      </p>

      <h2>
        <span className="num">05</span>No warranties
      </h2>
      <p>
        The site is provided &ldquo;as is&rdquo; during development. We work to
        keep it accurate and available, but we don&apos;t warrant that it will be
        uninterrupted, error-free, or that any described capability will ship as
        shown.
      </p>

      <h2>
        <span className="num">06</span>Limitation of liability
      </h2>
      <p>
        To the extent permitted by law, Kloyya isn&apos;t liable for indirect or
        consequential losses arising from your use of this pre-release website.
        Nothing in these terms limits liability that can&apos;t be limited by law.
      </p>

      <h2>
        <span className="num">07</span>Changes
      </h2>
      <p>
        We&apos;ll update these terms as the product moves toward launch, revising
        the effective date above. Continued use of the site after a change means
        you accept the updated terms.
      </p>

      <h2>
        <span className="num">08</span>Contact
      </h2>
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:hello@kloyya.com">hello@kloyya.com</a>.
      </p>
    </LegalShell>
  );
}
