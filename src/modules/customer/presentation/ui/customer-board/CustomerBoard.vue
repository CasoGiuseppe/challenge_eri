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
        <template #content>
          {{ translate({ key: `MOCKS.panels.client` }) }}
        </template>
      </AccordionInfo>
    </template>
  </AccordionBody>
  <AccordionBody hasIcon="iconCustomer" :actions="DEFAULT_ICONS" open>
    <template #summary>
      {{ translate({ key: `CUSTOMER.labels.details` }) }}
    </template>
    <template #actions="{ property: { id, icon } }">
      <BaseIcon :id="id" :name="icon"></BaseIcon>
    </template>
    <template #content v-if="hasCustomerAreas">
      <NavigationTabs :tabs="customerAreas">
        <template #tab="{ property: { id, translation, to, selected = false } }">
          <BaseTab :id="id" :to="to" :isSelected="selected" is="router-link">{{
            translate({ key: `MOCKS.areas.${translation}` })
          }}</BaseTab>
        </template>
      </NavigationTabs>
    </template>
  </AccordionBody>
</template>
<script setup lang="ts">
import { computed, inject } from 'vue'
import { storeToRefs } from 'pinia'
import NavigationTabs from '@components/tools/navigation-tabs/NavigationTabs.vue'
import BaseTab from '@components/base/base-tab/BaseTab.vue'
import AccordionInfo from '@components/tools/accordion-info/AccordionInfo.vue'
import AccordionBody from '@components/tools/accordion-body/AccordionBody.vue'
import BaseIcon from '@components/base/base-icon/BaseIcon.vue'
import { keyUseTranslation } from '@shared/types/symbols'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'
import { useCustomerDataStore } from '@modules/customer/presentation/store/customer'
import { useDefaultPanelIconsStore } from '@shared/stores/configuration/__mocks__/panels/icons/icons'

const useTranslation = inject(keyUseTranslation) as IProvidedTranslation
const { translate } = useTranslation()
const { customerID, completeName, customerAreas } = storeToRefs(useCustomerDataStore)
const { defaultIcons: DEFAULT_ICONS } = storeToRefs(useDefaultPanelIconsStore)
const hasCustomerAreas = computed(() => customerAreas.value.length > 0)
</script>
