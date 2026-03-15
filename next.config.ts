import type { NextConfig } from "next";

// GitHub Pages typically serves the site under https://<org>.github.io/<repo>/
// so we need to set the correct basePath/assetPrefix when building in CI.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better for static hosting
  basePath,
  assetPrefix: basePath || undefined,
  // Generate static HTML for GitHub Pages deployment
  // API routes are not supported in static export - data is pre-fetched at build time
};

export default nextConfig;
