import { BaseGuard } from '@guards/index'
export class useValidateTypeUnion<T extends unknown[]> extends BaseGuard {
  constructor(
    public readonly suit: T,
    public readonly value: string,
  ) {
    super()
    this.ensureTypeUnionValueExistsInSuite<T>(suit, value)
  }

  private ensureTypeUnionValueExistsInSuite<T extends unknown[]>(
    suit: T,
    value: T[number],
  ): value is T[number] {
    const checkIfValueExist = suit.includes(value)
    if (!checkIfValueExist) {
      const error = new Error()
      error.name = 'valueNotFoundInUnionType'
      error.message = typeof value === 'string' ? value : JSON.stringify(value)

      throw this.handleError(error).error
    }
    return checkIfValueExist
  }
}
