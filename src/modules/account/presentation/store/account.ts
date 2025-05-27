import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { IMainAccount, ITableData } from './interfaces'
import { accountData } from './model/__mock__'

export const useAccountData = defineStore('useAccountData', () => {
  const state = reactive<IMainAccount>(structuredClone(accountData))

  const accountID = computed((): string => state.data.id)
  const accountCharacteristic = computed((): string => state.data.characteristic)
  const tableInfoHead = computed((): ITableData[] => state.table?.head ?? [])

  return {
    state,
    accountID,
    accountCharacteristic,
    tableInfoHead,
  }
})

export const useAccountDataStore = useAccountData()
export type GlobalAccountStore = Omit<
  ReturnType<typeof useAccountData>,
  keyof ReturnType<typeof defineStore>
>
