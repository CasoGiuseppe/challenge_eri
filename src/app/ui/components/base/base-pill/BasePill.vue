<template>
  <span :id="id" :class="['base-pill', `base-pill--is-${variant}`]">
    <!-- @slot Default slot for pill label -->
    <slot />
  </span>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useValidateTypeUnion } from '@validators/useValidateTypeUnion'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import { useDefaultTypeKey, SUITABLE_TYPES } from './constants'

defineProps({
  /**
   * Set uniqueId for ui pill component
   */
  id: {
    type: String as PropType<string>,
    validator: (type: string) => {
      new useIsString(type as string)
      return true
    },
  },
  /**
   * Set the size of the ui button component [active, inactive]
   */
  variant: {
    type: String as PropType<(typeof SUITABLE_TYPES)[number]>,
    default: useDefaultTypeKey.description,
    validator: (type: (typeof SUITABLE_TYPES)[number]) => {
      new useValidateTypeUnion(
        new useIsArray([...SUITABLE_TYPES]).value,
        new useIsString(type).value,
      )
      return true
    },
  },
})
</script>
<style src="./BasePill.scss" lang="scss" scoped></style>
