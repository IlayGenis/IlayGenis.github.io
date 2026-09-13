import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  // GitHub Pages resolves directories, not extensionless .html siblings.
  trailingSlash: true,
};

export default nextConfig;
