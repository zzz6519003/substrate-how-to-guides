/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Substrate How-to Guides",
  tagline: "A modular approach to learning Substrate for all levels",
  url: "https://github.com/substrate-developer-hub/substrate-how-to-guides/", // FIXME - hosted site url github pages? howto.substrate.dev ?
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "substrate-developer-hub", // Usually your GitHub org/user name.
  projectName: "substrate-how-to-guides", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Welcome",
      logo: {
        alt: "My Site Logo",
        src: "img/substrate.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "How-to Guides",
        },
        {
          href: "https://github.com/substrate-developer-hub/substrate-how-to-guides/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn Substrate",
          items: [
            {
              label: "How-to Guides",
              to: "/docs/intro",
            },
          ],
        },
      ],
      copyright: `The Substrate How-to Guides are GPL 3.0 Licensed, open source and open for contributions.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/how-to-substrate/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {

      // whether to index docs pages
      indexDocs: true,  
      docsRouteBasePath: '/docs',
      // Whether to also index the titles of the parent categories in the sidebar of a doc page.
      // 0 disables this feature.
      // 1 indexes the direct parent category in the sidebar of a doc page
      // 2 indexes up to two nested parent categories of a doc page
      indexDocSidebarParentCategories: 0
    }],
    
  ],

  themes: [
      '@saucelabs/theme-github-codeblock'
      ],

};
