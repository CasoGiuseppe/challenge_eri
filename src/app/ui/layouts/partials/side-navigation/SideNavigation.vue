<template>
  <SidebarMenu :navigation="DEFAULT_NAVIGATION">
    <template #navigation="{ property: { id, label, icon, to } }">
      <BaseButton :id="id" is="router-link" :to="to" :hasIcon="icon" :isFullSize="true">
        <template #default>
          {{ label }}
        </template>
      </BaseButton>
    </template>
  </SidebarMenu>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { INavigation } from '@components/elements/sidebar-menu/types'
import SidebarMenu from '@components/elements/sidebar-menu/SidebarMenu.vue'
import BaseButton from '@components/base/base-button/BaseButton.vue'

const DEFAULT_NAVIGATION = computed<INavigation[]>(() => {
  return [
    {
      id: '1',
      label: 'Administration',
      icon: 'iconAdministration',
      to: { name: 'Admin' },
    },
    {
      id: '2',
      label: 'Customer',
      icon: 'iconCustomer',
      to: { name: 'Customers' },
    },
    {
      id: '3',
      label: 'Folder',
      icon: 'iconFolder',
      to: { name: 'Folders' },
    },
  ]
})
</script>
