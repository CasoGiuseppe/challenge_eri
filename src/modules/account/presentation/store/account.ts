import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { IMainAccount } from './interfaces'
import { accountData } from './model/__mock__'

export const useAccountData = defineStore('useAccountData', () => {
  const state = reactive<IMainAccount>(structuredClone(accountData))

  const accountID = computed((): string => state.data.id)
  const accountCharacteristic = computed((): string => state.data.characteristic)
  return {
    state,
    accountID,
    accountCharacteristic,
  }
})

export const useAccountDataStore = useAccountData()
export type GlobalAccountStore = Omit<
  ReturnType<typeof useAccountData>,
  keyof ReturnType<typeof defineStore>
>
