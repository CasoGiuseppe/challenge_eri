<template>
  <section :class="['sidebar-menu', isExpanded ? 'sidebar-menu--is-expanded' : null]">
    <nav v-if="hasNavigation" class="sidebar-menu__list">
      <TransitionIs class="sidebar-menu__items" group tag="ul" type="from-left">
        <li
          v-for="({ id, translation, icon, to }, index) of navigation"
          :key="id"
          :style="{ transitionDelay: `${index * 0.15}s` }"
        >
          <slot name="navigation" :property="{ id, translation, icon, to, isExpanded }" />
        </li>
      </TransitionIs>
    </nav>
  </section>
</template>
<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import TransitionIs from '@components/abstracts/transition-is/TransitionIs.vue'
import type { IGlobalNavigation } from '@shared/stores/configuration/navigation/interfaces'

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
    type: Array as PropType<IGlobalNavigation[]>,
    validator: (type: IGlobalNavigation[]) => {
      new useIsArray(type)
      return true
    },
  },
  /**
   * Set expanded sidebar state
   */
  isExpanded: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
})

const { navigation } = toRefs(props)
const hasNavigation = computed(() => {
  const evaluables = [navigation?.value !== undefined, (navigation?.value?.length ?? 0) > 0]
  return evaluables.every((state: boolean) => state)
})
</script>
<style src="./SidebarMenu.scss" lang="scss" scoped></style>
