import { describe, it, expect } from 'vitest'
import { TestFixtureClass } from './fixtures'
import { $isEmpty, $isUndefinedOrNull, type $IFn } from './configuration'
import { UndefinedIsNotAcceptedValue } from '@guards/exceptions/UndefinedIsNotAcceptedValue'
import { EmptyValueIsNotAllowed } from '@guards/exceptions/EmptyValueIsNotAllowed'

const $fn: $IFn = (value: unknown): boolean => {
  new TestFixtureClass(value)
  return true
}
describe('valueObject validator class', () => {
  it('should throw an error when provided value is undefined or null', () => {
    const fn = () => $fn($isUndefinedOrNull)
    expect(fn).toThrow(`${$isUndefinedOrNull} is not accepted value`)
    expect(fn).toThrowError(UndefinedIsNotAcceptedValue)
  })

  it('should throw an error when provided value is empty', () => {
    const fn = () => $fn($isEmpty)
    expect(fn).toThrow(`Empty value is not allowed`)
    expect(fn).toThrowError(EmptyValueIsNotAllowed)
  })
})
