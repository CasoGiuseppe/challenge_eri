<template>
  <SidebarMenu :navigation="mainNavigationItems" :isExpanded="false">
    <template #navigation="{ property: { id, translation, icon, to, isExpanded } }">
      <BaseButton
        :id="id"
        is="router-link"
        :to="to"
        :hasIcon="icon"
        :disabled="to.name === currentRoot"
        v-bind="{ ...bindExpandedProps(isExpanded) }"
      >
        <template #default v-if="isExpanded">
          {{ translate({ key: `NAVIGATION.items.${translation}` }) }}
        </template>
      </BaseButton>
    </template>
  </SidebarMenu>
</template>
<script setup lang="ts">
import { computed, inject } from 'vue'
import { storeToRefs } from 'pinia'
import SidebarMenu from '@components/elements/sidebar-menu/SidebarMenu.vue'
import BaseButton from '@components/base/base-button/BaseButton.vue'
import { keyUseTranslation } from '@shared/types/symbols'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'
import { useGlobalNavigationStore } from '@shared/stores/configuration/navigation/navigation'
import type { SUITABLE_SIZES } from '@components/base/base-button/constants'
import { useRoute } from 'vue-router'

const useTranslation = inject(keyUseTranslation) as IProvidedTranslation
const { translate } = useTranslation()
const { mainNavigationItems } = storeToRefs(useGlobalNavigationStore)

const bindExpandedProps = (expanded: boolean) => {
  return {
    isRounded: !expanded,
    isFullSize: expanded,
    isFullRounded: !expanded,
    size: expanded ? 'l' : ('s' as (typeof SUITABLE_SIZES)[number]),
    style: expanded ? {} : { '--custom-background': 'hsla(219, 100%, 18%, 1)' },
  }
}

const route = useRoute()
const currentRoot = computed<unknown | undefined>(() => {
  if (!route) {
    return
  }
  const {
    meta: { family },
  } = route
  const currentFamily = family as string
  return currentFamily.replace(/^./, currentFamily[0].toUpperCase())
})
</script>
