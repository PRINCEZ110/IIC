import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Repo lives in a subfolder of a larger synced directory; pin the root
    // so the dev server does not infer the parent folder as project root.
    root: __dirname,
  },
};

export default nextConfig;
