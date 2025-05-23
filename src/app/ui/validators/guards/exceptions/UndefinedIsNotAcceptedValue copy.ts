export class UndefinedIsNotAcceptedValue extends Error {
  constructor(private readonly key: string | number | undefined | unknown) {
    super()
    this.name = 'UndefinedOrNullIsNotAcceptedValue'
    this.message = `${this.key} is not accepted value`
  }
}
