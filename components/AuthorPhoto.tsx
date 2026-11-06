import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

// `src` swaps in another portrait with the same frame and warm grade; `position` sets which part
// of a photo of a different shape stays in view (e.g. "object-top"); `credit` is printed small in
// the photo's bottom corner.
export default function AuthorPhoto({
  sizes,
  src = siteConfig.authorPhoto,
  position = "",
  priority = true,
  credit,
}: {
  sizes: string;
  src?: string;
  position?: string;
  priority?: boolean;
  credit?: string;
}) {
  return (
    <div className="relative">
      {/* Offset frame behind the photo, tying it into the warm palette. */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 bg-background-alt" aria-hidden />
      <div className="relative aspect-[4/5] overflow-hidden bg-background-alt">
        {src ? (
          <>
            {/* A gentle warm grade so the cool seaside photo sits in the site's cream-and-gold palette. */}
            <Image
              src={src}
              alt="Idun Munkejord"
              fill
              priority={priority}
              quality={95}
              sizes={sizes}
              className={`object-cover ${position} sepia-[0.22] saturate-[0.92] brightness-[1.03]`}
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-accent-gold/25 via-accent-peach/10 to-accent-peach/20 mix-blend-soft-light"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(176,145,90,0.18))]"
              aria-hidden
            />
            {credit && (
              <p className="absolute right-2 bottom-1.5 text-[10px] tracking-wide text-white/85 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                {credit}
              </p>
            )}
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
