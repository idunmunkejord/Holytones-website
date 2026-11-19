"use client";

import { useEffect, useState, type ReactNode } from "react";

// A link to the Simplero order page that carries the ad's UTM tags along, so Simplero can show
// which ad a purchase came from (Sales > Purchases, UTM columns). Simplero only records the tags
// that are on the link the visitor clicks, and our landing pages are the step in between.
//
// Only the five standard utm_* tags are passed on, and only short plain values (letters, digits,
// _ and -), so nothing else from the address (fbclid, e-mail addresses, free text) reaches the
// checkout. Nothing is stored in the browser: the tags are read from this page's own address.
// Without tags the link says it came from this page of holytones.no, which keeps orders from
// the site apart from orders that went straight to the order page.

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const SAFE_VALUE = /^[a-z0-9_-]{1,60}$/i;

export function withUtm(orderUrl: string, pageSearch: string, pagePath: string): string {
  const page = new URLSearchParams(pageSearch);
  const url = new URL(orderUrl);
  let carried = false;
  for (const key of UTM_KEYS) {
    const value = page.get(key);
    if (value && SAFE_VALUE.test(value)) {
      url.searchParams.set(key, value.toLowerCase());
      carried = true;
    }
  }
  if (!carried) {
    url.searchParams.set("utm_source", "holytones");
    url.searchParams.set("utm_medium", "website");
    url.searchParams.set("utm_content", pagePath.replace(/[^a-z0-9_-]/gi, "") || "home");
  }
  return url.toString();
}

export default function OrderLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  // The plain address is rendered first (and is what works without JavaScript); the tags are
  // added once the page knows its own address.
  const [tagged, setTagged] = useState(href);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the address is only known in the browser
    setTagged(withUtm(href, window.location.search, window.location.pathname));
  }, [href]);

  return (
    <a href={tagged} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
