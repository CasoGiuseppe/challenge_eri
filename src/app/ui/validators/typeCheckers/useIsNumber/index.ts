import { ValueObject } from '../../abstracts/valueObject/ValueObject'
import { NotCorrectTypeIsDetected } from '@validators/guards/exceptions/NotCorrectTypeIsDetected'

export class useIsNumber extends ValueObject<number> {
  constructor(public readonly value: number) {
    super(value)

    this.ensureIsString<string>(value)
  }

  private ensureIsString<T>(value: unknown): value is T {
    const checkIsString = typeof value === 'number'
    if (!checkIsString && this.ensureValueIsNotNull(value)) {
      throw new NotCorrectTypeIsDetected(value)
    }

    return checkIsString
  }
}
