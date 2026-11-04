import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { getLang } from "@/lib/get-lang";
import { company, customerService } from "@/lib/site-config";

const columnHeading = "mb-3 text-xs uppercase tracking-[0.2em] text-foreground";

const text = {
  en: {
    title: "Contact",
    description: "Get in touch with Holytones for booking, press, or general inquiries.",
    intro:
      "Whether you have a question about my books, courses, or music, want to share something that has touched your heart, or simply feel like reaching out, you are always welcome to get in touch.",
    info: "Info",
  },
  no: {
    title: "Kontakt",
    description: "Ta kontakt med Holytones for booking, presse eller andre henvendelser.",
    intro:
      "Enten du har et spørsmål om bøkene, kursene eller musikken min, vil dele noe som har berørt hjertet ditt, eller bare har lyst til å ta kontakt, er du alltid velkommen til å skrive.",
    info: "Info",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = text[await getLang()];
  return { title: t.title, description: t.description };
}

export default async function ContactPage() {
  const lang = await getLang();
  const t = text[lang];
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>{t.title}</SectionLabel>
          <h1 className="sr-only">{t.title}</h1>
          <p className="max-w-2xl text-[15px] leading-[1.75] text-foreground-muted md:text-base">
            {t.intro}
          </p>
          <div className="mt-8 max-w-2xl border border-border-soft bg-surface px-6 py-8 sm:px-10 sm:py-10">
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-4xl gap-10 text-sm leading-relaxed text-foreground-muted sm:grid-cols-2">
          <div>
            <h2 className={columnHeading}>{t.info}</h2>
            <p className="text-foreground">{company.name}</p>
            <p>Org.nr. {company.orgNumber}</p>
            <p>{company.offering}</p>
          </div>

          <div>
            <h2 className={columnHeading}>Kundeservice</h2>
            <ul className="space-y-2">
              {customerService.map((item) => (
                <li key={item.title}>
                  {item.href ? (
                    <Link href={item.href} className="transition-colors hover:text-foreground">
                      {item.title}
                    </Link>
                  ) : (
                    <details className="group">
                      <summary className="w-fit cursor-pointer list-none transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                        {item.title}
                        <span className="ml-2 text-xs text-accent group-open:hidden" aria-hidden>
                          +
                        </span>
                        <span className="ml-2 hidden text-xs text-accent group-open:inline" aria-hidden>
                          −
                        </span>
                      </summary>
                      <div className="mt-2 mb-4 max-w-sm space-y-3 text-xs leading-relaxed">
                        {item.parts.length === 0 && <p>Kommer snart.</p>}
                        {item.parts.map((part, i) => (
                          <div key={i}>
                            {part.heading && (
                              <h3 className="font-medium text-foreground">{part.heading}</h3>
                            )}
                            {part.subheading && (
                              <h4 className="mt-1 italic text-foreground">{part.subheading}</h4>
                            )}
                            {part.href ? (
                              <Link href={part.href} className="link-underline text-accent">
                                {part.text}
                              </Link>
                            ) : (
                              <p className="whitespace-pre-line">{part.text}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </details>
                  )}
                </li>
              ))}
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  Om Idun
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
