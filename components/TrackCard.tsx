import { links, type Track } from "@/lib/site-config";

export default function TrackCard({ track, index }: { track: Track; index: number }) {
  return (
    <div className="group flex flex-col gap-4 border-b border-border-soft py-8 first:pt-0 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-6">
        <span className="font-serif-display text-2xl text-foreground-muted/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-serif-display text-2xl text-foreground transition-colors group-hover:text-accent">
            {track.title}
            {track.featured && (
              <span className="ml-3 align-middle text-[10px] font-sans uppercase tracking-[0.2em] text-accent">
                Featured
              </span>
            )}
          </h3>
          <p className="mt-1 text-sm text-foreground-muted">
            {track.language} · {track.year}
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground-muted">
            {track.note}
          </p>
        </div>
      </div>

      <div className="flex gap-5 pl-14 sm:pl-0">
        <a
          href={links.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-xs uppercase tracking-[0.18em] text-foreground-muted hover:text-accent"
        >
          Spotify
        </a>
        <a
          href={links.appleMusic}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-xs uppercase tracking-[0.18em] text-foreground-muted hover:text-accent"
        >
          Apple Music
        </a>
      </div>
    </div>
  );
}
