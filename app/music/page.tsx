import type { Metadata } from "next";
import ReadMore from "@/components/ReadMore";
import SectionLabel from "@/components/SectionLabel";
import { AlbumCard, SingleCard, SongRow } from "@/components/ReleaseCards";
import { albums, allSongs, singles } from "@/lib/music";
import { getLang } from "@/lib/get-lang";
import { readMoreLabels } from "@/lib/i18n";
import { links } from "@/lib/site-config";

const text = {
  en: {
    title: "Music",
    description: "Listen to original songs by Holytones, written and released across languages.",
    intro:
      "Holytones brings biblical truth into everyday life through songs about faith, love, forgiveness, identity and hope. From quiet prayers to powerful calls to surrender, each song invites you to draw closer to Jesus and let faith shape how you live to forgive, love, and take the next step with God.",
    more: [
      "The catalogue also includes songs built around poems and lyrics by the Norwegian poet and songwriter Reidar Munkejord, giving his words a musical voice to inspire a new generation.",
      "Listen and let the words become your prayer and share a song with someone who needs encouragement.",
      "New singles arrive every one to three months, released across languages as each song finds its voice. Find the full catalogue on Spotify and Apple Music.",
    ],
    spotify: "Open Spotify",
    apple: "Open Apple Music",
    albums: "Albums",
    singles: "Singles",
    allSongs: "All songs",
  },
  no: {
    title: "Musikk",
    description: "Lytt til originale sanger fra Holytones, skrevet og gitt ut på flere språk.",
    intro:
      "Holytones bringer bibelsk sannhet inn i hverdagen gjennom sanger om tro, kjærlighet, tilgivelse, identitet og håp. Fra stille bønner til sterke kall til overgivelse inviterer hver sang deg til å komme nærmere Jesus og la troen forme hvordan du lever – til å tilgi, elske og ta neste steg med Gud.",
    more: [
      "Katalogen rommer også sanger bygget på dikt og tekster av den norske poeten og låtskriveren Reidar Munkejord, som gir ordene hans en musikalsk stemme som kan inspirere en ny generasjon.",
      "Lytt, la ordene bli din bønn, og del en sang med noen som trenger oppmuntring.",
      "Nye singler kommer hver første til tredje måned, på flere språk etter hvert som hver sang finner sin stemme. Du finner hele katalogen på Spotify og Apple Music.",
    ],
    spotify: "Åpne Spotify",
    apple: "Åpne Apple Music",
    albums: "Album",
    singles: "Singler",
    allSongs: "Alle sanger",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = text[await getLang()];
  return { title: t.title, description: t.description };
}

export default async function MusicPage() {
  const lang = await getLang();
  const t = text[lang];
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 pt-14 pb-16 md:px-10 md:pt-20">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>{t.title}</SectionLabel>
          <h1 className="sr-only">{t.title}</h1>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
            <p>{t.intro}</p>
          </div>
          <ReadMore
            className="max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted"
            {...readMoreLabels[lang]}
          >
            {t.more.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ReadMore>
          <div className="mt-8 flex flex-wrap gap-6">
            <a
              href={links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
            >
              {t.spotify}
            </a>
            <a
              href={links.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline px-2 py-3 text-xs uppercase tracking-[0.2em] text-foreground-muted hover:text-foreground"
            >
              {t.apple}
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl space-y-16">
          <div>
            <h2 className="mb-6 font-serif-display text-2xl text-foreground">{t.albums}</h2>
            <div className="space-y-5">
              {albums.map((album) => (
                <AlbumCard key={album.id} album={album} lang={lang} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-serif-display text-2xl text-foreground">{t.singles}</h2>
            <div>
              {singles.map((single) => (
                <SingleCard key={single.id} single={single} lang={lang} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-2 font-serif-display text-2xl text-foreground">{t.allSongs}</h2>
            <ol>
              {allSongs.map((song, index) => (
                <SongRow key={song.id} song={song} index={index} lang={lang} />
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
