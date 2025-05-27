import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { IDefaultIcons, IIcons } from './interfaces'
import { defaultPanelIcons } from './models/__mocks__'

export const useDefaultPanelIcons = defineStore('useDefaultPanelIcons', () => {
  const state = reactive<IIcons>(structuredClone(defaultPanelIcons))

  const defaultIcons = computed((): IDefaultIcons[] => state.icons)
  return {
    state,
    defaultIcons,
  }
})

export const useDefaultPanelIconsStore = useDefaultPanelIcons()
export type GlobalNavigationeStore = Omit<
  ReturnType<typeof useDefaultPanelIcons>,
  keyof ReturnType<typeof defineStore>
>
