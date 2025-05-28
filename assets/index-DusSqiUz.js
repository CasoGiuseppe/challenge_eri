class EmptyValueIsNotAllowed extends Error {
  constructor() {
    super();
    this.name = "EmptyValueIsNotAllowed";
    this.message = `Empty value is not allowed`;
  }
}

class UndefinedIsNotAcceptedValue extends Error {
  constructor(key) {
    super();
    this.key = key;
    this.name = "UndefinedOrNullIsNotAcceptedValue";
    this.message = `${this.key} is not accepted value`;
  }
}

class ValueObject {
  value;
  ccc;
  constructor(value) {
    this.value = value;
    this.ensureValueIsNotNull(value);
    this.ensureValueIsNotEmpty(value);
  }
  ensureValueIsNotNull(value) {
    const checkNullValue = value === null || value === void 0;
    if (checkNullValue) {
      throw new UndefinedIsNotAcceptedValue(value);
    }
    return !checkNullValue;
  }
  ensureValueIsNotEmpty(value) {
    const checkEmtyValue = value === "";
    if (checkEmtyValue) {
      throw new EmptyValueIsNotAllowed();
    }
    return checkEmtyValue;
  }
}

class NotCorrectTypeIsDetected extends Error {
  constructor(value) {
    super();
    this.value = value;
    this.name = "NotCorrectTypeIsDetected";
    this.message = `${this.value} has not correct type`;
  }
}

class useIsString extends ValueObject {
  constructor(value) {
    super(value);
    this.value = value;
    this.ensureIsString(value);
  }
  ensureIsString(value) {
    const checkIsString = typeof value === "string";
    if (!checkIsString && this.ensureValueIsNotNull(value)) {
      throw new NotCorrectTypeIsDetected(value);
    }
    return checkIsString;
  }
}

export { ValueObject as V, useIsString as u };
