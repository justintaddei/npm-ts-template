import { expect, it } from 'vitest'
import { helloWorld } from './index'

it('should return "Hello World"', () => {
  expect(helloWorld()).toBe('Hello World')
})
