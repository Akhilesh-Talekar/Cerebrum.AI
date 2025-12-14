import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        hostname: "img.logo.dev",
      },
      {
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
