import { helloWorld } from '../../src/index'

test('Returns Hello World', () => {
  expect(helloWorld()).toBe('Hello World')
})
