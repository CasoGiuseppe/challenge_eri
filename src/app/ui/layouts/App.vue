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
} from '@shared/types/symbols'
import useAsyncComponents from '@composables/useAsyncComponents'
import useComponentsMapping from '@composables/useComponentsMapping'
import { useRenderableSlots } from '@composables/useRenderableSlots'
import type { IProvidedRenderableCheck } from '@composables/useRenderableSlots/interfaces'
import type { IProvidedComponentMapping } from '@composables/useComponentsMapping/interfaces'
import type { IProvidedAsyncComponent } from '@composables/useAsyncComponents/interfaces'

onBeforeMount(() => {
  provide<IProvidedAsyncComponent>(keyUseAsyncComponent, useAsyncComponents)
  provide<IProvidedComponentMapping>(keyUseMappingComponent, useComponentsMapping)
  provide<IProvidedRenderableCheck>(keyUseRenderableSlot, useRenderableSlots)
})
</script>
