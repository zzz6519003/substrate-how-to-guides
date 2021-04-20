/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Substrate How-to Guides',
  tagline: 'A modular approach to learning Substrate for all levels',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'paritytech', // Usually your GitHub org/user name.
  projectName: 'substrate', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Welcome',
      logo: {
        alt: 'My Site Logo',
        src: 'img/substrate.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'How-to Guides',
        },
        {to: '/blog', label: 'Seminar Archives', position: 'left'}, // visual candy
        {
          href: 'https://github.com/sacha-l/substrate-how-to-guides',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn Substrate',
          items: [
            {
              label: 'How-to Guides',
              to: '/docs/intro',
            },
            {
              label: 'Seminar Archives',   // visual candy
              to: '/docs/blog',
            },
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
