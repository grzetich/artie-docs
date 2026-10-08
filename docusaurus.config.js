// @ts-check
// Compare against the config create-docusaurus generates. Keep the generated
// structure and copy these values in; if the build rejects a key, keep the
// generated version of that key.

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'artie-cli',
  tagline: 'Check how well your API docs support AI code generation',
  favicon: 'img/favicon.ico',

  url: 'https://grzetich.github.io',
  baseUrl: '/artie-docs/',
  organizationName: 'grzetich',
  projectName: 'artie-docs',
  trailingSlash: false,

  // Broken links fail the build, so CI catches them before merge.
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Docs-only site: the docs are the home page.
          // Delete src/pages/index.js from the scaffold or the build will conflict.
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/grzetich/artie-docs/tree/main/',
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'artie-cli',
        items: [
          { href: 'https://pypi.org/project/artie-cli/', label: 'PyPI', position: 'right' },
          { href: 'https://github.com/grzetich/artie-cli', label: 'Source', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Ed Grzetich. Built with Docusaurus.`,
      },
    }),
};

export default config;
