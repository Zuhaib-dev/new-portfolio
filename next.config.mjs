/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed eslint.ignoreDuringBuilds - let's catch errors early
  // Removed typescript.ignoreBuildErrors - type safety is important
  // Removed images.unoptimized - enable Next.js image optimization for better performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com https://www.clarity.ms https://c.bing.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' blob: data: https://*.clarity.ms https://c.bing.com https://github-readme-stats.vercel.app https://github-readme-streak-stats.herokuapp.com https://github-readme-activity-graph.vercel.app https://github-profile-trophy.vercel.app;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://sentry.io https://*.clarity.ms https://c.bing.com;
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
