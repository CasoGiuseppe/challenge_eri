import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { IMainAccount } from './interfaces'
import { accountData } from './model/__mock__'

export const useAccountData = defineStore('useAccountData', () => {
  const state = reactive<IMainAccount>(structuredClone(accountData))

  const accountID = computed((): string => state.data.id)

  return {
    state,
    accountID,
  }
})

export const useAccountDataStore = useAccountData()
export type GlobalAccountStore = Omit<
  ReturnType<typeof useAccountData>,
  keyof ReturnType<typeof defineStore>
>
