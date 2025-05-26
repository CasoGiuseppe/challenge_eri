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
import { keyUseAsyncComponent } from '@shared/types/symbols'
import useAsyncComponents from '@composables/useAsyncComponents'

onBeforeMount(() => {
  provide(keyUseAsyncComponent, useAsyncComponents)
})
</script>
