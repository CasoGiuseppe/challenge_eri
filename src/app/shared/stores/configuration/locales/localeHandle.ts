import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { ILocaleLangages, IMainLocales } from './interfaces'
import { globalLocales } from './models/__mock__'

export const useLocaleHandle = defineStore('useLocaleHandle', () => {
  const state = reactive<IMainLocales>(structuredClone(globalLocales))

  const localesLanguages = computed((): ILocaleLangages[] => state.locales)
  return {
    state,
    localesLanguages,
  }
})

export const useLocalesStore = useLocaleHandle()
export type GlobalLocalesStore = Omit<
  ReturnType<typeof useLocaleHandle>,
  keyof ReturnType<typeof defineStore>
>
