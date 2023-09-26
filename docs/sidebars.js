module.exports = {
  docs: [
    {
      type: 'category',
      label: '👋 Welcome',
      collapsed: false,
      link: {type: 'doc', id: 'welcome'},
      items: [
        'design-goals',
      ],
    },
    {
      type: 'category',
      label: '🥷 How To',
      collapsed: false,
      link: {type: 'doc', id: 'how-to/index'},
      items: [
        'how-to/setup-suave',
      ],
    },
    {
      type: 'category',
      label: '🤖 Technical Details',
      collapsed: false,
      link: {type: 'doc', id: 'reference/index'},
      items: [
        {
          type: 'category',
          label: 'Builder Solidity',
          link: {type: 'doc', id: 'reference/builder-solidity/index'},
          items: [
            'reference/builder-solidity/worked-examples/mev-share',
          ],
        },
        {
          type: 'category',
          label: 'Confidentiality',
          link: {type: 'doc', id: 'reference/confidential-computation/index'},
          items: [
            'reference/confidential-computation/apis',
          ],
        },
        'reference/precompiles',
        'reference/MEVM',
      ],
    },
    {
      type: 'category',
      label: '⚡ Understanding MEV',
      collapsed: false,
      link: {type: 'doc', id: 'understand/index'},
      items: [
        'understand/meaning',
        'understand/fairness',
      ],
    },
    {
      type: 'category',
      label: '🤼 Join Us',
      link: {type: 'doc', id: 'join/joining-suave'},
      items: [
        'join/code-of-conduct',
      ],
    },
    {
      type: 'link',
      label: 'Forum',
      href: 'https://collective.flashbots.net/',
    },
    {
      type: 'link',
      href: 'https://github.com/flashbots/suave-geth',
      label: 'GitHub',
    }
  ],
};
