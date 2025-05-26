<template>
  <ComponentIs
    :class="[
      'base-button',
      `base-button--is-${size}`,
      `base-button--is-${variant}`,
      !isRounded ? 'base-button--is-square' : null,
      unsetStyle ? 'base-button--is-unset' : null,
      isFullSize ? 'base-button--is-fullsize' : null,
    ]"
    :is="is"
    :to="toRouter"
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
    <p v-if="isRenderableSlot('default')" class="base-button__label">
      <slot />
    </p>
  </ComponentIs>
</template>
<script lang="ts" setup>
import {
  computed,
  shallowRef,
  toRefs,
  useAttrs,
  type Component,
  type PropType,
  watch,
  inject,
} from 'vue'
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

import useComponentsMapping from '@composables/useComponentsMapping'
import type { IClick } from './types'
import { useRenderableSlots } from '@composables/useRenderableSlots'
import ComponentIs from '@components/abstracts/component-is/ComponentIs.vue'
import { SUITABLE_IS, useDefaultIsKey } from '@components/abstracts/component-is/constants'
import type { RouteLocationNamedRaw } from 'vue-router'
import { keyUseAsyncComponent } from '@shared/types/symbols'
import type { IProvidedAsyncComponent } from '@shared/composables/useAsyncComponents/interfaces'

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
  /**
   * Set corner component rounded state
   */
  isRounded: {
    type: Boolean as PropType<boolean>,
    default: true,
  },

  /**
   * Remove applied styles as background or border
   */
  unsetStyle: {
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

  /**
   * Set fullsize component width
   */
  isFullSize: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const { id, size, hasIcon, iconPosition, is } = toRefs(props)
const { isRenderableSlot } = useRenderableSlots()
const { parseGlobModules } = useComponentsMapping({
  modules: import.meta.glob('@components/**/*.vue'),
})
const emits = defineEmits<{
  (e: 'click', id: IClick): void
}>()

const useAsyncKeyLoader = inject(keyUseAsyncComponent) as IProvidedAsyncComponent
const { create } = useAsyncKeyLoader({ modules: parseGlobModules() })
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
