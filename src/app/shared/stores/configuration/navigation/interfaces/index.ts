import type { Names } from '@components/base/base-icon/types'
import type { RouteLocationNamedRaw } from 'vue-router'

export interface IGlobalNavigation {
  id: string
  translation?: string
  icon?: Names
  to: RouteLocationNamedRaw
}

export interface IMainNavigation {
  items: IGlobalNavigation[]
}
