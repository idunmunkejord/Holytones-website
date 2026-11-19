import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { formatDuration, formatReleaseDate, type ListedSong, type Release } from "@/lib/music";

const text = {
  en: {
    cover: "cover",
    songs: "songs",
    show: "Show songs +",
    hide: "Hide songs −",
    whole: "Whole album:",
    singles: "Singles",
    allSingles: "All singles",
    singleCount: "singles",
    latest: "latest",
    showSingles: "Show singles +",
    hideSingles: "Hide singles −",
  },
  no: {
    cover: "omslag",
    songs: "sanger",
    show: "Vis sanger +",
    hide: "Skjul sanger −",
    whole: "Hele albumet:",
    singles: "Singler",
    allSingles: "Alle singler",
    singleCount: "singler",
    latest: "siste",
    showSingles: "Vis singler +",
    hideSingles: "Skjul singler −",
  },
};

const listenLink =
  "link-underline text-xs uppercase tracking-[0.18em] text-foreground-muted hover:text-accent";

// Lets visitors pick Spotify or Apple Music. Apple Music is left out when it has no match.
function ListenLinks({
  spotify,
  appleMusic,
  className = "",
}: {
  spotify: string;
  appleMusic?: string;
  className?: string;
}) {
  return (
    <div className={`flex shrink-0 gap-4 ${className}`}>
      <a href={spotify} target="_blank" rel="noopener noreferrer" className={listenLink}>
        Spotify
      </a>
      {appleMusic && (
        <a href={appleMusic} target="_blank" rel="noopener noreferrer" className={listenLink}>
          Apple Music
        </a>
      )}
    </div>
  );
}

function Cover({ release, size, lang }: { release: Release; size: number; lang: Lang }) {
  return (
    <Image
      src={release.cover}
      alt={`${release.title} ${text[lang].cover}`}
      width={size}
      height={size}
      unoptimized
      className="shrink-0 border border-border-soft"
    />
  );
}

// An album that opens to show its songs.
export function AlbumCard({ album, lang }: { album: Release; lang: Lang }) {
  const t = text[lang];
  return (
    <details className="group border border-border-soft bg-surface">
      <summary className="flex cursor-pointer list-none items-center gap-5 p-5 sm:gap-6 sm:p-6 [&::-webkit-details-marker]:hidden">
        <Cover release={album} size={112} lang={lang} />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Album</p>
          <h3 className="mt-1 font-serif-display text-2xl text-foreground">{album.title}</h3>
          <p className="mt-1 text-sm text-foreground-muted">
            {formatReleaseDate(album.releaseDate, lang)} · {album.tracks.length} {t.songs}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-foreground-muted">
            <span className="group-open:hidden">{t.show}</span>
            <span className="hidden group-open:inline">{t.hide}</span>
          </p>
        </div>
      </summary>

      <div className="border-t border-border-soft px-5 pb-5 sm:px-6 sm:pb-6">
        <ol>
          {album.tracks.map((track, index) => (
            <li
              key={track.id}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border-soft py-3 last:border-b-0"
            >
              <span className="w-6 text-sm text-foreground-muted/60">{index + 1}</span>
              <span className="min-w-0 flex-1 text-foreground">{track.title}</span>
              <span className="text-sm text-foreground-muted">{formatDuration(track.durationMs)}</span>
              <ListenLinks
                spotify={track.url}
                appleMusic={track.appleMusicUrl}
                className="w-full pl-10 sm:w-auto sm:pl-0"
              />
            </li>
          ))}
        </ol>
        <div className="mt-5 flex flex-wrap items-baseline gap-4">
          <span className="text-xs uppercase tracking-[0.18em] text-foreground">{t.whole}</span>
          <ListenLinks spotify={album.url} appleMusic={album.appleMusicUrl} />
        </div>
      </div>
    </details>
  );
}

// All the singles in one box like an album, closed until opened. `cover` is the single whose
// cover is shown on the closed box.
export function SinglesBox({ singles, cover, lang }: { singles: Release[]; cover: Release; lang: Lang }) {
  const t = text[lang];
  if (singles.length === 0) return null;
  return (
    <details className="group border border-border-soft bg-surface">
      <summary className="flex cursor-pointer list-none items-center gap-5 p-5 sm:gap-6 sm:p-6 [&::-webkit-details-marker]:hidden">
        <Cover release={cover} size={112} lang={lang} />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{t.singles}</p>
          <h3 className="mt-1 font-serif-display text-2xl text-foreground">{t.allSingles}</h3>
          <p className="mt-1 text-sm text-foreground-muted">
            {singles.length} {t.singleCount} · {t.latest} {formatReleaseDate(singles[0].releaseDate, lang)}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-foreground-muted">
            <span className="group-open:hidden">{t.showSingles}</span>
            <span className="hidden group-open:inline">{t.hideSingles}</span>
          </p>
        </div>
      </summary>

      <div className="border-t border-border-soft px-5 pt-5 pb-5 sm:px-6 sm:pb-6">
        {singles.map((single) => (
          <SingleCard key={single.id} single={single} lang={lang} />
        ))}
      </div>
    </details>
  );
}

export function SingleCard({ single, lang }: { single: Release; lang: Lang }) {
  return (
    <div className="flex flex-wrap items-center gap-5 border-b border-border-soft py-5 first:pt-0 last:border-b-0">
      <Cover release={single} size={72} lang={lang} />
      <div className="min-w-0 flex-1">
        <h3 className="font-serif-display text-xl text-foreground">{single.title}</h3>
        <p className="mt-1 text-sm text-foreground-muted">{formatReleaseDate(single.releaseDate, lang)}</p>
      </div>
      <ListenLinks spotify={single.url} appleMusic={single.appleMusicUrl} />
    </div>
  );
}

export function SongRow({ song, index, lang }: { song: ListedSong; index: number; lang: Lang }) {
  return (
    <li className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-border-soft py-4 last:border-b-0 sm:gap-x-6">
      <span className="w-8 font-serif-display text-lg text-foreground-muted/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-serif-display text-xl text-foreground">{song.title}</p>
        <p className="mt-0.5 text-sm text-foreground-muted">
          {song.releaseTitle !== song.title && `${song.releaseTitle} · `}
          {formatReleaseDate(song.releaseDate, lang)} · {formatDuration(song.durationMs)}
        </p>
      </div>
      <ListenLinks
        spotify={song.url}
        appleMusic={song.appleMusicUrl}
        className="w-full pl-12 sm:w-auto sm:pl-0"
      />
    </li>
  );
}
