<template>
  <section :id="id" class="navigation-tabs">
    <nav v-if="hasTabs" class="navigation-tabs__bar">
      <TransitionIs class="navigation-tabs__list" group tag="ul" type="from-bottom">
        <li
          v-for="({ id, label, to }, index) of tabs"
          :key="id"
          :style="{ transitionDelay: `${index * 0.05}s` }"
        >
          <slot name="tab" :property="{ id, label, to, selected: to.name === currentRoot }" />
        </li>
      </TransitionIs>
    </nav>
  </section>
</template>
<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import type { ITab } from './types'
import TransitionIs from '@components/abstracts/transition-is/TransitionIs.vue'
import { useRoute, type RouteRecordNameGeneric } from 'vue-router'

const route = useRoute()
const props = defineProps({
  /**
   * Set uniqueId for ui navigation tabs component
   */
  id: {
    type: String as PropType<string>,
    validator: (type: string) => {
      new useIsString(type as string)
      return true
    },
  },
  /**
   * Set the navigation items
   */
  tabs: {
    type: Array as PropType<ITab[]>,
    validator: (type: ITab[]) => {
      new useIsArray(type)
      return true
    },
  },
})

const { tabs } = toRefs(props)
const hasTabs = computed(() => {
  const evaluables = [tabs?.value !== undefined, (tabs?.value?.length ?? 0) > 0]
  return evaluables.every((state: boolean) => state)
})

const currentRoot = computed<RouteRecordNameGeneric | undefined>(() => {
  if (!route) {
    return
  }
  const { name } = route
  return name
})
</script>
<style src="./NavigationTabs.scss" lang="scss" scoped></style>
