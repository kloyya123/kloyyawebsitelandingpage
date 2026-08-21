/** Simplified, brand-colored marks for the tools Kloyya connects to. */
import type { SVGProps } from "react";

export function GmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path fill="#fff" d="M6 12h36v24H6z" />
      <path fill="#4285F4" d="M42 12v24h-6V19.5l-12 9-12-9V36H6V12l18 13.5z" />
      <path fill="#EA4335" d="M6 12l18 13.5L42 12H6z" />
      <path fill="#34A853" d="M6 12v24h6V19.5z" />
      <path fill="#FBBC05" d="M42 12v24h-6V19.5z" />
    </svg>
  );
}

export function SlackIcon(props: SVGProps<SVGSVGElement>) {
  // The pinwheel is eight shapes — four rounded bars and four rounded caps.
  // The previous single-arc-per-colour version collapsed into blobs.
  return (
    <svg viewBox="-1 -1 130 130" {...props}>
      <path
        fill="#E01E5A"
        d="M27.2 80a13.9 13.9 0 0 1-13.9 13.9A13.9 13.9 0 0 1-.6 80a13.9 13.9 0 0 1 13.9-13.9h13.9V80z"
      />
      <path
        fill="#E01E5A"
        d="M34.2 80a13.9 13.9 0 0 1 13.9-13.9A13.9 13.9 0 0 1 62 80v34.8a13.9 13.9 0 0 1-13.9 13.9 13.9 13.9 0 0 1-13.9-13.9V80z"
      />
      <path
        fill="#36C5F0"
        d="M48.1 27.2a13.9 13.9 0 0 1-13.9-13.9A13.9 13.9 0 0 1 48.1-.6 13.9 13.9 0 0 1 62 13.3v13.9H48.1z"
      />
      <path
        fill="#36C5F0"
        d="M48.1 34.2a13.9 13.9 0 0 1 13.9 13.9A13.9 13.9 0 0 1 48.1 62H13.3A13.9 13.9 0 0 1-.6 48.1a13.9 13.9 0 0 1 13.9-13.9h34.8z"
      />
      <path
        fill="#2EB67D"
        d="M100.9 48.1a13.9 13.9 0 0 1 13.9-13.9 13.9 13.9 0 0 1 13.9 13.9A13.9 13.9 0 0 1 114.8 62h-13.9V48.1z"
      />
      <path
        fill="#2EB67D"
        d="M93.9 48.1A13.9 13.9 0 0 1 80 62a13.9 13.9 0 0 1-13.9-13.9V13.3A13.9 13.9 0 0 1 80-.6a13.9 13.9 0 0 1 13.9 13.9v34.8z"
      />
      <path
        fill="#ECB22E"
        d="M80 100.9a13.9 13.9 0 0 1 13.9 13.9A13.9 13.9 0 0 1 80 128.7a13.9 13.9 0 0 1-13.9-13.9v-13.9H80z"
      />
      <path
        fill="#ECB22E"
        d="M80 93.9A13.9 13.9 0 0 1 66.1 80 13.9 13.9 0 0 1 80 66.1h34.8a13.9 13.9 0 0 1 13.9 13.9 13.9 13.9 0 0 1-13.9 13.9H80z"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <circle cx="24" cy="24" r="20" fill="#25D366" />
      <path
        fill="#fff"
        d="M24 12a12 12 0 0 0-10.3 18.1L12 36l6-1.6A12 12 0 1 0 24 12zm0 21.8a9.7 9.7 0 0 1-5-1.4l-.4-.2-3.6.9.9-3.5-.2-.4A9.8 9.8 0 1 1 24 33.8zm5.4-7.3c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.3-.5s0-.4 0-.5c0-.1-.7-1.6-.9-2.2s-.4-.5-.7-.5h-.6c-.2 0-.5.1-.8.4a3.6 3.6 0 0 0-1.1 2.7c0 1.6 1.1 3.1 1.3 3.3s2.2 3.4 5.4 4.7a17.6 17.6 0 0 0 1.8.7 4.3 4.3 0 0 0 2 .1c.6-.1 1.7-.7 2-1.4s.3-1.3.2-1.4-.3-.2-.6-.3z"
      />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <rect width="48" height="48" rx="8" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M14.5 19h5.2v15h-5.2zm2.6-8.3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM22.6 19h5v2.1h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.2 3.4 6.2 7.9V34h-5.2v-6.7c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V34h-5.1z"
      />
    </svg>
  );
}

export function NotionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <rect
        x="3"
        y="3"
        width="42"
        height="42"
        rx="7"
        fill="#fff"
        stroke="#E3E5E8"
        strokeWidth="1.5"
      />
      <path
        fill="#101112"
        d="M15.4 14.2h5.9l8.4 13.2V14.2h4.3v19.6h-5.7l-8.6-13.6v13.6h-4.3z"
      />
    </svg>
  );
}

export function JiraIcon(props: SVGProps<SVGSVGElement>) {
  // One diamond with the centre knocked out via evenodd — the Jira silhouette.
  // The old version stacked a 55%-opacity diamond behind a solid one, which
  // just read as a muddy blue-on-blue smudge.
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <rect width="48" height="48" rx="10" fill="#0052CC" />
      <path
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 9 9.8 23.2a1.2 1.2 0 0 0 0 1.6L24 39l14.2-14.2a1.2 1.2 0 0 0 0-1.6L24 9zm0 10.7L19.7 24 24 28.3 28.3 24 24 19.7z"
      />
    </svg>
  );
}

export function LinearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <rect width="48" height="48" rx="8" fill="#5E6AD2" />
      <path fill="#fff" d="M12 26l10 10c-5.5-.4-10-4.5-10-10z" />
      <path fill="#fff" d="M12 20l16 16c-1.1.3-2.2.5-3.4.5L11.5 24.9c0-1.7.2-3.3.5-4.9z" />
      <path fill="#fff" d="M14.8 14.8 33.2 33.2a15 15 0 0 1-2.6 1.9L13 18a15 15 0 0 1 1.8-3.2z" />
      <path fill="#fff" d="M20 12.3 35.7 28a15 15 0 0 1-1.9 2.6L17.4 13a15 15 0 0 1 2.6-.7z" />
    </svg>
  );
}

export function SalesforceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <rect width="48" height="48" rx="8" fill="#00A1E0" />
      <path
        fill="#fff"
        d="M20.3 17.6a5.4 5.4 0 0 1 9.3 2.1 4.6 4.6 0 0 1 6.4 4.3 4.6 4.6 0 0 1-4.6 4.6H16a4.9 4.9 0 0 1-.7-9.7 5.4 5.4 0 0 1 5-1.3z"
      />
    </svg>
  );
}

export function HubSpotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <rect width="48" height="48" rx="8" fill="#FF7A59" />
      <circle cx="19" cy="24" r="6" fill="none" stroke="#fff" strokeWidth="2.5" />
      <path stroke="#fff" strokeWidth="2.5" d="M25 20l6-6" />
      <circle cx="33" cy="12" r="3" fill="#fff" />
    </svg>
  );
}

export function OutlookIcon(props: SVGProps<SVGSVGElement>) {
  // Rebalanced: the old version sat off-centre in its viewBox (panels ran to
  // x=44 of 48), so it leaned right next to the other marks in the row.
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <rect x="20" y="10" width="24" height="28" rx="2.5" fill="#0364B8" />
      <rect x="23" y="13" width="9" height="8" fill="#28A8EA" />
      <rect x="33" y="13" width="8" height="8" fill="#0078D4" />
      <rect x="23" y="23" width="9" height="8" fill="#14447D" />
      <rect x="33" y="23" width="8" height="8" fill="#0F6CBD" />
      <rect x="4" y="12" width="20" height="24" rx="3" fill="#0A5EA8" />
      <ellipse cx="14" cy="24" rx="6" ry="7" fill="#fff" />
      <ellipse cx="14" cy="24" rx="3.3" ry="4.2" fill="#0A5EA8" />
    </svg>
  );
}

export function GoogleDriveIcon(props: SVGProps<SVGSVGElement>) {
  // Triangle split into three wedges at the centroid — the Drive silhouette
  // reduced to what still reads at 20px.
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path fill="#FFBA00" d="M24 8l9 15.5L24 28l-9-4.5z" />
      <path fill="#0066DA" d="M6 39l9-15.5L24 28v11z" />
      <path fill="#00AC47" d="M42 39l-9-15.5L24 28v11z" />
    </svg>
  );
}
