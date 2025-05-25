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
      <slot name="summary" />
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
})
const { id } = toRefs(props)
const { parseGlobModules } = useComponentsMapping({
  modules: import.meta.glob('@components/**/*.vue'),
})

const { create } = useAsyncComponents({ modules: parseGlobModules() })
const shallowIconComponent: Component = shallowRef()
const bindIconProps = computed(() => {
  return {
    id: `openClose${id?.value}`,
    size: 's',
    hasIcon: currentIcon.value ?? 'iconAdd',
    isRounded: false,
    unsetStyle: true,
  }
})

const handleToggle = (event: Event) => {
  const targetDetails = event.target as HTMLDetailsElement
  currentIcon.value = targetDetails.open ? 'iconSubtract' : 'iconAdd'
}

onMounted(async () => {
  shallowIconComponent.value = await create({ component: 'BaseButton' })
})
</script>
<style src="./AccordionInfo.scss" lang="scss" scoped></style>
