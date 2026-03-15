import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better for static hosting
  // Generate static HTML for GitHub Pages deployment
  // API routes are not supported in static export - data is pre-fetched at build time
};

export default nextConfig;
