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
import { keyUseAsyncComponent, keyUseMappingComponent } from '@shared/types/symbols'
import useAsyncComponents from '@composables/useAsyncComponents'
import useComponentsMapping from '@composables/useComponentsMapping'

onBeforeMount(() => {
  provide(keyUseAsyncComponent, useAsyncComponents)
  provide(keyUseMappingComponent, useComponentsMapping)
})
</script>
