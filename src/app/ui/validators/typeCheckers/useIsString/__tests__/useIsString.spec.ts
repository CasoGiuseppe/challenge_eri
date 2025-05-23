import { describe, it, expect } from 'vitest'
import { $isFoo, $isNumber, type $IFn } from './configuration'
import { useIsString } from '..'
import { NotCorrectTypeIsDetected } from '@guards/exceptions/NotCorrectTypeIsDetected'

const $fn: $IFn = (value: any): boolean => {
  new useIsString(value)
  return true
}
describe('useIsString validator class', () => {
  it('should throw an error when provided value is not a string', () => {
    const fn = () => $fn($isNumber)
    expect(fn).toThrow(`${$isNumber} has not correct type`)
    expect(fn).toThrowError(NotCorrectTypeIsDetected)
  })

  it('should return true if provided value is a String type', () => {
    const fn = () => $fn($isFoo)
    expect(fn).toBeTruthy()
  })
})
