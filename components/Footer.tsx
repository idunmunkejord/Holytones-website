import Link from "next/link";
import { links, navLinks, siteConfig } from "@/lib/site-config";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-background-alt">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif-display text-2xl text-foreground">Holytones</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {siteConfig.description}
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm uppercase tracking-[0.14em] text-foreground-muted sm:grid-cols-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="link-underline hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 border-t border-border-soft pt-8 md:flex-row md:items-center md:justify-between">
          <SocialLinks />
          <a
            href={`mailto:${links.email}`}
            className="link-underline text-sm text-foreground-muted hover:text-foreground"
          >
            {links.email}
          </a>
        </div>

        <p className="text-xs text-foreground-muted/70">
          © {new Date().getFullYear()} Holytones. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
