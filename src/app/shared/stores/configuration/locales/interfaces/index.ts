import type { RouteLocationNamedRaw } from 'vue-router'
import type { Names } from '@components/base/base-icon/types'
import { SUITABLE_IS } from '@components/abstracts/component-is/constants'

export interface ILocaleLangages {
  id: string
  type: (typeof SUITABLE_IS)[number]
  label?: string
  icon?: Names
  to?: RouteLocationNamedRaw
}

export interface IMainLocales {
  locales: ILocaleLangages[]
}
