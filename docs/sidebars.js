module.exports = {
  docs: [
    {
      type: 'category',
      label: '👋 Welcome',
      link: {type: 'doc', id: 'index'},
      items: [
        'design-goals',
      ],
    },
    {
      type: 'category',
      label: '🐥 Tutorials',
      link: {type: 'doc', id: 'tutorials/index'},
      items: [
        'tutorials/holder'
      ],
    },
    {
      type: 'category',
      label: '🥷 How To',
      link: {type: 'doc', id: 'how-to/index'},
      items: [
        'how-to/setup-suave',
      ],
    },
    {
      type: 'category',
      label: '🤖 Technical Details',
      link: {type: 'doc', id: 'reference/index'},
      items: [
        'reference/builder-solidity',
        'reference/confidential-computation',
        'reference/precompiles',
        'reference/MEVM',
      ],
    },
    {
      type: 'category',
      label: '⚡ Understanding MEV',
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
      "Policies": [
        'policies/privacy','policies/terms-of-service', 'policies/prohibited-use-policy'
      ]
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
