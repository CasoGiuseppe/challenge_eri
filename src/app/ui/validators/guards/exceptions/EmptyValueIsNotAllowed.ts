export class EmptyValueIsNotAllowed extends Error {
  constructor() {
    super()
    this.name = 'EmptyValueIsNotAllowed'
    this.message = `Empty value is not allowed`
  }
}
