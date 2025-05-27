<template>
  <AccordionBody hasIcon="iconCustomer" :actions="DEFAULT_ICONS" open>
    <template #summary>
      {{ translate({ key: `CUSTOMER.client`, options: { id: customerID, name: completeName } }) }}
    </template>
    <template #actions="{ property: { id, icon } }">
      <BaseIcon :id="id" :name="icon"></BaseIcon>
    </template>
    <template #content>
      <AccordionInfo>
        <template #summary>
          {{ translate({ key: `CUSTOMER.client`, options: { id: customerID } }) }}
        </template>
        <template #content>client info content</template>
      </AccordionInfo>
    </template>
  </AccordionBody>
  <AccordionBody hasIcon="iconCustomer" :actions="DEFAULT_ICONS" open>
    <template #summary>Client detail</template>
    <template #actions="{ property: { id, icon } }">
      <BaseIcon :id="id" :name="icon"></BaseIcon>
    </template>
    <template #content>
      <NavigationTabs :tabs="DEFAULT_TABS">
        <template #tab="{ property: { id, label, to, selected = false } }">
          <BaseTab :id="id" :to="to" :isSelected="selected" is="router-link">{{ label }}</BaseTab>
        </template>
      </NavigationTabs>
    </template>
  </AccordionBody>
</template>
<script setup lang="ts">
import { computed, inject } from 'vue'
import NavigationTabs from '@components/tools/navigation-tabs/NavigationTabs.vue'
import BaseTab from '@components/base/base-tab/BaseTab.vue'
import type { ITab } from '@components/tools/navigation-tabs/types'
import AccordionInfo from '@components/tools/accordion-info/AccordionInfo.vue'
import AccordionBody from '@components/tools/accordion-body/AccordionBody.vue'
import BaseIcon from '@components/base/base-icon/BaseIcon.vue'
import type { IAction } from '@/app/ui/components/tools/accordion-body/types'
import { keyUseTranslation } from '@shared/types/symbols'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'
import { useCustomerDataStore } from '@modules/customer/presentation/store/customer'
import { storeToRefs } from 'pinia'

const useTranslation = inject(keyUseTranslation) as IProvidedTranslation
const { translate } = useTranslation()
const { customerID, completeName } = storeToRefs(useCustomerDataStore)

const DEFAULT_TABS = computed<ITab[]>(() => {
  return [
    {
      id: '1',
      label: 'General',
      to: { name: 'General' },
    },
    {
      id: '2',
      label: 'Communication',
      to: { name: 'Communication' },
    },
    {
      id: '3',
      label: 'Statistics',
      to: { name: 'Statistic' },
    },
    {
      id: '4',
      label: 'Management',
      to: { name: 'Management' },
    },
  ]
})

const DEFAULT_ICONS = computed<IAction[]>(() => {
  return [
    {
      id: 'star',
      icon: 'iconStar',
    },
    {
      id: 'print',
      icon: 'iconPrint',
    },
  ]
})
</script>
