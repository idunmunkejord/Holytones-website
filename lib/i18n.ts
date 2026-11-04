// The site's two languages. Visitors pick one with the flags in the menu; the choice is kept in
// the `lang` cookie. English is shown until they choose.

export type Lang = "en" | "no";

export const LANG_COOKIE = "lang";
export const defaultLang: Lang = "en";

export function toLang(value: string | undefined): Lang {
  return value === "no" ? "no" : defaultLang;
}

// Text given in both languages.
export type Localized<T = string> = Record<Lang, T>;

// Labels for the ReadMore button, spread into its props.
export const readMoreLabels: Localized<{ moreLabel: string; lessLabel: string }> = {
  en: { moreLabel: "Read More ↓", lessLabel: "Read Less ↑" },
  no: { moreLabel: "Les mer ↓", lessLabel: "Les mindre ↑" },
};

// The value for <html lang>.
export const htmlLang: Record<Lang, string> = { en: "en", no: "nb" };
