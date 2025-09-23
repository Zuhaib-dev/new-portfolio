// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://zuhaibrashid.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Optional: Block resume PDF from appearing separately
      {
        userAgent: '*',
        disallow: '/Zuhaib%20Rashid.pdf',
      },
    ],
  },
};
