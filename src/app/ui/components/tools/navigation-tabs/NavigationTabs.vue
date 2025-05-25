<template>
  <nav :id="id" class="navigation-tabs">navigation tabs</nav>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'

defineProps({
  /**
   * Set uniqueId for ui navigation tabs component
   */
  id: {
    type: String as PropType<string>,
    validator: (type: string) => {
      new useIsString(type as string)
      return true
    },
  },
})
</script>
<style src="./NavigationTabs.scss" lang="scss" scoped></style>
