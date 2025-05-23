/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest'
import { useValidateTypeUnion } from '..'
import { UndefinedIsNotAcceptedValue } from '@guards/exceptions/UndefinedIsNotAcceptedValue'
import { ProvidedCollectionIsNotArray } from '@guards/exceptions/ProvidedCollectionIsNotArray'
import { ValueNotFoundInUnionTypes } from '@guards/exceptions/ValueNotFoundInUnionTypes'
import {
  $isBaz,
  $isFoo,
  $isUndefined,
  $isWrongArray,
  $suitableCollection,
  type $IFn,
} from './configuration'
import { useIsArray } from '../../typesChecker/useIsArray'
import { useIsString } from '../../typesChecker/useIsString'

const $fn: $IFn = (suit: string[] | any, value: string | undefined): boolean => {
  new useValidateTypeUnion(
    new useIsArray(suit).value as string[],
    new useIsString(value as string).value,
  )
  return true
}

describe('useValidateTypeUnion validator class', () => {
  it('should throw an error when provided value is undefined', () => {
    const fn = () => $fn([], $isUndefined)
    expect(fn).toThrow(`${$isUndefined} is not accepted value`)
    expect(fn).toThrowError(UndefinedIsNotAcceptedValue)
  })

  it('should throw an error when provided suit is not an Array type', () => {
    const fn = () => $fn($isWrongArray, $isBaz)
    expect(fn).toThrow(`Provided value ${JSON.stringify($isWrongArray)} is not allowed Array type`)
    expect(fn).toThrowError(ProvidedCollectionIsNotArray)
  })

  it('should throw an error when provided value not exist in provided suitable suit', () => {
    const fn = () => $fn($suitableCollection, $isFoo)
    expect(fn).toThrow(`${$isFoo} not found in provided suitable collection`)
    expect(fn).toThrowError(ValueNotFoundInUnionTypes)
  })

  it('should show return an value true if pass all validation', () => {
    const fn = () => $fn($suitableCollection, $isBaz)
    expect(fn).toBeTruthy()
  })
})
