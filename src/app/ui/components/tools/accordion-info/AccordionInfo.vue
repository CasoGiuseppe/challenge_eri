<template>
  <details
    :id="id"
    :title="title"
    :open="open"
    aria-labelledby="accordion-summary"
    aria-describedby="accordion-content"
    class="accordion-info"
    @toggle="handleToggle"
    ref="accordionDetail"
  >
    <summary id="accordion-summary" class="accordion-info__summary">
      <component
        v-if="shallowIconComponent"
        data-testID="ui-icon"
        :is="shallowIconComponent"
        v-bind="{ ...bindIconProps }"
      />
      <p v-if="isRenderableSlot('summary')" class="accordion-info__title">
        <slot name="summary" />
      </p>
      <TransitionIs
        v-if="hasActions"
        class="accordion-info__actions"
        group
        tag="ul"
        type="from-bottom"
      >
        <li
          v-for="({ id, icon }, index) of actions"
          :key="id"
          :style="{ transitionDelay: `${index * 0.05}s` }"
        >
          <slot name="actions" :property="{ id, icon }"></slot>
        </li>
      </TransitionIs>
    </summary>
    <article id="accordion-content" class="accordion-info__content">
      <!-- @slot Content: slot to show accordion nested content -->
      <slot name="content" />
    </article>
  </details>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, shallowRef, toRefs, type Component, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import useAsyncComponents from '@composables/useAsyncComponents'
import useComponentsMapping from '@composables/useComponentsMapping'
import { useRenderableSlots } from '@composables/useRenderableSlots'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import type { IAction } from './types'
import TransitionIs from '@components/abstracts/transition-is/TransitionIs.vue'

const accordionDetail = ref<HTMLDetailsElement | null>(null)
const currentIcon = ref<string | null>(null)
const props = defineProps({
  /**
   * Set uniqueId for ui accordion component
   */
  id: {
    type: String as PropType<string>,
    validator: (type: string) => {
      new useIsString(type as string)
      return true
    },
  },
  /**
   * Set the aria accesibility label
   */
  title: {
    type: String as PropType<string>,
    default: 'Accordion title',
  },
  /**
   * Set accordion open/close state
   */
  open: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * Set action button collection
   */
  actions: {
    type: Array as PropType<IAction[]>,
    validator: (type: IAction[]) => {
      new useIsArray(type)
      return true
    },
  },
})
const { id, actions } = toRefs(props)
const { parseGlobModules } = useComponentsMapping({
  modules: import.meta.glob('@components/**/*.vue'),
})

const { create } = useAsyncComponents({ modules: parseGlobModules() })
const { isRenderableSlot } = useRenderableSlots()

const shallowIconComponent: Component = shallowRef()
const bindIconProps = computed(() => {
  return {
    id: `openClose${id?.value}`,
    size: 's',
    hasIcon: currentIcon.value ?? 'iconAdd',
    isRounded: false,
    unsetStyle: true,
    style: { '--custom-foreground': 'black' },
  }
})

const handleToggle = (event: Event) => {
  const targetDetails = event.target as HTMLDetailsElement
  currentIcon.value = targetDetails.open ? 'iconSubtract' : 'iconAdd'
}

const hasActions = computed(() => {
  const evaluables = [actions?.value !== undefined, (actions?.value?.length ?? 0) > 0]
  return evaluables.every((state: boolean) => state)
})

onMounted(async () => {
  shallowIconComponent.value = await create({ component: 'BaseButton' })
})
</script>
<style src="./AccordionInfo.scss" lang="scss" scoped></style>
