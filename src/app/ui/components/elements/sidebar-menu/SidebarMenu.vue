<template>
  <aside class="sidebar-menu">
    <nav v-if="hasNavigation" class="sidebar-menu__list">
      <TransitionIs group tag="ul" type="from-left">
        <li v-for="{ id, label, icon, to } of navigation" :key="id">
          <slot name="body" :property="{ id, label, icon, to }" />
        </li>
      </TransitionIs>
    </nav>
  </aside>
</template>
<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import type { INavigation } from './types'
import TransitionIs from '@components/abstracts/transition-is/TransitionIs.vue'

const props = defineProps({
  /**
   * Set uniqueId for ui sidebar component
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
  navigation: {
    type: Array as PropType<INavigation[]>,
    validator: (type: INavigation[]) => {
      new useIsArray(type)
      return true
    },
  },
})

const { navigation } = toRefs(props)
const hasNavigation = computed(() => {
  const evaluables = [navigation?.value !== undefined, (navigation?.value?.length ?? 0) > 0]
  return evaluables.every((state: boolean) => state)
})
</script>
