// Adds Apple Music links to the releases and songs in lib/music-catalogue.json.
//
//   npm run sync:apple-music
//
// Uses Apple's public iTunes lookup API (no key needed). Releases and songs are matched to the
// Spotify ones by title; anything not found on Apple Music simply gets no Apple Music link.
// Run it after adding a new release to the catalogue.
import { readFile, writeFile } from "node:fs/promises";

const outputPath = new URL("../lib/music-catalogue.json", import.meta.url);
const catalogue = JSON.parse(await readFile(outputPath, "utf8"));
const { appleMusic } = catalogue;

async function lookup(params) {
  const response = await fetch(`https://itunes.apple.com/lookup?${new URLSearchParams(params)}`);
  if (!response.ok) throw new Error(`Apple Music lookup failed: ${response.status}`);
  return (await response.json()).results;
}

// "Through the Valley - Single" and "Through the valley" are the same release.
function normalise(title) {
  return title
    .toLowerCase()
    .replace(/ - (single|ep)$/, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

// Apple's links include a country and a tracking parameter; without them Apple Music opens the
// visitor's own store.
function cleanUrl(url) {
  const clean = new URL(url);
  clean.pathname = clean.pathname.replace(/^\/[a-z]{2}\//, "/");
  clean.searchParams.delete("uo");
  return clean.toString();
}

const collections = [
  ...(await lookup({ id: appleMusic.artistId, entity: "album", limit: "200", country: appleMusic.country })),
  // Releases published under another artist name on Apple Music.
  ...(appleMusic.extraAlbumIds.length
    ? await lookup({ id: appleMusic.extraAlbumIds.join(","), country: appleMusic.country })
    : []),
].filter((result) => result.wrapperType === "collection");

let linkedReleases = 0;
for (const release of catalogue.releases) {
  const collection = collections.find((c) => normalise(c.collectionName) === normalise(release.title));
  if (!collection) {
    delete release.appleMusicUrl;
    for (const track of release.tracks) delete track.appleMusicUrl;
    console.warn(`Not on Apple Music: ${release.title}`);
    continue;
  }
  linkedReleases++;
  release.appleMusicUrl = cleanUrl(collection.collectionViewUrl);

  const songs = (
    await lookup({ id: String(collection.collectionId), entity: "song", country: appleMusic.country })
  ).filter((result) => result.wrapperType === "track");
  for (const track of release.tracks) {
    const song = songs.find((s) => normalise(s.trackName) === normalise(track.title));
    if (song) track.appleMusicUrl = cleanUrl(song.trackViewUrl);
    else delete track.appleMusicUrl;
  }
}

await writeFile(outputPath, `${JSON.stringify(catalogue, null, 2)}\n`);
console.log(`Linked ${linkedReleases} of ${catalogue.releases.length} releases to Apple Music.`);
