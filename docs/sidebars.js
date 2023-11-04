module.exports = {
  docs: [
    {
      type: 'category',
      label: '👋 Welcome',
      collapsed: false,
      link: { type: 'doc', id: 'index' },
      items: [
        'technical/specs/rigil/glossary',
        'what-is-suave',
        'novel-use-cases',
      ],
    },
    {
      type: 'category',
      label: '🛠️ How To',
      collapsed: false,
      link: { type: 'doc', id: 'how-to/index' },
      items: [
        {
          type: 'category',
          label: 'Run SUAVE Locally',
          link: { type: 'doc', id: 'how-to/run-suave/index' },
          items: [
            'how-to/run-suave/with-docker',
            'how-to/run-suave/build-yourself'
          ]
        },
        {
          type: 'category',
          label: 'Interact with SUAVE',
          link: { type: 'doc', id: 'how-to/interact-with-suave/index' },
          items: [
            `how-to/interact-with-suave/golang-sdk`,
            `how-to/interact-with-suave/typescript-sdk`,
            'how-to/interact-with-suave/fund-local-account',
            'how-to/interact-with-suave/deploy-a-contract',
            'how-to/interact-with-suave/deploy-and-test-example-suapp'
          ]
        },
        {
          type: 'category',
          label: 'Create Contracts',
          items: [
            'how-to/create-contracts/deploy-custom', 'how-to/create-contracts/confidential', 'how-to/create-contracts/ofa'
          ]
        },
        'how-to/create-precompiles'
      ],
    },
    {
      type: 'category',
      label: '🤖 Technical Specs',
      collapsed: false,
      link: { type: 'doc', id: 'technical/README' },
      items: [
        'technical/specs/rigil/README',
        'technical/specs/rigil/kettle',
        'technical/specs/rigil/mevm',
        'technical/specs/rigil/precompiles',
        'technical/specs/rigil/confidential-data-store',
        'technical/specs/rigil/suave-chain',
      ],
    },
    // {
    //   type: 'category',
    //   label: '⚡ Understanding MEV',
    //   collapsed: false,
    //   link: { type: 'doc', id: 'understand/index' },
    //   items: [
    //     'understand/meaning',
    //     'understand/welfare',
    //     'understand/power'
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '🏴‍☠️ Join Us',
    //   link: { type: 'doc', id: 'join/joining-suave' },
    //   items: [
    //     'join/code-of-conduct',
    //   ],
    // },
    // {
    //   "Policies": [
    //     'policies/privacy', 'policies/terms-of-service', 'policies/prohibited-use-policy'
    //   ]
    // },
    {
      type: 'link',
      label: 'Forum',
      href: 'https://collective.flashbots.net/c/suave/27',
    },
    {
      type: 'link',
      href: 'https://github.com/flashbots/suave-geth',
      label: 'GitHub',
    }
  ],
};
