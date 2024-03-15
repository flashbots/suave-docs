/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
require('dotenv').config();
const { themes } = require('prism-react-renderer');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @returns {Promise<import('@docusaurus/types').Config>} */
module.exports = async function createConfigAsync() {
  return {
    title: 'SUAVE Docs',
    tagline: 'Illuminate, Democratize, Distribute',
    baseUrl: process.env.BASE_URL,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'flashbots',
    projectName: 'docs',
    url: process.env.TARGET_URL,
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        algolia: {
          apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
          indexName: process.env.ALGOLIA_INDEX_NAME,
          appId: process.env.ALGOLIA_APP_ID,
          contextualSearch: false,
        },
        colorMode: {
          defaultMode: 'light',
        },
        prism: {
          theme: lightTheme,
          darkTheme,
          additionalLanguages: ['solidity', 'typescript', 'bash', 'json', 'javascript', 'yaml'], // https://docusaurus.io/docs/markdown-features/code-blocks#supported-languages
        },
        docs: {
          sidebar: {
            hideable: true,
          },
        },
        navbar: {
          title: 'SUAVE Docs',
          logo: {
            alt: 'Flashbots Logo',
            src: 'img/logo.png',
          },
          items: [
            {
              href: 'https://github.com/orgs/flashbots/repositories?q=suave',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        image: 'https://suave-alpha.flashbots.net/img/social-preview-3.jpg',
      }),
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./docs/sidebars.js'),
            // Please change this to your repo.
            routeBasePath: '/',
            id: 'docs',
            editUrl: 'https://github.com/flashbots/suave-docs/edit/main/',
            showLastUpdateTime: true,
            remarkPlugins: [(await import('remark-math')).default],
            rehypePlugins: [(await import('rehype-katex')).default],
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async function tailwindcssSupport(context, options) {
        return {
          name: 'docusaurus-tailwindcss',
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push('tailwindcss/nesting');
            postcssOptions.plugins.push(tailwindcss);
            postcssOptions.plugins.push(autoprefixer);
            return postcssOptions;
          },
        };
      },
    ],
  };
};
