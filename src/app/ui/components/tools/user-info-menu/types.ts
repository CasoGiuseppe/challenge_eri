import type { RouteLocationNamedRaw } from 'vue-router'
import type { Names } from '../../base/base-icon/types'

export interface IUserNavigationItem {
  id: string
  label?: string
  icon?: Names
  to: RouteLocationNamedRaw
}
