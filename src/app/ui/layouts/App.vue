<template>
  <RouterView v-slot="{ Component }">
    <Suspense timeout="0">
      <template #default>
        <component :is="Component" />
      </template>
    </Suspense>
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

onBeforeMount(() => {
  provide<IProvidedAsyncComponent>(keyUseAsyncComponent, useAsyncComponents)
  provide<IProvidedComponentMapping>(keyUseMappingComponent, useComponentsMapping)
  provide<IProvidedRenderableCheck>(keyUseRenderableSlot, useRenderableSlots)
  provide<IProvidedTranslation>(keyUseTranslation, useTranslation)
})
</script>
