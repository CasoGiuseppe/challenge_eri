import type { RouteLocationNamedRaw } from 'vue-router'

export interface ITab {
  id: string
  label: string
  to: RouteLocationNamedRaw
}
