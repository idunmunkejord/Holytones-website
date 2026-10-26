import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function AuthorPhoto({ sizes }: { sizes: string }) {
  return (
    <div className="relative">
      {/* Offset frame behind the photo, tying it into the warm palette. */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 bg-background-alt" aria-hidden />
      <div className="relative aspect-[4/5] overflow-hidden bg-background-alt">
        {siteConfig.authorPhoto ? (
          <>
            {/* A gentle warm grade so the cool seaside photo sits in the site's cream-and-gold palette. */}
            <Image
              src={siteConfig.authorPhoto}
              alt="Idun Munkejord"
              fill
              priority
              quality={95}
              sizes={sizes}
              className="object-cover sepia-[0.22] saturate-[0.92] brightness-[1.03]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-accent-gold/25 via-accent-peach/10 to-accent-peach/20 mix-blend-soft-light"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(176,145,90,0.18))]"
              aria-hidden
            />
          </>
        ) : (
          <div className="flex h-full items-end bg-gradient-to-b from-surface to-accent-soft/40 p-6">
            <p className="font-serif-display text-xl italic text-foreground-muted">
              Idun Munkejord
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
