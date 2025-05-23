import { expect, it } from 'vitest'
import type { TestPropType } from '../types'
import { NotCorrectTypeIsDetected } from '@validators/guards/exceptions/NotCorrectTypeIsDetected'

export const expectedCorrectType = (component: TestPropType, prop: string, wrongType: unknown) => {
  it('throws type error when type is not valid', () => {
    const $validator = component.props[prop].validator
    const $failed = () => $validator(wrongType)

    expect($failed).toThrow(`${wrongType} has not correct type`)
    expect($failed).toThrowError(NotCorrectTypeIsDetected)
  })
}
