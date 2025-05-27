import type { SUITABLE_TYPES } from '@components/base/base-pill/constants'

export interface ICustomerData {
  id: string
  characteristic: string
}

export interface ITableData {
  id: string
  translation?: string
  label?: string
  state?: (typeof SUITABLE_TYPES)[number]
}

export interface IRow {
  row: ITableData[]
}
export interface IMainAccount {
  data: ICustomerData
  table?: {
    head: ITableData[]
    body: IRow[]
  }
}
