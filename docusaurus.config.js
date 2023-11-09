/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
require('dotenv').config()
const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @returns {Promise<import('@docusaurus/types').Config>} */
module.exports = async function createConfigAsync() {
  return {
    title: 'SUAVE',
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
        },
        colorMode: {
          defaultMode: 'light',
        },
        prism: {
          theme: lightTheme,
          darkTheme: darkTheme,
          additionalLanguages: ['solidity']
        },
        docs: {
          sidebar: {
            hideable: true
          }
        },
        navbar: {
          title: 'SUAVE',
          logo: {
            alt: 'Flashbots Logo',
            src: 'img/logo.png',
          },
          items: [
            {
              href: 'https://github.com/flashbots/suave-geth',
              label: 'GitHub',
              position: 'right',
            },
          ],
        }

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
            editUrl: "https://github.com/flashbots/suave-docs/edit/main/",
            showLastUpdateTime: true,
            remarkPlugins: [(await import('remark-math')).default],
            rehypePlugins: [(await import('rehype-katex')).default],
          },
          theme: {
            customCss: require.resolve("./src/scss/custom.scss")
          },
        }),
      ],
    ],
    plugins: [
      'docusaurus-plugin-sass',
      [
        "docusaurus2-dotenv",
        {
          path: "./.env", // The path to your environment variables.
          safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
          systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
          silent: false, //  If true, all warnings will be suppressed
          expand: false, // Allows your variables to be "expanded" for reusability within your .env file
          defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
        },
      ],
    ],
  }
}
