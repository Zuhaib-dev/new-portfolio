/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF first, then WebP — 40-70% smaller than PNG
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 30 days on the CDN
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rydexx.netlify.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Long-lived cache for all static public assets (images, fonts, pdf, icons)
        source: "/:file+.:ext(png|jpg|jpeg|gif|webp|avif|svg|ico|pdf|woff2|woff|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com https://www.clarity.ms https://scripts.clarity.ms https://c.bing.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' blob: data: https://*.clarity.ms https://c.bing.com https://github-readme-stats.vercel.app https://github-readme-streak-stats.herokuapp.com https://github-readme-activity-graph.vercel.app https://github-profile-trophy.vercel.app https://rydexx.netlify.app;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://sentry.io https://*.clarity.ms https://c.bing.com https://github-readme-activity-graph.vercel.app;
            `.replace(/\s{2,}/g, ' ').trim()
          },
        ],
      },
    ];
  },
};

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

export default withPWA(nextConfig);
