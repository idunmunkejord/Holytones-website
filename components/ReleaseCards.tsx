import Image from "next/image";
import { formatDuration, formatReleaseDate, type ListedSong, type Release } from "@/lib/music";

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
          <span className="text-xs uppercase tracking-[0.18em] text-foreground">Whole album:</span>
          <ListenLinks spotify={album.url} appleMusic={album.appleMusicUrl} />
        </div>
      </div>
    </details>
  );
}

export function SingleCard({ single }: { single: Release }) {
  return (
    <div className="flex flex-wrap items-center gap-5 border-b border-border-soft py-5 first:pt-0 last:border-b-0">
      <Cover release={single} size={72} />
      <div className="min-w-0 flex-1">
        <h3 className="font-serif-display text-xl text-foreground">{single.title}</h3>
        <p className="mt-1 text-sm text-foreground-muted">{formatReleaseDate(single.releaseDate)}</p>
      </div>
      <ListenLinks spotify={single.url} appleMusic={single.appleMusicUrl} />
    </div>
  );
}

export function SongRow({ song, index }: { song: ListedSong; index: number }) {
  return (
    <li className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-border-soft py-4 last:border-b-0 sm:gap-x-6">
      <span className="w-8 font-serif-display text-lg text-foreground-muted/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-serif-display text-xl text-foreground">{song.title}</p>
        <p className="mt-0.5 text-sm text-foreground-muted">
          {song.releaseTitle !== song.title && `${song.releaseTitle} · `}
          {formatReleaseDate(song.releaseDate)} · {formatDuration(song.durationMs)}
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
