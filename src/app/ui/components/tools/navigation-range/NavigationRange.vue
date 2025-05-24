<template>
  <section v-if="hasItems" :id="id" class="navigation-range">
    {{ items }}
  </section>
</template>
<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useIsNumber } from '@validators/typeCheckers/useIsNumber'

const props = defineProps({
  /**
   * Set uniqueId for ui navigation component
   */
  id: {
    type: String as PropType<string>,
    required: true,
    validator: (type: string) => {
      new useIsString(type)
      return true
    },
  },
  /**
   * Set the total items size
   */
  items: {
    type: Number as PropType<number>,
    required: true,
    validator: (value: number) => {
      new useIsNumber(value)
      return true
    },
  },
  /**
   * Set the step move amount
   */
  steps: {
    type: Number as PropType<number>,
    validator: (value: number) => {
      new useIsNumber(value)
      return true
    },
    default: 10,
  },
})

const { items } = toRefs(props)
const hasItems = computed(() => {
  const evaluables = [items.value !== undefined, items.value > 0]
  return evaluables.every((state: boolean) => state)
})
</script>
<style src="./NavigationRange.scss" lang="scss" scoped></style>
