const { el, uk, cdn } = require('hify')
const navbar = require('./navbar')
const footer = el.div({ class: 'uk-background-muted' }, [
  el.p({ style: { 'text-align': 'center' } }, [
    el.small('&copy; {{__year}} {{owner}}')
  ])
])

module.exports = ({ main, side }) => {
  const _container = uk.container({
    title: '{{name:pascal}}',
    main,
    side,
    header: navbar,
    footer
  })
  _container.addAssets(cdn.highlightJs_darcula)
  return _container
}
