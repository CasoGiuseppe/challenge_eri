import type { Names } from '@components/base/base-icon/types'
import type { RouteLocationNamedRaw } from 'vue-router'

export interface INavigation {
  id: string
  label?: string
  icon?: Names
  to: RouteLocationNamedRaw
}
