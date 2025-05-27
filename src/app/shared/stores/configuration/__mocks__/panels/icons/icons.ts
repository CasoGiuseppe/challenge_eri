import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { IDefaultIcons, IIcons } from './interfaces'
import { defaultPanelIcons } from './models/__mock__'

export const useDefaultPanelIcons = defineStore('useDefaultPanelIcons', () => {
  const state = reactive<IIcons>(structuredClone(defaultPanelIcons))

  const defaultIcons = computed((): IDefaultIcons[] => state.icons ?? [])
  const defaultActions = computed((): IDefaultIcons[] => state.actions ?? [])
  return {
    state,
    defaultIcons,
    defaultActions,
  }
})

export const useDefaultPanelIconsStore = useDefaultPanelIcons()
export type GlobalNavigationeStore = Omit<
  ReturnType<typeof useDefaultPanelIcons>,
  keyof ReturnType<typeof defineStore>
>
