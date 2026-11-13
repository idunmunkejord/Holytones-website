"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { whenCookiesAllowed } from "@/lib/cookie-consent";

// A button that opens a Simplero popup signup form on this site.
//
// `page` is the Simplero form address (https://…/page/123456). Simplero's script for it
// (`<page>.js`) adds the popup to the page and opens it when a link with
// rel="simplero-landing-page" is clicked. The script is only fetched on the first click, so
// nothing from Simplero runs for visitors who never open the form.
//
// That script also carries the marketing tracking set up in the Simplero account (the Facebook
// pixel) and Simplero's own cookies. Simplero runs both through `window.simpleroCookieConsent`,
// which is pointed at the visitor's cookie choice (lib/cookie-consent.ts, asked by CookieBanner):
// they only start after a yes. The form itself opens and works whatever the visitor has chosen.

const WAIT_MS = 10_000;
const RETRY_MS = 200;

declare global {
  interface Window {
    simpleroCookieConsent?: { whenCookiesAllowed: (run: () => void) => void };
  }
}

export default function SimpleroPopupButton({
  page,
  failedText,
  className,
  children,
}: {
  page: string;
  failedText: string;
  className?: string;
  children: ReactNode;
}) {
  const link = useRef<HTMLAnchorElement>(null);
  const started = useRef(false);
  const replaying = useRef(false);
  const [status, setStatus] = useState<"idle" | "loading" | "failed">("idle");

  const base = page.replace(/\/+$/, "");
  const containerId = `simplero-landing-page-${base.split("/").pop()}`;

  function isOpen() {
    return document.getElementById(containerId)?.classList.contains("simplero-visible") ?? false;
  }

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    // Keep the "#…" address out of the address bar; Simplero still receives the click.
    e.preventDefault();
    // Clicks we replay ourselves, and every click after Simplero has loaded, belong to Simplero.
    if (replaying.current || started.current) return;
    started.current = true;
    setStatus("loading");

    window.simpleroCookieConsent = { whenCookiesAllowed };

    const script = document.createElement("script");
    script.src = `${base}.js`;
    script.async = true;
    script.onerror = () => {
      started.current = false;
      setStatus("failed");
    };
    document.head.appendChild(script);

    // Simplero starts listening for clicks a moment after its script arrives; replay the
    // visitor's click until the popup is showing.
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      if (isOpen()) {
        window.clearInterval(timer);
        replaying.current = true; // from here on Simplero handles the clicks itself
        setStatus("idle");
        return;
      }
      if (Date.now() - startedAt > WAIT_MS) {
        window.clearInterval(timer);
        started.current = false;
        script.remove();
        setStatus("failed");
        return;
      }
      if (document.getElementById(containerId)) {
        replaying.current = true;
        link.current?.click();
        replaying.current = isOpen();
      }
    }, RETRY_MS);
  }

  return (
    <>
      <a
        ref={link}
        href={`#${containerId}`}
        rel="simplero-landing-page"
        onClick={handleClick}
        aria-busy={status === "loading"}
        className={className}
      >
        {children}
      </a>
      <p role="alert" className="mt-3 text-sm text-foreground-muted empty:hidden">
        {status === "failed" && failedText}
      </p>
    </>
  );
}
