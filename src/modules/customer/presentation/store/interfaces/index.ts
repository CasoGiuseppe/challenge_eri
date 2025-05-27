import type { RouteLocationNamedRaw } from 'vue-router'

export interface ICustomerData {
  id: string
  name: string
  surname: string
}
export interface IArea {
  id: string
  translation?: string
  to: RouteLocationNamedRaw
}

export interface IMainCustomer {
  data: ICustomerData
  areas?: IArea[]
}
