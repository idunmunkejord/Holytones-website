"use client";

import { useRef, useState, useSyncExternalStore, type MouseEvent, type ReactNode } from "react";

// A button that opens a Simplero popup signup form on this site.
//
// `page` is the Simplero form address (https://…/page/123456). Simplero's script for it
// (`<page>.js`) adds the popup to the page and opens it when a link with
// rel="simplero-landing-page" is clicked. The script is only fetched on the first click, so
// nothing from Simplero runs for visitors who never open the form.
//
// That script also carries the marketing tracking set up in the Simplero account (the Facebook
// pixel) and Simplero's own cookies. Both wait for `window.simpleroCookieConsent`, so the first
// click asks the visitor for permission and the answer is remembered in this browser. The form
// opens and works whatever they answer.

const WAIT_MS = 10_000;
const RETRY_MS = 200;
const CONSENT_KEY = "holytones-marketing-cookies";

type Consent = "yes" | "no";

declare global {
  interface Window {
    simpleroCookieConsent?: { whenCookiesAllowed: (run: () => void) => void };
  }
}

function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "yes" || value === "no" ? value : null;
  } catch {
    return null;
  }
}

function storeConsent(value: Consent | null) {
  try {
    if (value) window.localStorage.setItem(CONSENT_KEY, value);
    else window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    // Private windows may refuse storage; the visitor is simply asked again next time.
  }
  listeners.forEach((notify) => notify());
}

const listeners = new Set<() => void>();

function subscribe(notify: () => void) {
  listeners.add(notify);
  return () => {
    listeners.delete(notify);
  };
}

export type SimpleroPopupText = {
  failed: string;
  consentQuestion: string;
  consentYes: string;
  consentNo: string;
  consentChange: string;
};

export default function SimpleroPopupButton({
  page,
  text,
  className,
  children,
}: {
  page: string;
  text: SimpleroPopupText;
  className?: string;
  children: ReactNode;
}) {
  const link = useRef<HTMLAnchorElement>(null);
  const started = useRef(false);
  const replaying = useRef(false);
  const [status, setStatus] = useState<"idle" | "asking" | "loading" | "failed">("idle");
  // Whether this browser has a remembered answer (never on the server, where there is no browser).
  const answered = useSyncExternalStore(
    subscribe,
    () => readConsent() !== null,
    () => false,
  );

  const base = page.replace(/\/+$/, "");
  const containerId = `simplero-landing-page-${base.split("/").pop()}`;

  function isOpen() {
    return document.getElementById(containerId)?.classList.contains("simplero-visible") ?? false;
  }

  function load(consent: Consent) {
    if (started.current) return;
    started.current = true;
    setStatus("loading");

    // Simplero runs its tracking and cookie code through this; without a yes it is dropped.
    window.simpleroCookieConsent = {
      whenCookiesAllowed: (run) => {
        if (consent === "yes") run();
      },
    };

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

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    // Keep the "#…" address out of the address bar; Simplero still receives the click.
    e.preventDefault();
    // Clicks we replay ourselves, and every click after Simplero has loaded, belong to Simplero.
    if (replaying.current || started.current) return;
    const consent = readConsent();
    if (consent) load(consent);
    else setStatus("asking");
  }

  function answer(consent: Consent) {
    storeConsent(consent);
    load(consent);
  }

  function changeAnswer() {
    storeConsent(null);
    // Tracking that has already started can only be stopped by loading the page afresh.
    if (started.current) window.location.reload();
    else setStatus("asking");
  }

  const choice =
    "border border-border-soft px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

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

      {status === "asking" && (
        <div role="group" aria-label={text.consentQuestion} className="mt-4">
          <p className="text-sm leading-relaxed text-foreground-muted">{text.consentQuestion}</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button type="button" onClick={() => answer("yes")} className={choice}>
              {text.consentYes}
            </button>
            <button type="button" onClick={() => answer("no")} className={choice}>
              {text.consentNo}
            </button>
          </div>
        </div>
      )}

      <p role="alert" className="mt-3 text-sm text-foreground-muted empty:hidden">
        {status === "failed" && text.failed}
      </p>

      {answered && status !== "asking" && (
        <button
          type="button"
          onClick={changeAnswer}
          className="link-underline mt-3 text-xs text-foreground-muted"
        >
          {text.consentChange}
        </button>
      )}
    </>
  );
}
