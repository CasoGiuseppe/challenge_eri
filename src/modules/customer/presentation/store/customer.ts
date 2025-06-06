import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { IArea, IMainCustomer } from './interfaces'
import { customerData } from './model/__mock__'

export const useCustomerData = defineStore('useCustomerData', () => {
  const state = reactive<IMainCustomer>(structuredClone(customerData))

  const customerID = computed((): string => state.data.id)
  const completeName = computed((): string => `${state.data.name} ${state.data.surname}`)
  const customerAreas = computed((): IArea[] => state.areas ?? [])

  return {
    state,
    customerID,
    completeName,
    customerAreas,
  }
})

export const useCustomerDataStore = useCustomerData()
export type GlobalNavigationeStore = Omit<
  ReturnType<typeof useCustomerData>,
  keyof ReturnType<typeof defineStore>
>
