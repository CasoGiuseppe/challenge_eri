/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect, it } from 'vitest'
import { ValueNotFoundInUnionTypes } from '@validators/guards/exceptions/ValueNotFoundInUnionTypes'

export const expectedCorrectValue = (component: any, prop: string, wrongValue: unknown) => {
  it('throws value error when value is not valid', () => {
    const $validator = component.props[prop].validator
    const $failed = () => $validator(wrongValue)

    expect($failed).toThrow(`${wrongValue} not found in provided suitable collection`)
    expect($failed).toThrowError(ValueNotFoundInUnionTypes)
  })
}
