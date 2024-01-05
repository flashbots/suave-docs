module.exports = {
  docs: [
    {
      type: 'category',
      label: '👋 Welcome',
      collapsed: false,
      link: {type: 'doc', id: 'index'},
      items: [
        'what-is-suave',
        'what-to-build',
        'technical/specs/rigil/glossary',
      ],
    },
    {
      type: 'category',
      label: '🗺️ Tutorials',
      collapsed: false,
      link: {type: 'doc', id: 'tutorials/index'},
      items: [
        'tutorials/run-suave',
        'tutorials/deploy-contracts',
        'tutorials/send-transactions',
        'tutorials/build-suapps',
        'tutorials/create-precompiles',
      ]
    },
    {
      type: 'category',
      label: '🛠️ Resources',
      collapsed: false,
      link: {type: 'doc', id: 'resources/index'},
      items: [
        'resources/rigil',
        'resources/forge',
        {
          type: 'category',
          label: 'SDK',
          collapsed: true,
          link: {type: 'doc', id: 'resources/sdks/index'},
          items: [
            'resources/sdks/golang-sdk',
            'resources/sdks/typescript-sdk',
          ],
        },
        {
          type: 'category',
          label: 'SUAVE Solidity',
          collapsed: true,
          link: {type: 'doc', id: 'resources/suave-solidity/index'},
          items: [
            'resources/suave-solidity/block-building-interface',
            'resources/suave-solidity/confidenital-computation',
            'resources/suave-solidity/confidential-data-storage',
            'resources/suave-solidity/mev-supplychain-interface',
            'resources/suave-solidity/suave-standard-library',
          ],
        }
      ],
    },
    {
      type: 'category',
      label: '🤖 Technical Specs',
      collapsed: false,
      link: {type: 'doc', id: 'technical/README'},
      items: [
        'technical/specs/rigil/README',
        'technical/specs/rigil/kettle',
        'technical/specs/rigil/mevm',
        'technical/specs/rigil/precompiles',
        'technical/specs/rigil/confidential-data-store',
        'technical/specs/rigil/suave-chain',
      ],
    },
    {
      type: 'link',
      label: 'Forum',
      href: 'https://collective.flashbots.net/c/suave/27',
    },
    {
      type: 'link',
      href: 'https://github.com/orgs/flashbots/repositories?q=suave',
      label: 'GitHub',
    },
  ],
};
