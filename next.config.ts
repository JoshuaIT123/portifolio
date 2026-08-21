import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Prevents Turbopack from
  // inferring a wrong root from stray lockfiles in parent directories.
  turbopack: {
    root: import.meta.dirname,
  },

  // Hide the floating dev-tools "N" button so it never overlaps content.
  // Errors still surface normally; production is unaffected either way.
  devIndicators: false,
};

export default nextConfig;
