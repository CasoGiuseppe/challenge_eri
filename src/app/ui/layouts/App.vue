<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>
<script setup lang="ts">
import { onBeforeMount, provide } from 'vue'
import {
  keyUseAsyncComponent,
  keyUseMappingComponent,
  keyUseRenderableSlot,
  keyUseTranslation,
} from '@shared/types/symbols'
import useAsyncComponents from '@composables/useAsyncComponents'
import useComponentsMapping from '@composables/useComponentsMapping'
import { useRenderableSlots } from '@composables/useRenderableSlots'
import useTranslation from '@composables/useTranslations/useTranslations'
import type { IProvidedRenderableCheck } from '@composables/useRenderableSlots/interfaces'
import type { IProvidedComponentMapping } from '@composables/useComponentsMapping/interfaces'
import type { IProvidedAsyncComponent } from '@composables/useAsyncComponents/interfaces'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'

onBeforeMount(async () => {
  provide<IProvidedAsyncComponent>(keyUseAsyncComponent, useAsyncComponents)
  provide<IProvidedComponentMapping>(keyUseMappingComponent, useComponentsMapping)
  provide<IProvidedRenderableCheck>(keyUseRenderableSlot, useRenderableSlots)
  provide<IProvidedTranslation>(keyUseTranslation, useTranslation)

  const { setNewTranslationLocale } = useTranslation()
  await setNewTranslationLocale(import.meta.env.VITE_APP_LOCALE)
})
</script>
