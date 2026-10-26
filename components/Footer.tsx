"use client";

import { usePathname } from "next/navigation";
import { links } from "@/lib/site-config";
import SocialLinks from "@/components/SocialLinks";

// Pages whose last section is already dark get a light footer so the two stay distinct.
const lightFooterPaths = ["/", "/about"];

export default function Footer() {
  const pathname = usePathname();
  const background = lightFooterPaths.includes(pathname) ? "bg-background" : "bg-background-alt";

  return (
    <footer className={`border-t border-border-soft ${background}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:px-10">
        <div className="max-w-sm">
          <p className="font-serif-display text-2xl text-foreground">Holytones</p>
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
