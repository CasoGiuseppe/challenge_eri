import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { IGlobalNavigation, IMainNavigation } from './interfaces'
import { globalNavigation } from './models/__mock__'

export const useGlobalNavigation = defineStore('useGlobalNavigation', () => {
  const state = reactive<IMainNavigation>(structuredClone(globalNavigation))

  const mainNavigationItems = computed((): IGlobalNavigation[] => state.items)
  return {
    state,
    mainNavigationItems,
  }
})

export const useGlobalNavigationStore = useGlobalNavigation()
export type GlobalNavigationeStore = Omit<
  ReturnType<typeof useGlobalNavigation>,
  keyof ReturnType<typeof defineStore>
>
