import type { RouteLocationNamedRaw } from 'vue-router'
import type { Names } from '../../base/base-icon/types'
import { SUITABLE_IS } from '../../abstracts/component-is/constants'
export interface IUserNavigationItem {
  id: string
  type: (typeof SUITABLE_IS)[number]
  label?: string
  icon?: Names
  to?: RouteLocationNamedRaw
}
