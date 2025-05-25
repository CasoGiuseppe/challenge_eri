import type { RouteLocationAsPathGeneric } from 'vue-router'

export interface ITab {
  id?: string
  label: string
  to: RouteLocationAsPathGeneric
}
