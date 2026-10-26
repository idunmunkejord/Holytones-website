// Regenerates lib/music-catalogue.json from the Holytones artist on Spotify.
//
//   SPOTIFY_CLIENT_ID=... SPOTIFY_CLIENT_SECRET=... npm run sync:music
//
// Uses the Spotify Web API with an app's client credentials (no user sign-in). The weekly
// .github/workflows/sync-spotify.yml job runs this and commits the file when it changes.
// Nothing is written unless every request succeeds, so a failed run leaves the site as it was.
import { readFile, writeFile } from "node:fs/promises";

const outputPath = new URL("../lib/music-catalogue.json", import.meta.url);
const api = "https://api.spotify.com/v1";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
if (!clientId || !clientSecret) {
  console.error("Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET.");
  process.exit(1);
}

const existing = JSON.parse(await readFile(outputPath, "utf8"));
const { artistId } = existing;

async function getToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  if (!response.ok) throw new Error(`Spotify token request failed: ${response.status} ${await response.text()}`);
  return (await response.json()).access_token;
}

const token = await getToken();

async function get(url) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const response = await fetch(url.startsWith("http") ? url : `${api}${url}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 429) {
      const wait = Number(response.headers.get("retry-after") ?? 2);
      await new Promise((resolve) => setTimeout(resolve, wait * 1000));
      continue;
    }
    if (!response.ok) throw new Error(`GET ${url} failed: ${response.status} ${await response.text()}`);
    return response.json();
  }
  throw new Error(`GET ${url} kept being rate limited`);
}

// Follows Spotify's paging links until every item is collected.
async function getAll(url) {
  const items = [];
  for (let next = url; next; ) {
    const page = await get(next);
    items.push(...page.items);
    next = page.next;
  }
  return items;
}

// Spotify gives some dates as just a year or year-month.
function fullDate(date) {
  return date.length === 4 ? `${date}-01-01` : date.length === 7 ? `${date}-01` : date;
}

function largestImage(images) {
  return [...images].sort((a, b) => (b.width ?? 0) - (a.width ?? 0))[0]?.url ?? "";
}

const summaries = await getAll(`/artists/${artistId}/albums?include_groups=album,single&limit=10`);

const releases = [];
for (const summary of summaries) {
  const album = await get(`/albums/${summary.id}`);
  const tracks = [...album.tracks.items];
  if (album.tracks.next) tracks.push(...(await getAll(album.tracks.next)));

  releases.push({
    id: album.id,
    title: album.name,
    type: album.album_type === "single" ? "single" : "album",
    releaseDate: fullDate(album.release_date),
    url: album.external_urls.spotify,
    cover: largestImage(album.images),
    tracks: tracks.map((track) => ({
      id: track.id,
      title: track.name,
      durationMs: track.duration_ms,
      url: track.external_urls.spotify,
    })),
  });
}

if (releases.length === 0) throw new Error("Spotify returned no releases; keeping the current catalogue.");

releases.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate) || a.title.localeCompare(b.title));
await writeFile(outputPath, `${JSON.stringify({ ...existing, releases }, null, 2)}\n`);
console.log(`Wrote ${releases.length} releases.`);
