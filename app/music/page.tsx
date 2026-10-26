import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { AlbumCard, SingleCard, SongRow } from "@/components/ReleaseCards";
import { albums, allSongs, singles } from "@/lib/music";
import { links } from "@/lib/site-config";

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
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
            <p>
              Holytones brings biblical truth into everyday life through songs about faith, love,
              forgiveness, identity and hope. From quiet prayers to powerful calls to surrender,
              each song invites you to draw closer to Jesus and let faith shape how you live to
              forgive, love, and take the next step with God.
            </p>
            <p>
              The catalogue also includes songs built around poems and lyrics by the Norwegian poet
              and songwriter Reidar Munkejord, giving his words a musical voice to inspire a new
              generation.
            </p>
            <p>
              Listen and let the words become your prayer and share a song with someone who needs
              encouragement.
            </p>
            <p>
              New singles arrive every one to three months, released across languages as each song
              finds its voice. Find the full catalogue on Spotify and Apple Music.
            </p>
          </div>
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
        <div className="mx-auto max-w-4xl space-y-16">
          <div>
            <h2 className="mb-6 font-serif-display text-2xl text-foreground">Albums</h2>
            <div className="space-y-5">
              {albums.map((album) => (
                <AlbumCard key={album.id} album={album} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-serif-display text-2xl text-foreground">Singles</h2>
            <div>
              {singles.map((single) => (
                <SingleCard key={single.id} single={single} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-2 font-serif-display text-2xl text-foreground">All songs</h2>
            <ol>
              {allSongs.map((song, index) => (
                <SongRow key={song.id} song={song} index={index} />
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
