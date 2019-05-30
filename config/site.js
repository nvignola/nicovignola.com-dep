module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Nico Vignola Unpersonal Blog', // Navigation and Site Title
  titleAlt: 'Nico Vignola Unpersonal Blog', // Title for JSONLD
  description:
    "Sharing notes, thoughts, to my future self about what I don't know about web techonolgies",
  url: 'https://www.nicovignola.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://www.nicovingola.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'NicoVignolaTut', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Nico Vignola', // Author for schemaORGJSONLD
  themeColor: '#ffe883',
  backgroundColor: '#fff6ca',
  twitter: '@MrN1ck', // Twitter Username
};
