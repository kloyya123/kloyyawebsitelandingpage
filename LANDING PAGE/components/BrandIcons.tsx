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
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path fill="#36C5F0" d="M18 6a4 4 0 1 1 4 4h-4z" />
      <path fill="#36C5F0" d="M14 10a4 4 0 1 1 0 8H10a4 4 0 0 1 0-8z" />
      <path fill="#2EB67D" d="M10 18a4 4 0 1 1-4-4v4z" />
      <path fill="#2EB67D" d="M14 22a4 4 0 1 1 0-8v4a4 4 0 0 1 0 4z" />
      <path fill="#ECB22E" d="M18 26a4 4 0 1 1-4-4h4z" />
      <path fill="#ECB22E" d="M22 22a4 4 0 1 1 0 8h4a4 4 0 0 1-4-4z" />
      <path fill="#E01E5A" d="M26 18a4 4 0 1 1 4 4v-4z" />
      <path fill="#E01E5A" d="M22 14a4 4 0 1 1 0-8v4a4 4 0 0 1 0 4z" />
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
      <rect width="48" height="48" rx="8" fill="#fff" stroke="#E5E7EB" />
      <path
        fill="#000"
        d="M17 13l14-1c1.7-.1 2.1.9 2.1 2v20.3c0 .9-.3 1.4-1.2 1.5l-15.8 1c-1 .1-1.5-.3-1.9-1L11 30V16.2c0-1 .4-1.9 1.4-2l4.6-1.2z"
      />
      <path
        fill="#fff"
        d="M19.8 17.5v13.9l1.9-.1V19.3l7.9 12.1 1.9-.1V15.8l-1.9.1v11.9l-7.9-12z"
      />
    </svg>
  );
}

export function JiraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <rect width="48" height="48" rx="8" fill="#0052CC" />
      <path
        fill="#fff"
        d="M24 12 13 23a3 3 0 0 0 0 4.2L24 38l11-10.8a3 3 0 0 0 0-4.2z"
        opacity=".55"
      />
      <path fill="#fff" d="M24 18l-6 6 6 6 6-6z" />
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
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <rect x="20" y="8" width="24" height="32" rx="2" fill="#0364B8" />
      <rect x="24" y="12" width="16" height="10" fill="#28A8EA" />
      <rect x="24" y="24" width="16" height="10" fill="#0078D4" />
      <rect x="4" y="12" width="20" height="24" rx="2" fill="#0F6CBD" />
      <ellipse cx="14" cy="24" rx="6" ry="7" fill="#fff" />
      <ellipse cx="14" cy="24" rx="3.6" ry="4.5" fill="#0F6CBD" />
    </svg>
  );
}
