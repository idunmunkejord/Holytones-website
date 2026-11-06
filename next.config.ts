import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    // Cloudflare's image resizing for this site fails (error 1101), leaving photos blank on the
    // live site, so serve the original files instead. They are all 250 KB or less.
    unoptimized: true,
  },
  async redirects() {
    return [
      // The privacy policy moved to the Norwegian /personvern page.
      { source: "/privacy", destination: "/personvern", permanent: true },
      // Earlier LØGNEN landing pages, removed in favour of /lognen-manifestering; ads may still
      // link to them.
      ...["/kampanje", "/kampanje-2", "/lognen-selvutvikling"].map((source) => ({
        source,
        destination: "/lognen-manifestering",
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
