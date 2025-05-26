<template>
  <SidebarMenu :navigation="DEFAULT_NAVIGATION">
    <template #navigation="{ property: { id, translation, icon, to } }">
      <BaseButton :id="id" is="router-link" :to="to" :hasIcon="icon" :isFullSize="true">
        <template #default>
          {{ translate({ key: `NAVIGATION.items.${translation}` }) }}
        </template>
      </BaseButton>
    </template>
  </SidebarMenu>
</template>
<script setup lang="ts">
import { computed, inject } from 'vue'
import type { INavigation } from '@components/elements/sidebar-menu/types'
import SidebarMenu from '@components/elements/sidebar-menu/SidebarMenu.vue'
import BaseButton from '@components/base/base-button/BaseButton.vue'
import { keyUseTranslation } from '@shared/types/symbols'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'

const useTranslation = inject(keyUseTranslation) as IProvidedTranslation
const { translate } = useTranslation()

const DEFAULT_NAVIGATION = computed<INavigation[]>(() => {
  return [
    {
      id: '1',
      translation: 'administration',
      icon: 'iconAdministration',
      to: { name: 'Admin' },
    },
    {
      id: '2',
      translation: 'customers',
      icon: 'iconCustomer',
      to: { name: 'Customers' },
    },
    {
      id: '3',
      translation: 'folders',
      icon: 'iconFolder',
      to: { name: 'Folders' },
    },
  ]
})
</script>
