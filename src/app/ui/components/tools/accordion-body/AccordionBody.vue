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
        <component v-if="shallowIconComponent" :is="shallowIconComponent" :name="hasIcon" />
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
            v-if="shallowIconComponent"
            :is="shallowIconComponent"
            v-bind="{ ...bindButtonProps }"
          />
        </li>
      </TransitionIs>
    </summary>
    <article
      v-if="isRenderableSlot('content')"
      id="accordion-content"
      class="accordion-body__content"
    >
      <!-- @slot Content: slot to show accordion nested content -->
      <slot name="content" />
    </article>
  </details>
</template>
<script setup lang="ts">
import {
  computed,
  inject,
  onMounted,
  ref,
  shallowRef,
  toRefs,
  type Component,
  type PropType,
} from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import { useValidateTypeUnion } from '@validators/useValidateTypeUnion'
import type { IAction } from './types'
import type { Names } from '@components/base/base-icon/types'
import { SUITABLE_NAMES } from '@components/base/base-icon/constants'
import TransitionIs from '@components/abstracts/transition-is/TransitionIs.vue'
import {
  keyUseAsyncComponent,
  keyUseMappingComponent,
  keyUseRenderableSlot,
} from '@shared/types/symbols'
import type { IProvidedAsyncComponent } from '@shared/composables/useAsyncComponents/interfaces'
import type { IProvidedComponentMapping } from '@composables/useComponentsMapping/interfaces'
import type { IProvidedRenderableCheck } from '@composables/useRenderableSlots/interfaces'

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
  /**
   * Set the name of the ui accordion component
   */
  hasIcon: {
    type: String as PropType<Names>,
    validator: (icon: string) => {
      new useValidateTypeUnion(
        new useIsArray([...SUITABLE_NAMES]).value,
        new useIsString(icon).value,
      )

      return true
    },
  },
})

const { id, actions, hasIcon } = toRefs(props)

const useRenderableKeyCheck = inject(keyUseRenderableSlot) as IProvidedRenderableCheck
const useMappingKeyGetter = inject(keyUseMappingComponent) as IProvidedComponentMapping
const useAsyncKeyLoader = inject(keyUseAsyncComponent) as IProvidedAsyncComponent
const { parseGlobModules } = useMappingKeyGetter({
  modules: import.meta.glob('@components/**/*.vue'),
})
const { create } = useAsyncKeyLoader({ modules: parseGlobModules() })
const { isRenderableSlot } = useRenderableKeyCheck()

const shallowIconComponent: Component = shallowRef()

const bindButtonProps = computed(() => {
  return {
    id: `openClose${id?.value}`,
    name: currentIcon.value ?? 'iconAdd',
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
  shallowIconComponent.value = await create({ component: 'BaseIcon' })
})
</script>
<style src="./AccordionBody.scss" lang="scss" scoped></style>
