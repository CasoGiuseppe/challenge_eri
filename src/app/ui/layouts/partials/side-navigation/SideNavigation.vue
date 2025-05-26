<template>
  <SidebarMenu :navigation="mainNavigationItems">
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
import { inject } from 'vue'
import SidebarMenu from '@components/elements/sidebar-menu/SidebarMenu.vue'
import BaseButton from '@components/base/base-button/BaseButton.vue'
import { keyUseTranslation } from '@shared/types/symbols'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'
import { useGlobalNavigationStore } from '@shared/stores/configuration/navigation/navigation'
import { storeToRefs } from 'pinia'

const useTranslation = inject(keyUseTranslation) as IProvidedTranslation
const { translate } = useTranslation()
const { mainNavigationItems } = storeToRefs(useGlobalNavigationStore)
</script>
