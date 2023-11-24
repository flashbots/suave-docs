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
        'technical/specs/rigil/glossary'
      ],
    },
    {
      type: 'category',
      label: '🛠️ Tutorials',
      collapsed: false,
      link: { type: 'doc', id: 'tutorials/index' },
      items: [
        'tutorials/run-suave',
        'tutorials/fund-accounts',
        'tutorials/deploy-contracts',
        'tutorials/send-transactions',
        'tutorials/create-precompiles'
      ]
    },
    {
      type: 'category',
      label: '📜 Explanations',
      collapsed: false,
      link: { type: 'doc', id: 'explanations/index' },
      items: [
        'explanations/dev-tools',
        'explanations/ecosystem',
        'explanations/forge',
        'explanations/golang-sdk',
        'explanations/typescript-sdk',
        'explanations/rpc'
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
