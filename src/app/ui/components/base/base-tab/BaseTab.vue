<template>
  <button class="base-tab" :aria-disabled="isDisabled" @click="handleClick">
    <!-- @slot Default slot for tab label -->
    <slot />
  </button>
</template>
<script setup lang="ts">
import { computed, toRefs, useAttrs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import type { IClick } from '@components/base/base-button/types'

const attrs = useAttrs()
const props = defineProps({
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
})

const { id } = toRefs(props)
const emits = defineEmits<{
  (e: 'click', id: IClick): void
}>()

const isDisabled = computed(() => {
  const { disabled = false } = attrs
  return disabled as boolean
})

const handleClick = () => {
  emits('click', { id: id?.value })
}
</script>
<style src="./BaseTab.scss" lang="scss" scoped></style>
