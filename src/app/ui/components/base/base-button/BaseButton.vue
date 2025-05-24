<template>
  <button
    :class="['base-button', `base-button--is-${size}`, `base-button--is-${variant}`]"
    :aria-disabled="isDisabled"
    @click="handleClick"
  >
    <component
      v-if="bindIconProps"
      data-testID="ui-icon"
      :is="shallowIconComponent"
      v-bind="{ ...bindIconProps }"
    />
    <!-- @slot Default slot for button label -->
    <slot />
  </button>
</template>
<script lang="ts" setup>
import { computed, shallowRef, toRefs, useAttrs, type Component, type PropType, watch } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useValidateTypeUnion } from '@validators/useValidateTypeUnion'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import {
  ICONS,
  SUITABLE_POSITION,
  SUITABLE_SIZES,
  SUITABLE_TYPES,
  useDefaultPositionKey,
  useDefaultSizeKey,
  useDefaultTypeKey,
} from './constants'
import type { Names } from '@components/base/base-icon/types'
import { SUITABLE_NAMES } from '@components/base/base-icon/constants'
import useAsyncComponents from '@composables/useAsyncComponents'
import useComponentsMapping from '@composables/useComponentsMapping'
import type { IClick } from './types'

const attrs = useAttrs()
const props = defineProps({
  /**
   * Set uniqueId for ui button component
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
  /**
   * Set the name of the ui icon component
   */
  hasIcon: {
    type: String as PropType<Names>,
    validator: (icon: string) => {
      new useValidateTypeUnion(
        new useIsArray([...SUITABLE_NAMES]).value,
        new useIsString(icon).value,
      )

      return true
    },
  },
  /**
   * Set the icon positon inside button [leading, trailing]
   */
  iconPosition: {
    type: String as PropType<(typeof SUITABLE_POSITION)[number]>,
    default: useDefaultPositionKey.description,
    validator: (position: (typeof SUITABLE_POSITION)[number]) => {
      new useValidateTypeUnion(
        new useIsArray([...SUITABLE_POSITION]).value,
        new useIsString(position).value,
      )
      return true
    },
  },
})

const { id, size, hasIcon, iconPosition } = toRefs(props)
const { parseGlobModules } = useComponentsMapping({
  modules: import.meta.glob('@components/**/*.vue'),
})
const emits = defineEmits<{
  (e: 'click', id: IClick): void
}>()

const { create } = useAsyncComponents({ modules: parseGlobModules() })
const shallowIconComponent: Component = shallowRef()

const isDisabled = computed(() => {
  const { disabled = false } = attrs
  return disabled as boolean
})

const bindIconProps = computed(() => {
  if (!hasIcon?.value) {
    return undefined
  }

  return {
    name: hasIcon?.value as Names,
    size: ICONS[size.value],
    position: iconPosition.value,
  }
})

const handleClick = () => {
  emits('click', { id: id?.value })
}
watch(
  () => hasIcon?.value,
  async () => {
    if (!hasIcon?.value) {
      return
    }
    shallowIconComponent.value = await create({ component: 'BaseIcon' })
  },
  { immediate: true },
)
</script>
<style src="./BaseButton.scss" lang="scss" scoped></style>
