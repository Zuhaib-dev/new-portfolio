/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://zuhaibrashid.com", // ✅ Replace with your domain (no trailing slash)
  generateRobotsTxt: true,             // ✅ Generates robots.txt as well
  sitemapSize: 5000,                   // Split if you ever get >5000 pages
  changefreq: "weekly",                // Tell Google how often to check
  priority: 0.7,                       // Default priority for pages
};
