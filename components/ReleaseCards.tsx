import Image from "next/image";
import { formatDuration, formatReleaseDate, type ListedSong, type Release } from "@/lib/music";

const listenLink =
  "link-underline text-xs uppercase tracking-[0.18em] text-foreground-muted hover:text-accent";

function Cover({ release, size }: { release: Release; size: number }) {
  return (
    <Image
      src={release.cover}
      alt={`${release.title} cover`}
      width={size}
      height={size}
      unoptimized
      className="shrink-0 border border-border-soft"
    />
  );
}

// An album that opens to show its songs.
export function AlbumCard({ album }: { album: Release }) {
  return (
    <details className="group border border-border-soft bg-surface">
      <summary className="flex cursor-pointer list-none items-center gap-5 p-5 sm:gap-6 sm:p-6 [&::-webkit-details-marker]:hidden">
        <Cover release={album} size={112} />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Album</p>
          <h3 className="mt-1 font-serif-display text-2xl text-foreground">{album.title}</h3>
          <p className="mt-1 text-sm text-foreground-muted">
            {formatReleaseDate(album.releaseDate)} · {album.tracks.length} songs
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-foreground-muted">
            <span className="group-open:hidden">Show songs +</span>
            <span className="hidden group-open:inline">Hide songs −</span>
          </p>
        </div>
      </summary>

      <div className="border-t border-border-soft px-5 pb-5 sm:px-6 sm:pb-6">
        <ol>
          {album.tracks.map((track, index) => (
            <li
              key={track.id}
              className="flex items-baseline gap-4 border-b border-border-soft py-3 last:border-b-0"
            >
              <span className="w-6 text-sm text-foreground-muted/60">{index + 1}</span>
              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-foreground transition-colors hover:text-accent"
              >
                {track.title}
              </a>
              <span className="text-sm text-foreground-muted">{formatDuration(track.durationMs)}</span>
            </li>
          ))}
        </ol>
        <a href={album.url} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-block ${listenLink}`}>
          Play album on Spotify
        </a>
      </div>
    </details>
  );
}

export function SingleCard({ single }: { single: Release }) {
  return (
    <a
      href={single.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 border-b border-border-soft py-5 first:pt-0 last:border-b-0"
    >
      <Cover release={single} size={72} />
      <div>
        <h3 className="font-serif-display text-xl text-foreground transition-colors group-hover:text-accent">
          {single.title}
        </h3>
        <p className="mt-1 text-sm text-foreground-muted">{formatReleaseDate(single.releaseDate)}</p>
      </div>
    </a>
  );
}

export function SongRow({ song, index }: { song: ListedSong; index: number }) {
  return (
    <li className="flex items-baseline gap-4 border-b border-border-soft py-4 last:border-b-0 sm:gap-6">
      <span className="w-8 font-serif-display text-lg text-foreground-muted/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <a
          href={song.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif-display text-xl text-foreground transition-colors hover:text-accent"
        >
          {song.title}
        </a>
        <p className="mt-0.5 text-sm text-foreground-muted">
          {song.releaseTitle !== song.title && `${song.releaseTitle} · `}
          {formatReleaseDate(song.releaseDate)}
        </p>
      </div>
      <span className="text-sm text-foreground-muted">{formatDuration(song.durationMs)}</span>
    </li>
  );
}
