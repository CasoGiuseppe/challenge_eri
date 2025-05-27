export interface ICustomerData {
  id: string
  characteristic: string
}

export interface ITableData {
  id: string
  translation?: string
  label?: string
}
export interface IMainAccount {
  data: ICustomerData
  table?: {
    head: ITableData[]
    body?: ITableData[]
  }
}
