export class ProvidedCollectionIsNotArray extends Error {
  constructor(private readonly collection: unknown) {
    super()
    this.name = 'ProvidedCollectionIsNotArray'
    this.message = `Provided value ${JSON.stringify(collection)} is not allowed Array type`
  }
}
