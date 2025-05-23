import { ValueObject } from '../../abstracts/valueObject/ValueObject'
import { NotCorrectTypeIsDetected } from '@validators/guards/exceptions/NotCorrectTypeIsDetected'

export class useIsString extends ValueObject<string> {
  constructor(public readonly value: string) {
    super(value)

    this.ensureIsString<string>(value)
  }

  private ensureIsString<T>(value: unknown): value is T {
    const checkIsString = typeof value === 'string'
    if (!checkIsString && this.ensureValueIsNotNull(value)) {
      throw new NotCorrectTypeIsDetected(value)
    }

    return checkIsString
  }
}
