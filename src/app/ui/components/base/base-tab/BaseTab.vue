<template>
  <RouterLink
    :class="['base-tab', isSelected ? 'base-tab--is-selected' : null]"
    :aria-disabled="isDisabled"
    :to="toRouter"
  >
    <!-- @slot Default slot for tab label -->
    <slot />
  </RouterLink>
</template>
<script setup lang="ts">
import { computed, useAttrs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import type { RouteLocationAsPathGeneric } from 'vue-router'

const attrs = useAttrs()
defineProps({
  /**
   * Set uniqueId for ui tab component
   */
  id: {
    type: String as PropType<string>,
    required: true,
    validator: (type: string) => {
      new useIsString(type as string)
      return true
    },
  },

  isSelected: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const isDisabled = computed(() => {
  const { disabled = false } = attrs
  return disabled as boolean
})

const toRouter = computed(() => {
  const { to = { path: '/' } } = attrs
  return to as RouteLocationAsPathGeneric
})
</script>
<style src="./BaseTab.scss" lang="scss" scoped></style>
