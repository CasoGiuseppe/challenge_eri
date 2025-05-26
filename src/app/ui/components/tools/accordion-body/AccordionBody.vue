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
      <ul class="accordion-body__actions">
        <li>
          <component
            v-if="shallowIconComponent"
            :is="shallowIconComponent"
            v-bind="{ ...bindIconProps }"
          />
        </li>
      </ul>
    </summary>
  </details>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, shallowRef, toRefs, type Component, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useRenderableSlots } from '@composables/useRenderableSlots'
import useAsyncComponents from '@composables/useAsyncComponents'
import useComponentsMapping from '@composables/useComponentsMapping'

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
const { isRenderableSlot } = useRenderableSlots()
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
    style: { '--custom-foreground': 'black' },
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
<style src="./AccordionBody.scss" lang="scss" scoped></style>
