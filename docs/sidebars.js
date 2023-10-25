module.exports = {
  docs: [
    {
      type: 'category',
      label: '👋 Welcome',
      collapsed: false,
      link: {type: 'doc', id: 'index'},
      items: [
        'novel-use-cases',
      ],
    },
    {
      type: 'category',
      label: '🥷 How To',
      collapsed: false,
      link: {type: 'doc', id: 'how-to/index'},
      items: [
        'how-to/run-suave', 'how-to/send-transactions', 'how-to/create-contracts', 'how-to/create-precompiles'
      ],
    },
    {
      type: 'category',
      label: '🤖 Technical Specs',
      collapsed: false,
      link: {type: 'doc', id: 'technical/README'},
      items: [
        'technical/specs/rigil/README', 'technical/specs/rigil/suave-chain', 'technical/specs/rigil/mevm', 'technical/specs/rigil/confidential-data-store', 'technical/specs/rigil/precompiles', 'technical/specs/rigil/computor', 'technical/specs/rigil/bridge',
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
