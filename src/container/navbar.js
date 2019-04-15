const { uk } = require('hify')
const { navLogo, navLeft, navRight } = require('./settings')

module.exports = uk.navbar({
  logo: navLogo,
  left: navLeft,
  right: navRight,
  sticky: true
})
