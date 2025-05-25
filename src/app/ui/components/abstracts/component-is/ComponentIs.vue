<template>
  <RouterLink v-if="isInternalLink" v-bind="attrs" :to="toRouter" class="component-is">
    <slot />
  </RouterLink>
  <component v-else :is="is" class="component-is">
    <slot />
  </component>
</template>
<script setup lang="ts">
import { computed, toRefs, useAttrs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useValidateTypeUnion } from '@validators/useValidateTypeUnion'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import { useDefaultIsKey, SUITABLE_IS } from './constants'
import type { RouteLocationNamedRaw } from 'vue-router'

const attrs = useAttrs()
const props = defineProps({
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
const { is } = toRefs(props)
const isInternalLink = computed(() => is.value === 'router-link')
const toRouter = computed(() => {
  const { to = { path: '/' } } = attrs
  return to as RouteLocationNamedRaw
})
</script>
<style src="./ComponentIs.scss" lang="scss"></style>
