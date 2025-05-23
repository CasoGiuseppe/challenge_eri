export class ValueNotFoundInUnionTypes extends Error {
  constructor(private readonly value: string | number | unknown) {
    super()
    this.name = 'ValueNotFoundInUnionTypes'
    this.message = `${this.value} not found in provided suitable collection`
  }
}
