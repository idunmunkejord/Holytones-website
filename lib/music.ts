// Holytones releases, read from lib/music-catalogue.json. New releases are added to that file by
// hand; scripts/sync-apple-music.mjs then fills in the Apple Music links.
import catalogue from "@/lib/music-catalogue.json";

// `url` is the Spotify link.
export type Song = {
  id: string;
  title: string;
  durationMs: number;
  url: string;
  appleMusicUrl?: string;
};

export type Release = {
  id: string;
  title: string;
  type: "album" | "single";
  releaseDate: string;
  url: string;
  appleMusicUrl?: string;
  cover: string;
  tracks: Song[];
};

export type ListedSong = Song & { releaseDate: string; releaseTitle: string };

// Newest first.
export const releases = (catalogue.releases as Release[])
  .slice()
  .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));

export const albums = releases.filter((release) => release.type === "album");
export const singles = releases.filter((release) => release.type === "single");

// Every song once, newest first. A song released both as a single and on an album is listed with
// its newest release.
export const allSongs: ListedSong[] = (() => {
  const seen = new Set<string>();
  const songs: ListedSong[] = [];
  for (const release of releases) {
    for (const track of release.tracks) {
      const key = track.title.trim().toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      songs.push({ ...track, releaseDate: release.releaseDate, releaseTitle: release.title });
    }
  }
  return songs;
})();

export function formatDuration(ms: number) {
  const seconds = Math.round(ms / 1000);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

export function formatReleaseDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
