<template>
  <details
    :id="id"
    :title="title"
    :open="open"
    aria-labelledby="accordion-summary"
    aria-describedby="accordion-content"
    class="accordion-body"
    @toggle="handleToggle"
    ref="accordionDetail"
  >
    <summary id="accordion-summary" class="accordion-body__summary">
      <p v-if="isRenderableSlot('summary')" class="accordion-body__title">
        <slot name="summary" />
      </p>
      <TransitionIs class="accordion-body__actions" group tag="ul" type="from-bottom">
        <template v-if="hasActions">
          <li
            v-for="({ id, icon }, index) of actions"
            :key="id"
            :style="{ transitionDelay: `${index * 0.05}s` }"
          >
            <slot name="actions" :property="{ id, icon }"></slot>
          </li>
        </template>
        <li>
          <component
            v-if="shallowTrailingIconComponent"
            :is="shallowTrailingIconComponent"
            v-bind="{ ...bindIconProps }"
          />
        </li>
      </TransitionIs>
    </summary>
  </details>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, shallowRef, toRefs, type Component, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import { useRenderableSlots } from '@composables/useRenderableSlots'
import useAsyncComponents from '@composables/useAsyncComponents'
import useComponentsMapping from '@composables/useComponentsMapping'
import type { IAction } from './types'

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
const { isRenderableSlot } = useRenderableSlots()
const { parseGlobModules } = useComponentsMapping({
  modules: import.meta.glob('@components/**/*.vue'),
})

const { create } = useAsyncComponents({ modules: parseGlobModules() })

const shallowTrailingIconComponent: Component = shallowRef()
//const shallowLeadingIconComponent: Component = shallowRef()

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

const hasActions = computed(() => {
  const evaluables = [actions?.value !== undefined, (actions?.value?.length ?? 0) > 0]
  return evaluables.every((state: boolean) => state)
})

const handleToggle = (event: Event) => {
  const targetDetails = event.target as HTMLDetailsElement
  currentIcon.value = targetDetails.open ? 'iconSubtract' : 'iconAdd'
}

onMounted(async () => {
  shallowTrailingIconComponent.value = await create({ component: 'BaseButton' })
})
</script>
<style src="./AccordionBody.scss" lang="scss" scoped></style>
