import { ValueObject } from '../ValueObject'

export class TestFixtureClass extends ValueObject<unknown> {
  constructor(value: unknown) {
    super(value)
  }
}
