// The browser API that Cloudflare's Turnstile script adds to the page.
type Turnstile = {
  render: (
    container: HTMLElement,
    options: { sitekey: string; theme: "light"; callback: (token: string) => void }
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

interface Window {
  turnstile?: Turnstile;
}
