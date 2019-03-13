const {{name:pascal}} = require('..')

test('{{name:pascal}} hello', () => {
  const mick = new {{name:pascal}}('Mick')
  expect(mick.hello()).toBe('Hello Mick')
})