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
      label: '🥷 How To',
      collapsed: false,
      link: {type: 'doc', id: 'how-to/index'},
      items: [
        'how-to/run-suave', 'how-to/write-builder-solidity', 'how-to/add-a-precompile'
      ],
    },
    {
      type: 'category',
      label: '🔑 Key Concepts',
      collapsed: false,
      link: {type: 'doc', id: 'key-concepts/index'},
      items: [
        'key-concepts/builder-solidity', 'key-concepts/precompiles', 'key-concepts/confidential-computation',
      ],
    },
    {
      type: 'category',
      label: '🤖 Technical Specs',
      collapsed: false,
      link: {type: 'doc', id: 'technical/README'},
      items: [
        'technical/specs/rigil/suave-chain', 'technical/specs/rigil/mevm', 'technical/specs/rigil/confidential-data-store', 'technical/specs/rigil/precompiles', 'technical/specs/rigil/computor', 'technical/specs/rigil/bridge',
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
      label: '🏴‍☠️ Join Us',
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
