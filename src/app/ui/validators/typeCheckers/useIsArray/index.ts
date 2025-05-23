import { ProvidedCollectionIsNotArray } from '@guards/exceptions/ProvidedCollectionIsNotArray'
import { ValueObject } from '../../abstracts/valueObject/ValueObject'

export class useIsArray<T extends unknown[]> extends ValueObject<unknown[]> {
  constructor(public readonly collection: T) {
    super(collection)

    this.ensureCollectionIsAnArray(collection)
  }

  private ensureCollectionIsAnArray<T extends unknown[]>(collection: T): collection is T {
    const checkCollectionIsArray = Array.isArray(collection)
    if (!checkCollectionIsArray && this.ensureValueIsNotNull(collection)) {
      throw new ProvidedCollectionIsNotArray(collection)
    }

    return checkCollectionIsArray
  }
}
