/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.zuhaibrashid.com',
  generateRobotsTxt: true,          // creates robots.txt automatically
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  // add the resume PDF explicitly so it appears in the sitemap
  additionalPaths: async (config) => {
    const paths = [];
    // use config.transform so next-sitemap formats the entry correctly
    paths.push(await config.transform(config, '/Zuhaib%20Rashid.pdf', 'monthly', 0.8));
    return paths;
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ],
    // optional: make sure robots.txt references the sitemap
    additionalSitemaps: [
      'https://www.zuhaibrashid.com/sitemap.xml'
    ]
  }
}
