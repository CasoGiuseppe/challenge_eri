<template>
  <details
    :id="id"
    :title="title"
    aria-labelledby="accordion-summary"
    aria-describedby="accordion-content"
    class="accordion-info"
  >
    <summary id="accordion-summary" class="accordion-info__summary">
      <slot name="summary" />
    </summary>
    <article id="accordion-content" class="accordion-info__content">
      <!-- @slot Content: slot to show accordion nested content -->
      <slot name="content" />
    </article>
  </details>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'

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
</script>
<style src="./AccordionInfo.scss" lang="scss" scoped></style>
