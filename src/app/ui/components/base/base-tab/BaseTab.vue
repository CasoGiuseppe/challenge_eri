<template>
  <ComponentIs
    :class="['base-tab', isSelected ? 'base-tab--is-selected' : null]"
    :aria-disabled="isDisabled"
    :to="toRouter"
    :is="is"
    @click="handleClick"
  >
    <!-- @slot Default slot for tab label -->
    <slot />
  </ComponentIs>
</template>
<script setup lang="ts">
import { computed, toRefs, useAttrs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useValidateTypeUnion } from '@validators/useValidateTypeUnion'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import type { RouteLocationNamedRaw } from 'vue-router'
import ComponentIs from '@components/abstracts/component-is/ComponentIs.vue'
import { SUITABLE_IS, useDefaultIsKey } from '@components/abstracts/component-is/constants'
import type { IClick } from './types'

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

  /**
   * Set selected component state
   */
  isSelected: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  /**
   * Set the component type [button, router-link]
   */
  is: {
    type: String as PropType<(typeof SUITABLE_IS)[number]>,
    default: useDefaultIsKey.description,
    validator: (variant: (typeof SUITABLE_IS)[number]) => {
      new useValidateTypeUnion(
        new useIsArray([...SUITABLE_IS]).value,
        new useIsString(variant).value,
      )
      return true
    },
  },
})

const { id, is } = toRefs(props)

const emits = defineEmits<{
  (e: 'click', id: IClick): void
}>()

const isDisabled = computed(() => {
  const { disabled = false } = attrs
  return disabled as boolean
})

const toRouter = computed(() => {
  const { to = { path: '/' } } = attrs
  return to as RouteLocationNamedRaw
})

const isTypeLink = computed(() => is.value === 'router-link')

const handleClick = () => {
  if (isTypeLink.value) {
    return
  }
  emits('click', { id: id?.value })
}
</script>
<style src="./BaseTab.scss" lang="scss" scoped></style>
