import { SUITABLE_TYPES } from '@components/base/base-pill/constants'
export interface ICell {
  id: string
  label: string
  state?: (typeof SUITABLE_TYPES)[number]
}

export interface IRow {
  row: ICell[]
}
