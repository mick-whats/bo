const { el, ex } = require('hify')
const { h2, apiBlock } = require('./parts')
const container = require('./container')

const main = el.div([
  el.p('description'),
  el.img({
    src: 'images/sample150x150.png',
    width: '150',
    class: 'uk-align-center uk-margin-remove-adjacent'
  }),

  h2('install'),
  ex.preCode(['$npm install hify'], 'shell'),
  el.p('or'),
  ex.preCode(['$yarn add hify'], 'shell'),
  h2('api'),
  apiBlock({
    title: 'api name',
    desc: 'api description',
    code: () => {
      const a = 1 + 2
      return a
    }
  })
])
module.exports = container({ main })
