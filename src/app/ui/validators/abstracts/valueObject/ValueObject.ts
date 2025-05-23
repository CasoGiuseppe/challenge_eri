import { EmptyValueIsNotAllowed } from '@validators/guards/exceptions/EmptyValueIsNotAllowed'
import { UndefinedIsNotAcceptedValue } from '@validators/guards/exceptions/UndefinedIsNotAcceptedValue'

export type Primitives = string | number | boolean | Date | File | unknown[] | unknown
type Optional<T> = T | undefined | null

export abstract class ValueObject<T extends Primitives> {
  readonly value: T
  readonly ccc: Optional<T>

  constructor(value: T) {
    this.value = value

    this.ensureValueIsNotNull(value)
    this.ensureValueIsNotEmpty(value)
  }

  public ensureValueIsNotNull<T>(value: T): value is NonNullable<T> {
    const checkNullValue = value === null || value === undefined
    if (checkNullValue) {
      throw new UndefinedIsNotAcceptedValue(value)
    }
    return !checkNullValue
  }

  private ensureValueIsNotEmpty(value: unknown): value is '' {
    const checkEmtyValue = value === ''
    if (checkEmtyValue) {
      throw new EmptyValueIsNotAllowed()
    }
    return checkEmtyValue
  }
}
