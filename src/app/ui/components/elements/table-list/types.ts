export interface ICell {
  id: string
  label: string
  action?: () => void
}

export interface IRow {
  row: ICell[]
}
