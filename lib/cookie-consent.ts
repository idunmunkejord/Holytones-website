// The visitor's choice about optional marketing cookies (Simplero's own cookies and the Facebook
// pixel that come with the Simplero signup form). Browser-only; used by CookieBanner (asks) and
// SimpleroPopupButton (obeys).
//
// Nothing optional runs before a yes. Code that wants to set such cookies is handed to
// `whenCookiesAllowed`, which runs it at once after a yes and otherwise keeps it waiting, so a
// later yes still starts it. A no after tracking has started reloads the page, since a loaded
// pixel cannot be switched off any other way.

export type Consent = "yes" | "no";

const KEY = "holytones-marketing-cookies";

let memory: Consent | null = null; // used when the browser refuses storage (private windows)
let settingsOpen = false;
let requests = 0;
let trackingStarted = false;
const waiting: Array<() => void> = [];
const listeners = new Set<() => void>();

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "yes" || value === "no" ? value : memory;
  } catch {
    return memory;
  }
}

export function subscribe(notify: () => void) {
  listeners.add(notify);
  return () => {
    listeners.delete(notify);
  };
}

/** True while the visitor should see the banner: no answer yet, or they asked to change it. */
export function bannerVisible() {
  return settingsOpen || readConsent() === null;
}

/** How many times the visitor has asked for the banner; each time it draws attention to itself. */
export function settingsRequests() {
  return requests;
}

/** Shows the banner again so the visitor can change or withdraw their choice. */
export function openCookieSettings() {
  settingsOpen = true;
  requests += 1;
  listeners.forEach((notify) => notify());
}

export function whenCookiesAllowed(run: () => void) {
  if (readConsent() === "yes") {
    trackingStarted = true;
    run();
  } else {
    waiting.push(run);
  }
}

export function setConsent(value: Consent) {
  memory = value;
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    // Kept in memory for this visit only.
  }
  settingsOpen = false;

  if (value === "yes") {
    if (waiting.length) trackingStarted = true;
    waiting.splice(0).forEach((run) => run());
  } else {
    removeMarketingCookies();
    if (trackingStarted) {
      window.location.reload();
      return;
    }
  }
  listeners.forEach((notify) => notify());
}

// The cookies the Facebook pixel and Simplero set on this site after a yes.
function removeMarketingCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => name === "_fbp" || name === "_fbc" || name.startsWith("simplero"));
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}
