<template>
  <nav class="user-info-menu" :id="id" v-if="hasItems">
    <TransitionIs group tag="ul" type="from-top" class="user-info-menu__list">
      <li
        v-for="({ id, label, icon, to, type }, index) of items"
        :key="id"
        :style="{ transitionDelay: `${index * 0.15}s` }"
      >
        <slot name="action" :property="{ id, label, icon, to, type }" />
      </li>
    </TransitionIs>
  </nav>
</template>
<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import TransitionIs from '@components/abstracts/transition-is/TransitionIs.vue'
import type { ILocaleLangages } from '@shared/stores/configuration/locales/interfaces'

const props = defineProps({
  /**
   * Set uniqueId for ui user navigation item
   */
  id: {
    type: String as PropType<string>,
    validator: (type: string) => {
      new useIsString(type as string)
      return true
    },
  },
  /**
   * Set the user navigation items
   */
  items: {
    type: Array as PropType<ILocaleLangages[]>,
    validator: (type: ILocaleLangages[]) => {
      new useIsArray(type)
      return true
    },
  },
})

const { items } = toRefs(props)
const hasItems = computed(() => {
  const evaluables = [items?.value !== undefined, (items?.value?.length ?? 0) > 0]
  return evaluables.every((state: boolean) => state)
})
</script>
<style src="./UserInfoMenu.scss" lang="scss" scoped></style>
