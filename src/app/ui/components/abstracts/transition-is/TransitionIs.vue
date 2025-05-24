<template>
  <Transition
    v-if="isNotAGroup"
    :name="type"
    mode="out-in"
    appear
    class="transition-is"
    @after-enter="removeBehaviour"
  >
    <slot />
  </Transition>

  <TransitionGroup
    v-else
    :name="type"
    v-bind="$attrs"
    mode="out-in"
    appear
    class="transition-is"
    @after-enter="afterEnter"
    @before-enter="beforeEnter"
  >
    <slot />
  </TransitionGroup>
</template>
<script setup lang="ts">
import { type PropType, computed } from 'vue'
import { SUITABLE_TYPES, useDefaultTypeKey, SUITABLE_EASING, SUITABLE_TIMING } from './types'
import { useValidateTypeUnion } from '@validators/useValidateTypeUnion'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import { useIsString } from '@validators/typeCheckers/useIsString'

const { type, group } = defineProps({
  /**
   * Set the type of custom animation [from-bottom, from-left, from-right, from-top]
   */
  type: {
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

  /**
   * Set if transition handle a group of elements
   */
  group: {
    type: Boolean as PropType<boolean>,
    default: false,
  },

  /**
   * Set easing type
   */
  easing: {
    type: String as PropType<SUITABLE_EASING>,
    default: SUITABLE_EASING.OUT,
  },

  /**
   * Set the animation velocity
   */
  timing: {
    type: String as PropType<SUITABLE_TIMING>,
    default: SUITABLE_TIMING.NORMAL,
  },

  /**
   * Set delay type
   */
  delay: {
    type: String as PropType<string>,
    default: '0s',
  },
})

const isNotAGroup = computed(() => !group)
const removeBehaviour = (el: Element) => {
  el.classList.remove('transition-is')
  el.removeAttribute('style')
}

const emits = defineEmits(['enter', 'before'])
const afterEnter = (el: Element) => emits('enter', { el })
const beforeEnter = (el: Element) => emits('before', { el })
</script>
<style lang="scss">
@include useAnimations.create-animation(
  $name: 'opacity',
  $from: translateY(0),
  $to: translateY(0),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing),
  $delay: v-bind(delay)
);

@include useAnimations.create-animation(
  $name: 'from-top',
  $from: translateY(-50%),
  $to: translateY(-50%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing),
  $delay: v-bind(delay)
);

@include useAnimations.create-animation(
  $name: 'from-bottom',
  $from: translateY(55%),
  $to: translateY(55%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing),
  $delay: v-bind(delay)
);

@include useAnimations.create-animation(
  $name: 'from-left',
  $from: translateX(-50%),
  $to: translateX(-50%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing),
  $delay: v-bind(delay)
);

@include useAnimations.create-animation(
  $name: 'from-right',
  $from: translateX(50%),
  $to: translateX(50%),
  $duration: v-bind(timing),
  $duration-out: var(--outAnimationTime),
  $ease: v-bind(easing),
  $delay: v-bind(delay)
);
</style>
<style src="./TransitionIs.scss" lang="scss"></style>
