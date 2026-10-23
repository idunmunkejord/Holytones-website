import { company, links } from "@/lib/site-config";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-background-alt">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:px-10">
        <div className="max-w-sm">
          <p className="font-serif-display text-2xl text-foreground">Holytones</p>
        </div>

        <div className="flex flex-col gap-6 border-t border-border-soft pt-8 md:flex-row md:items-center md:justify-between">
          <SocialLinks hide={["appleMusic"]} />
          <a
            href={`mailto:${links.email}`}
            className="link-underline text-sm text-foreground-muted hover:text-foreground"
          >
            {links.email}
          </a>
        </div>

        <div className="space-y-1 text-xs leading-relaxed text-foreground-muted/70">
          <p>© {new Date().getFullYear()} Holytones. All rights reserved.</p>
          <details>
            <summary className="w-fit cursor-pointer list-none uppercase tracking-[0.18em] transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
              Sales terms
            </summary>
            <p className="mt-2">
              Holytones is run by {company.name} ({company.form}), org. no. {company.orgNumber} ·{" "}
              {links.email} · {company.offering}.
            </p>
          </details>
        </div>
      </div>
    </footer>
  );
}
