import type { Component } from 'vue'
import type { TestPropType } from './types'
import * as VueTestUtils from '@vue/test-utils'
import {
  keyUseAsyncComponent,
  keyUseMappingComponent,
  keyUseRenderableSlot,
} from '@shared/types/symbols'
import useAsyncComponents from '@composables/useAsyncComponents'
import useComponentsMapping from '@composables/useComponentsMapping'
import { useRenderableSlots } from '@composables/useRenderableSlots'

export const mountComponent = async (
  component: Component,
  props?: TestPropType,
  typeMount: 'shallowMount' | 'mount' = 'shallowMount',
) => {
  return await VueTestUtils[typeMount](component, {
    ...props,
    global: {
      ...(props?.global || {}),
      directives: {
        ...(props?.global?.directives || {}),
      },
      provide: {
        [keyUseAsyncComponent as symbol]: useAsyncComponents,
        [keyUseMappingComponent as symbol]: useComponentsMapping,
        [keyUseRenderableSlot as symbol]: useRenderableSlots,
      },
    },
  })
}
