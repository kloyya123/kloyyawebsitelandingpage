/**
 * Internal signup notification — forwarded ONLY to the hardcoded operator
 * allowlist (see NOTIFY_ADDRESSES in app/actions.ts). Plain, scannable, and
 * never sent to the signer. `tools`/`headcount` are present on enrichment.
 */
export function signupNotifyHtml(input: {
  email: string;
  tools?: string[];
  headcount?: string | null;
  stage: "joined" | "enriched";
}): string {
  const { email, tools, headcount, stage } = input;
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#545A67;font-size:13px;vertical-align:top;">${label}</td><td style="padding:4px 0;font-size:13px;color:#15171C;">${value}</td></tr>`;
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:24px 16px;background:#EAE6DC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#15171C;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;margin:0 auto;background:#F3F0E8;border:1px solid rgba(21,23,28,0.12);border-radius:12px;padding:24px;">
    <tr><td>
      <div style="font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#A56613;margin-bottom:14px;">
        Waitlist · ${stage === "joined" ? "New signup" : "Profile enriched"}
      </div>
      <table role="presentation" cellpadding="0" cellspacing="0">
        ${row("Email", email)}
        ${tools && tools.length ? row("Tools", tools.join(", ")) : ""}
        ${headcount ? row("Headcount", headcount) : ""}
        ${row("At", new Date().toISOString())}
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/**
 * Welcome email — skinned to the "briefing" identity (ink + paper + mono),
 * not the generic SaaS template. Inline styles only, for mail-client safety.
 */
export function welcomeEmailHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kloyya — Waitlist confirmed</title>
</head>
<body style="margin:0;padding:32px 16px;background-color:#EAE6DC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#15171C;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;">
    <tr>
      <td style="padding:0 4px 20px;">
        <span style="font-size:18px;font-weight:700;letter-spacing:-0.03em;">kloyya</span>
        <span style="float:right;font-family:'SFMono-Regular',ui-monospace,Menlo,monospace;font-size:11px;color:#545A67;letter-spacing:0.08em;">DOSSIER · WL-01</span>
      </td>
    </tr>
    <tr>
      <td style="background:#F3F0E8;border:1px solid rgba(21,23,28,0.12);border-radius:14px;padding:32px;">
        <div style="font-family:'SFMono-Regular',ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#A56613;margin-bottom:18px;">
          Place secured
        </div>
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.2;letter-spacing:-0.02em;margin-bottom:20px;">
          You're on the Kloyya waitlist.
        </div>
        <p style="font-size:15px;line-height:1.65;color:#33383F;margin:0 0 16px;">
          Thanks for joining. We're building the intelligence layer behind executive decisions — an AI Chief of Staff that reads across your tools, connects the threads, and prepares the call before you ask.
        </p>
        <p style="font-size:15px;line-height:1.65;color:#33383F;margin:0 0 16px;">
          We don't do fake progress bars. As modules move — from active sprint, to QA, to shipped — you'll hear it straight from the ledger, along with your private beta key when your cohort opens.
        </p>
        <div style="border-top:1px solid rgba(21,23,28,0.12);margin-top:24px;padding-top:16px;font-family:'SFMono-Regular',ui-monospace,Menlo,monospace;font-size:12px;color:#545A67;">
          Stop managing notifications. Start executing strategy.
        </div>
        <p style="margin:16px 0 0;font-size:12px;line-height:1.6;color:#8C93A1;">
          Changed your mind? Just reply with &ldquo;unsubscribe&rdquo; or email
          <a href="mailto:contactsupport@kloyya.com" style="color:#1D4FBF;">contactsupport@kloyya.com</a>
          and we&apos;ll remove you completely.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:18px 4px 0;font-family:'SFMono-Regular',ui-monospace,Menlo,monospace;font-size:11px;color:#545A67;">
        © ${new Date().getFullYear()} Kloyya. You're receiving this because you joined the waitlist.
      </td>
    </tr>
  </table>
</body>
</html>`;
}
