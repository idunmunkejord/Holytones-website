import type { Metadata } from "next";
import ReadMore from "@/components/ReadMore";
import SectionLabel from "@/components/SectionLabel";
import { AlbumCard, SinglesBox, SongRow } from "@/components/ReleaseCards";
import { albums, allSongs, singles } from "@/lib/music";
import { getLang } from "@/lib/get-lang";
import { readMoreLabels } from "@/lib/i18n";
import { links } from "@/lib/site-config";

const text = {
  en: {
    title: "Music",
    heading: "With Jesus at the Centre",
    description: "Listen to original songs by Holytones, written and released across languages.",
    intro:
      "Holytones creates songs rooted in Scripture about faith, love, forgiveness, hope, and who you are in Christ. Some songs are quiet prayers. Others challenge you to place your life in God’s hands. Each one invites you to draw closer to Jesus and let faith shape the choices you make every day, whether that means forgiving someone, showing love, or finding the courage to take the next step with God.",
    more: [
      "The catalogue also includes songs built around poems and lyrics by the Norwegian poet and songwriter Reidar Munkejord, giving his words a musical voice to inspire a new generation.",
      "The songs on Holytones are released across languages. Find the full catalogue on Spotify and Apple Music.",
    ],
    spotify: "Open Spotify",
    apple: "Open Apple Music",
    albums: "Albums",
    singles: "Singles",
    allSongs: "All songs",
  },
  no: {
    title: "Musikk",
    heading: "Med Jesus i sentrum",
    description: "Lytt til originale sanger fra Holytones, skrevet og gitt ut på flere språk.",
    intro:
      "Holytones lager sanger med røtter i Bibelen, om tro, kjærlighet, tilgivelse, håp og hvem du er i Kristus. Noen sanger er stille bønner. Andre utfordrer deg til å legge livet ditt i Guds hender. Alle inviterer deg til å komme nærmere Jesus og la troen få prege de valgene du tar i hverdagen, enten det handler om å tilgi, vise kjærlighet eller våge å ta neste steg sammen med Gud.",
    more: [
      "I katalogen finner du også sanger basert på dikt og tekster av den norske poeten og sangtekstforfatteren Reidar Munkejord. Gjennom musikken får ordene hans nytt liv og kan inspirere en ny generasjon.",
      "Sangene på Holytones utgis på flere språk. Du finner hele katalogen på Spotify og Apple Music.",
    ],
    spotify: "Åpne Spotify",
    apple: "Åpne Apple Music",
    albums: "Album",
    singles: "Singler",
    allSongs: "Alle sanger",
  },
};

// The cover shown on the closed singles box.
const singlesCover =
  singles.find((single) => single.title.toLowerCase() === "through the valley") ?? singles[0];

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
          <h1 className="font-serif-display text-3xl leading-tight font-bold text-brown-dark md:text-4xl">
            {t.heading}
          </h1>
          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
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
            <SinglesBox singles={singles} cover={singlesCover} lang={lang} />
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
