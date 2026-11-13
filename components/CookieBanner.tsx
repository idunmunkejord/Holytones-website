"use client";

import Link from "next/link";
import { useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  bannerVisible,
  openCookieSettings,
  readConsent,
  setConsent,
  settingsRequests,
  subscribe,
} from "@/lib/cookie-consent";
import type { Lang } from "@/lib/i18n";

// A small banner at the bottom of the screen asking about optional marketing cookies (see
// lib/cookie-consent.ts). It shows until the visitor has answered, and again when they open
// the cookie settings. Both answers are equally easy to give, and neither blocks the signup.

const text = {
  en: {
    label: "Cookies",
    body: "We would like to use optional cookies from Simplero and Meta (Facebook) to see how people find our devotionals. You can sign up whatever you choose.",
    more: "Read more",
    decline: "Decline",
    accept: "Accept",
    current: { yes: "Your choice now: accepted.", no: "Your choice now: declined." },
  },
  no: {
    label: "Informasjonskapsler",
    body: "Vi ønsker å bruke valgfrie informasjonskapsler fra Simplero og Meta (Facebook) for å se hvordan folk finner andaktene våre. Du kan melde deg på uansett hva du velger.",
    more: "Les mer",
    decline: "Avvis",
    accept: "Godta",
    current: { yes: "Valget ditt nå: godtatt.", no: "Valget ditt nå: avvist." },
  },
};

// Both buttons share one style so that neither choice is favoured.
const choice =
  "min-h-11 flex-1 border border-accent px-6 text-[11px] uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:flex-none";

export default function CookieBanner({ lang }: { lang: Lang }) {
  const visible = useSyncExternalStore(subscribe, bannerVisible, () => false);
  const consent = useSyncExternalStore(subscribe, readConsent, () => null);
  const requests = useSyncExternalStore(subscribe, settingsRequests, () => 0);
  if (!visible) return null;
  const t = text[lang];

  // Placed on <body>, above the page but below the Simplero popup (z-index 16777270), so it never
  // covers the signup form on a phone; it is there again when the popup is closed.
  return createPortal(
    <div
      role="region"
      aria-label={t.label}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[1000000] px-3 pb-3 sm:px-5 sm:pb-5"
    >
      {/* A new key each time the visitor asks for the settings replays the "here I am" motion. */}
      <div
        key={requests}
        className={`pointer-events-auto mx-auto flex max-w-3xl flex-col gap-3 border border-border-soft border-t-accent-gold/60 bg-surface px-5 py-4 shadow-[0_10px_40px_rgba(43,38,33,0.14)] sm:flex-row sm:items-center sm:gap-7 sm:px-6 ${requests ? "cookie-banner-nudge" : ""}`}
      >
        <p className="text-[13px] leading-relaxed text-foreground-muted">
          {t.body}{" "}
          <Link href="/personvern#informasjonskapsler" className="link-underline text-accent">
            {t.more}
          </Link>
          {consent && (
            <span aria-live="polite" className="mt-1 block font-medium text-foreground">
              {t.current[consent]}
            </span>
          )}
        </p>
        <div className="flex shrink-0 gap-3">
          <button type="button" onClick={() => setConsent("no")} className={choice}>
            {t.decline}
          </button>
          <button type="button" onClick={() => setConsent("yes")} className={choice}>
            {t.accept}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

/** A text link that brings the banner back, so a choice can be changed or withdrawn. */
export function CookieSettingsLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {children}
    </button>
  );
}
