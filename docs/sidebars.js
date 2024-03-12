module.exports = {
  docs: [
    {
      type: 'category',
      label: '👋 Welcome',
      collapsed: false,
      link: { type: 'doc', id: 'index' },
      items: [
        'what-is-suave',
        'what-to-build',
        {
          type: 'link',
          label: 'Forum',
          href: 'https://collective.flashbots.net/c/suave/27',
        },
      ],
    },
    {
      type: 'category',
      label: '🗺️ Concepts',
      collapsed: false,
      link: { type: 'doc', id: 'concepts/index' },
      items: [
        'technical/specs/rigil/mevm',
        'technical/specs/rigil/precompiles',
        'technical/specs/rigil/confidential-data-store',
        'concepts/confidential-computation',
        'concepts/block-building',
        'concepts/mev-supplychain-interface',
      ]
    },
    {
      type: 'category',
      label: '📚 Tutorials',
      collapsed: false,
      link: { type: 'doc', id: 'tutorials/index' },
      items: [
        'tutorials/run-suave',
        'tutorials/deploy-contracts',
        'tutorials/suave-standard-library',
        'tutorials/build-suapps',
        'tutorials/confidential-compute-requests',
        'tutorials/create-precompiles',
        'concepts/confidential-data-storage',
      ]
    },
    {
      type: 'category',
      label: '🛠️ Tools',
      collapsed: false,
      link: { type: 'doc', id: 'resources/index' },
      items: [
        'resources/rigil',
        'resources/forge',
        'resources/golang-sdk',
        'resources/typescript-sdk'
      ],
    },
    {
      type: 'category',
      label: '🔬 Advanced',
      collapsed: true,
      link: { type: 'doc', id: 'technical/README' },
      items: [
        'technical/specs/rigil/README',
        'technical/specs/rigil/kettle',
        'technical/specs/rigil/suave-chain',
        'technical/specs/rigil/glossary',
      ],
    },

    // {
    //   type: 'link',
    //   href: 'https://github.com/orgs/flashbots/repositories?q=suave',
    //   label: 'GitHub',
    // },
  ],
};
