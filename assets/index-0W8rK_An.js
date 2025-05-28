import { V as ValueObject } from './index-DusSqiUz.js';

class ValueNotFoundInUnionTypes extends Error {
  constructor(value) {
    super();
    this.value = value;
    this.name = "ValueNotFoundInUnionTypes";
    this.message = `${this.value} not found in provided suitable collection`;
  }
}

class useValidateTypeUnion {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.ensureTypeUnionValueExistsInSuite(suit, value);
  }
  ensureTypeUnionValueExistsInSuite(suit, value) {
    const checkIfValueExist = suit.includes(value);
    if (!checkIfValueExist) {
      throw new ValueNotFoundInUnionTypes(value);
    }
    return checkIfValueExist;
  }
}

class ProvidedCollectionIsNotArray extends Error {
  constructor(collection) {
    super();
    this.collection = collection;
    this.name = "ProvidedCollectionIsNotArray";
    this.message = `Provided value ${JSON.stringify(collection)} is not allowed Array type`;
  }
}

class useIsArray extends ValueObject {
  constructor(collection) {
    super(collection);
    this.collection = collection;
    this.ensureCollectionIsAnArray(collection);
  }
  ensureCollectionIsAnArray(collection) {
    const checkCollectionIsArray = Array.isArray(collection);
    if (!checkCollectionIsArray && this.ensureValueIsNotNull(collection)) {
      throw new ProvidedCollectionIsNotArray(collection);
    }
    return checkCollectionIsArray;
  }
}

export { useIsArray as a, useValidateTypeUnion as u };
