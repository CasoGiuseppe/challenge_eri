import { ValueNotFoundInUnionTypes } from '@validators/guards/exceptions/ValueNotFoundInUnionTypes'

export class useValidateTypeUnion<T extends unknown[]> {
  constructor(
    public readonly suit: T,
    public readonly value: string,
  ) {
    this.ensureTypeUnionValueExistsInSuite<T>(suit, value)
  }

  private ensureTypeUnionValueExistsInSuite<T extends unknown[]>(
    suit: T,
    value: T[number],
  ): value is T[number] {
    const checkIfValueExist = suit.includes(value)
    if (!checkIfValueExist) {
      throw new ValueNotFoundInUnionTypes(value)
    }
    return checkIfValueExist
  }
}
