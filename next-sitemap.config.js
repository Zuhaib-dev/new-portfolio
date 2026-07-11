/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.zuhaibrashid.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => {
    const paths = [];
    paths.push(await config.transform(config, '/resume', 'monthly', 0.8));
    paths.push(await config.transform(config, '/July_2026.pdf', 'monthly', 0.8));
    return paths;
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
