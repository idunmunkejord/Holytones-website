import Link from "next/link";
import { getLang } from "@/lib/get-lang";

const text = {
  en: { heading: "This page went quiet.", body: "The page you're looking for doesn't exist.", home: "Back to Home" },
  no: { heading: "Denne siden ble stille.", body: "Siden du leter etter, finnes ikke.", home: "Tilbake til forsiden" },
};

export default async function NotFound() {
  const t = text[await getLang()];
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">404</p>
        <h1 className="mt-4 font-serif-display text-[1.5rem] leading-[1.25] text-foreground md:text-[1.75rem]">
          {t.heading}
        </h1>
        <p className="mt-4 text-foreground-muted">
          {t.body}
        </p>
        <Link
          href="/"
          className="link-underline mt-8 inline-block text-xs uppercase tracking-[0.2em] text-foreground-muted hover:text-foreground"
        >
          {t.home}
        </Link>
      </div>
    </section>
  );
}
