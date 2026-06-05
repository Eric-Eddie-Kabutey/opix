import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Blog post covers + author avatars are served from Unsplash via next/image.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // The developer hub moved under /developers/*. Permanently redirect the old
  // top-level URLs so existing links, bookmarks, and search results keep working.
  async redirects() {
    return [
      { source: "/docs", destination: "/developers/docs", permanent: true },
      { source: "/docs/:path*", destination: "/developers/docs/:path*", permanent: true },
      { source: "/api-reference", destination: "/developers/api-reference", permanent: true },
      { source: "/sandbox", destination: "/developers/sandbox", permanent: true },
      { source: "/status", destination: "/developers/status", permanent: true },
    ];
  },
};

export default nextConfig;
