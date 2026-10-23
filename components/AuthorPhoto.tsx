import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function AuthorPhoto({ sizes }: { sizes: string }) {
  return (
    <div className="relative">
      {/* Offset frame behind the photo, tying it into the warm palette. */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 bg-background-alt" aria-hidden />
      <div className="relative aspect-[4/5] overflow-hidden bg-background-alt">
        {siteConfig.authorPhoto ? (
          <Image
            src={siteConfig.authorPhoto}
            alt="Idun Munkejord"
            fill
            priority
            quality={95}
            sizes={sizes}
            className="object-cover"
          />
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
