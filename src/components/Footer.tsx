import { Mail, Phone, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { SITE, SHOW } from "../lib/site";

const SocialIcon = ({ label, href, children }: { label: string; href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-muted text-gold transition-colors hover:bg-gold hover:text-black"
  >
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">{children}</svg>
  </a>
);

const icons: Record<keyof typeof SITE.socials, { label: string; node: ReactNode }> = {
  linkedin: {
    label: "LinkedIn",
    node: <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4V21H3V9.75zm6.75 0h3.8v1.54h.05c.53-1 1.82-2.06 3.75-2.06 4 0 4.75 2.63 4.75 6.05V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.69V21h-4V9.75z" />,
  },
  twitter: {
    label: "X (Twitter)",
    node: <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
  },
  instagram: {
    label: "Instagram",
    node: (
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
      </g>
    ),
  },
  facebook: {
    label: "Facebook",
    node: <path fill="currentColor" d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />,
  },
  tiktok: {
    label: "TikTok",
    node: <path fill="currentColor" d="M16.6 5.82A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 11-2.59-2.59c.27 0 .53.04.77.12V9.77a5.7 5.7 0 00-.77-.05 5.68 5.68 0 105.68 5.68V9.14a7.35 7.35 0 004.3 1.38V7.43a4.3 4.3 0 01-3.23-1.61z" />,
  },
};

const colTitle = "mb-4 text-sm font-semibold uppercase tracking-widest text-gold-muted";
const link = "inline-flex min-h-[32px] items-center text-sm text-gold hover:underline";

export function Footer() {
  const socials = (Object.keys(SITE.socials) as (keyof typeof SITE.socials)[]).filter((k) => SITE.socials[k]);

  return (
    <footer className="border-t border-gold-muted/40 bg-black px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/logo.webp" alt="" width="88" height="80" loading="lazy" className="mb-3 h-20 w-auto" />
          <p className="font-heading text-lg font-bold text-white">
            <span className="gold-text">AR</span> Corporation
          </p>
          <p className="mt-3 text-sm text-muted">Good Grip, Profesional, Trusted</p>
          {socials.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((k) => (
                <SocialIcon key={k} label={icons[k].label} href={SITE.socials[k]}>
                  {icons[k].node}
                </SocialIcon>
              ))}
            </div>
          )}
        </div>

        <nav aria-label="Services">
          <h2 className={colTitle}>Services</h2>
          <ul className="space-y-1">
            {["Integrated HR Management", "Real-time Field Monitoring", "Analytics & Reporting", "Team Collaboration"].map((l) => (
              <li key={l}><a className={link} href="#services">{l}</a></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className={colTitle}>Company</h2>
          <ul className="space-y-1">
            {[["Process", "#process"], ["Success Stories", "#portfolio"], ["Pricing", "#pricing"], ["FAQ", "#faq"]].filter(([, h]) => h !== "#portfolio" || SHOW.caseStudies).map(([l, h]) => (
              <li key={l}><a className={link} href={h}>{l}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={colTitle}>Contact</h2>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-1 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold hover:underline">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-1 shrink-0 text-gold" aria-hidden />
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-gold hover:underline">{SITE.phoneDisplay}</a>
            </li>
            {SITE.addresses.map((a) => (
              <li key={a.label} className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0 text-gold" aria-hidden />
                <address className="not-italic">
                  <span className="font-semibold text-white">{a.label}: </span>
                  {a.text}
                </address>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-gold-muted/20 pt-6 text-xs text-muted">
        &copy; {new Date().getFullYear()} AR Corporation. All rights reserved.
      </p>
    </footer>
  );
}

