import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Prevents Turbopack from
  // inferring a wrong root from stray lockfiles in parent directories.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
