"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { whenCookiesAllowed } from "@/lib/cookie-consent";

// The Meta (Facebook) pixel on every page, sending PageView on the first page and on every page
// change inside the site. It only loads after the visitor has said yes in the cookie banner
// (lib/cookie-consent.ts); a later yes loads it then, for the page they are on. A no after it has
// loaded reloads the page without it.
//
// Holytones.no is a restricted domain at Meta (religion), so Meta may limit what it keeps from
// these events. That is Meta's decision and is left as it is: only the standard PageView is sent.

const PIXEL_ID = "424716900655162";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

let requested = false;
let lastTracked: string | null = null;

function currentPage() {
  return window.location.pathname + window.location.search;
}

// Meta's own base code, written out: a stand-in `fbq` that queues calls until fbevents.js has
// loaded. Simplero's signup popup uses the same pixel and finds this one already in place.
function loadPixel() {
  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    } as Fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq ??= fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
  lastTracked = currentPage();
}

export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (!requested) {
      requested = true;
      whenCookiesAllowed(loadPixel);
      return;
    }
    // A page change inside the site: only counted once the pixel is loaded, and never twice for
    // the same page.
    if (lastTracked === null || !window.fbq) return;
    const page = currentPage();
    if (page === lastTracked) return;
    window.fbq("track", "PageView");
    lastTracked = page;
  }, [pathname]);

  return null;
}
