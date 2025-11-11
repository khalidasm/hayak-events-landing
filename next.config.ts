import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Optimize raster images (JPG, PNG) to modern formats
    formats: ['image/avif', 'image/webp'],
    // Allow SVG images (they're already optimized as vector graphics)
    // SVGs with unoptimized prop won't be processed, preventing rasterization
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
