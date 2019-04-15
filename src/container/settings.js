const { el } = require('hify')
module.exports.navLogo = el.a({ class: 'uk-navbar-item uk-logo', href: '/' }, [
  el.img({ src: '/images/sample150x150.png', width: '64px' })
])

module.exports.navLeft = [
  ['get started', '/gettingStarted'],
  [
    'document',
    [['doc 1', '/doc1.html'], ['doc 2', '/doc2.html'], ['doc 3', '/doc3.html']]
  ],
  ['command', [['cmd 1', '/cmd1.html'], ['cmd 1', '/cmd1.html']]],
  [
    'examples',
    [
      ['example 1', '/example1.html'],
      ['example 2', '/example2.html'],
      ['example 3', '/example3.html']
    ]
  ]
]

module.exports.navRight = [
  [el.img({ src: 'images/GitHub-Mark-32px.png' }), '#TODO:githubLink']
]
