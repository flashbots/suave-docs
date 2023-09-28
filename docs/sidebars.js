module.exports = {
  docs: [
    {
      type: 'category',
      label: '👋 Welcome',
      collapsed: false,
      link: {type: 'doc', id: 'index'},
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
        'how-to/run-suave',
      ],
    },
    {
      type: 'category',
      label: '🤖 Technical Details',
      collapsed: false,
      link: {type: 'doc', id: 'technical-details/index'},
      items: [
        {
          type: 'category',
          label: 'Builder Solidity',
          link: {type: 'doc', id: 'technical-details/builder-solidity/index'},
          items: [
            'technical-details/builder-solidity/worked-examples/mev-share',
          ],
        },
        {
          type: 'category',
          label: 'Confidentiality',
          link: {type: 'doc', id: 'technical-details/confidential-computation/index'},
          items: [
            'technical-details/confidential-computation/apis',
          ],
        },
        {
          type: 'category',
          label: 'Precompiles',
          link: {type: 'doc', id: 'technical-details/precompiles/index'},
          items: [
            'technical-details/precompiles/write-your-own',
          ],
        },
        'technical-details/MEVM',
      ],
    },
    {
      type: 'category',
      label: '⚡ Understanding MEV',
      collapsed: false,
      link: {type: 'doc', id: 'understand/index'},
      items: [
        'understand/meaning',
        'understand/welfare',
        'understand/power'
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
