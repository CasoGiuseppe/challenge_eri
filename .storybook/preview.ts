import { type Preview } from '@storybook/vue3'
import { useArgs } from '@storybook/preview-api'
import { provide } from 'vue'
import {
  keyUseAsyncComponent,
  keyUseMappingComponent,
  keyUseRenderableSlot,
} from '../src/app/shared/types/symbols'
import useAsyncComponents from '../src/app/shared/composables/useAsyncComponents'
import useComponentsMapping from '../src/app/shared/composables/useComponentsMapping'
import { useRenderableSlots } from '../src/app/shared/composables/useRenderableSlots'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [
  (story, context) => {
    const [_, updateArgs] = useArgs()
    provide(keyUseAsyncComponent, useAsyncComponents)
    provide(keyUseMappingComponent, useComponentsMapping)
    provide(keyUseRenderableSlot, useRenderableSlots)
    return story({ ...context, updateArgs })
  },
  () => ({ template: '<story />' }),
]

export default preview
