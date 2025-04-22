module.exports = {
  siteUrl: 'https://manuscriptedit.com',
  generateRobotsTxt: true,
  sitemapSize: 7000, // splits large sitemaps into multiple files
  exclude: ['/server-sitemap.xml'], // exclude pages
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};