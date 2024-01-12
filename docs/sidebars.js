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
        'tutorials/suave-standard-library',
        'tutorials/build-suapps',
        'tutorials/confidential-compute-requests',
        'tutorials/create-precompiles',
      ]
    },
    {
      type: 'category',
      label: '🛠️ Resources',
      collapsed: false,
      link: {type: 'doc', id: 'resources/index'},
      items: [
        {
          type: 'category',
          label: 'How SUAVE Extends Solidity',
          collapsed: true,
          link: {type: 'doc', id: 'concepts/index'},
          items: [
            'concepts/block-building',
            'concepts/confidential-computation',
            'concepts/confidential-data-storage',
            'concepts/mev-supplychain-interface'
          ],
        },
        'resources/rigil',
        'resources/forge',
        'resources/golang-sdk',
        'resources/typescript-sdk'
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
