export class NotCorrectTypeIsDetected extends Error {
  constructor(private readonly value: unknown) {
    super()
    this.name = 'NotCorrectTypeIsDetected'
    this.message = `${this.value} has not correct type`
  }
}
