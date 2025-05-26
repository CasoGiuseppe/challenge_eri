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
        <li>action</li>
      </ul>
    </summary>
  </details>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useRenderableSlots } from '@composables/useRenderableSlots'

defineProps({
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

const { isRenderableSlot } = useRenderableSlots()

const handleToggle = () => {
  //const targetDetails = event.target as HTMLDetailsElement
  // currentIcon.value = targetDetails.open ? 'iconSubtract' : 'iconAdd'
  return 'iconAdd'
}
</script>
<style src="./AccordionBody.scss" lang="scss" scoped></style>
