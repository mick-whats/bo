const TestBoip = require('..')

test('TestBoip hello', () => {
  const mick = new TestBoip('Mick')
  expect(mick.hello()).toBe('Hello Mick')
})
