import { h, type ComponentPublicInstance } from 'vue'
import { useRenderableSlots } from '../../index'
import type { IRenderableSlots } from '../../interfaces'

export default {
  setup() {
    const { isRenderableSlot } = useRenderableSlots() as IRenderableSlots
    return {
      isRenderableSlot,
    }
  },
  render(this: ComponentPublicInstance<{ isRenderableSlot: (key: string) => boolean }>) {
    return h('section', [
      this.isRenderableSlot('default')
        ? h(
            'h1',
            { 'data-testID': 'ui-slot' },
            this.$slots.default ? this.$slots.default() : undefined,
          )
        : null,
    ])
  },
}
