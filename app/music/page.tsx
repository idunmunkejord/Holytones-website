import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import TrackCard from "@/components/TrackCard";
import { links, tracks } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Music",
  description: "Listen to original songs by Holytones, written and released across languages.",
};

export default function MusicPage() {
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 pt-14 pb-16 md:px-10 md:pt-20">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Music</SectionLabel>
          <h1 className="sr-only">Music</h1>
          <p className="max-w-xl text-base leading-relaxed text-foreground-muted">
            New singles arrive every four to six weeks, released across languages as each song
            finds its voice. Find the full catalogue on Spotify and Apple Music.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <a
              href={links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
            >
              Open Spotify
            </a>
            <a
              href={links.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline px-2 py-3 text-xs uppercase tracking-[0.2em] text-foreground-muted hover:text-foreground"
            >
              Open Apple Music
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          {tracks.map((track, index) => (
            <TrackCard key={track.title} track={track} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
