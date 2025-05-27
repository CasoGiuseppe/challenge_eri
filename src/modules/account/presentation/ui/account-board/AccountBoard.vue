<template>
  <section class="account-board">
    <AccordionBody hasIcon="iconCustomer" :actions="DEFAULT_ICONS" open>
      <template #summary>
        {{ translate({ key: `CUSTOMER.client`, options: { id: customerID, name: completeName } }) }}
      </template>
      <template #actions="{ property: { id, icon } }">
        <BaseIcon :id="id" :name="icon"></BaseIcon>
      </template>
      <template #content>
        <AccordionInfo :actions="DEFAULT_ACTIONS">
          <template #summary>
            {{ translate({ key: `CUSTOMER.client`, options: { id: customerID } }) }}
          </template>
          <template #content>
            {{ translate({ key: `MOCKS.panels.client` }) }}
          </template>
          <template #actions="{ property: { id, icon } }">
            <BaseButton
              :id="id"
              :hasIcon="icon"
              size="s"
              :isRounded="false"
              :unsetStyle="true"
              :style="{ '--custom-foreground': 'black' }"
            />
          </template>
        </AccordionInfo>

        <AccordionInfo :actions="DEFAULT_ACTIONS">
          <template #summary>
            {{ translate({ key: `CUSTOMER.client`, options: { id: customerID } }) }}
          </template>
          <template #content>
            {{ translate({ key: `MOCKS.panels.client` }) }}
          </template>
          <template #actions="{ property: { id, icon } }">
            <BaseButton
              :id="id"
              :hasIcon="icon"
              size="s"
              :isRounded="false"
              :unsetStyle="true"
              :style="{ '--custom-foreground': 'black' }"
            />
          </template>
        </AccordionInfo>
      </template>
    </AccordionBody>
  </section>
</template>
<script setup lang="ts">
import { inject } from 'vue'
import { storeToRefs } from 'pinia'
import AccordionInfo from '@components/tools/accordion-info/AccordionInfo.vue'
import AccordionBody from '@components/tools/accordion-body/AccordionBody.vue'
import BaseIcon from '@components/base/base-icon/BaseIcon.vue'
import BaseButton from '@components/base/base-button/BaseButton.vue'
import { keyUseTranslation } from '@shared/types/symbols'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'
import { useCustomerDataStore } from '@modules/customer/presentation/store/customer'
import { useDefaultPanelIconsStore } from '@shared/stores/configuration/__mocks__/panels/icons/icons'

const useTranslation = inject(keyUseTranslation) as IProvidedTranslation
const { translate } = useTranslation()

const { customerID, completeName } = storeToRefs(useCustomerDataStore)
const { defaultIcons: DEFAULT_ICONS, defaultActions: DEFAULT_ACTIONS } =
  storeToRefs(useDefaultPanelIconsStore)
</script>
