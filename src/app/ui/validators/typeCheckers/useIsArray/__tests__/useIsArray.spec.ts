import { describe, it, expect } from 'vitest'
import { useIsArray } from '..'
import { $isWrongArray, $suitableCollection, type $IFn } from './configuration'
import { ProvidedCollectionIsNotArray } from '@guards/exceptions/ProvidedCollectionIsNotArray'

const $fn: $IFn = (suit: unknown[] | any): boolean => {
  new useIsArray(suit)
  return true
}

describe('useIsArray validator class', () => {
  it('should throw an error when provided suit is not an Array', () => {
    const fn = () => $fn($isWrongArray)
    expect(fn).toThrow(`Provided value ${JSON.stringify($isWrongArray)} is not allowed Array type`)
    expect(fn).toThrowError(ProvidedCollectionIsNotArray)
  })

  it('should return true if provided suit is an Array type', () => {
    const fn = () => $fn($suitableCollection)
    expect(fn).toBeTruthy()
  })
})
