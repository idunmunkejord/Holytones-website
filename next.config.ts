import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    // Cloudflare's image resizing for this site fails (error 1101), leaving photos blank on the
    // live site, so serve the original files instead. They are all 250 KB or less.
    unoptimized: true,
  },
  // The privacy policy moved to the Norwegian /personvern page.
  async redirects() {
    return [{ source: "/privacy", destination: "/personvern", permanent: true }];
  },
};

export default nextConfig;
