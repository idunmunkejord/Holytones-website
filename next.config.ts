import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },
  // The privacy policy moved to the Norwegian /personvern page.
  async redirects() {
    return [{ source: "/privacy", destination: "/personvern", permanent: true }];
  },
};

export default nextConfig;
