<template>
  <button
    :class="['base-button', `base-button--is-${size}`, `base-button--is-${variant}`]"
    :aria-disabled="isDisabled"
  >
    <!-- @slot Default slot for button label -->
    <slot />
  </button>
</template>
<script lang="ts" setup>
import { computed, toRefs, useAttrs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useValidateTypeUnion } from '@validators/useValidateTypeUnion'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import { SUITABLE_SIZES, SUITABLE_TYPES, useDefaultSizeKey, useDefaultTypeKey } from './constants'

const attrs = useAttrs()
const props = defineProps({
  /**
   * Set uniqueId for ui button component
   */
  id: {
    type: String as PropType<string>,
    required: true,
    validator: (type: string) => {
      new useIsString(type as string)
      return true
    },
  },
  /**
   * Set the size of the ui button component [l, s]
   */
  size: {
    type: String as PropType<(typeof SUITABLE_SIZES)[number]>,
    default: useDefaultSizeKey.description,
    validator: (type: (typeof SUITABLE_SIZES)[number]) => {
      new useValidateTypeUnion(
        new useIsArray([...SUITABLE_SIZES]).value,
        new useIsString(type).value,
      )
      return true
    },
  },
  /**
   * Set the button variant family [primary, secondary]
   */
  variant: {
    type: String as PropType<(typeof SUITABLE_TYPES)[number]>,
    default: useDefaultTypeKey.description,
    validator: (variant: (typeof SUITABLE_TYPES)[number]) => {
      new useValidateTypeUnion(
        new useIsArray([...SUITABLE_TYPES]).value,
        new useIsString(variant).value,
      )
      return true
    },
  },
})

const { size } = toRefs(props)
const isDisabled = computed(() => {
  const { disabled = false } = attrs
  return disabled as boolean
})
</script>
<style src="./BaseButton.scss" lang="scss" scoped></style>
