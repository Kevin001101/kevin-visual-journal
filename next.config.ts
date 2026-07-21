import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [96, 192, 256, 384],
    minimumCacheTTL: 2678400,
    qualities: [72, 75, 78, 85],
  },
};

export default nextConfig;
