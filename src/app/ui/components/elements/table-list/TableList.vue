<template>
  <table :id="id" class="table-list">
    <!--thead elements-->
    <thead v-if="hasHead">
      <TransitionIs group tag="tr" type="from-bottom">
        <th
          v-for="({ id, label, action }, index) of head"
          :key="id"
          :style="{ transitionDelay: `${index * 0.05}s` }"
        >
          <slot name="head" :property="{ label, action }" />
        </th>
      </TransitionIs>
    </thead>
  </table>
</template>
<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import type { ICell } from './types'
import TransitionIs from '@components/abstracts/transition-is/TransitionIs.vue'

const props = defineProps({
  /**
   * Set uniqueId for ui table component
   */
  id: {
    type: String as PropType<string>,
    validator: (type: string) => {
      new useIsString(type as string)
      return true
    },
  },
  /**
   * Set the elements for thead
   */
  head: {
    type: Array as PropType<ICell[]>,
    validator: (type: ICell[]) => {
      new useIsArray(type)
      return true
    },
  },
})

const { id, head } = toRefs(props)
const hasHead = computed(() => {
  const evaluables = [head?.value !== undefined, (head?.value?.length ?? 0) > 0]
  return evaluables.every((state: boolean) => state)
})
</script>
<style src="./TableList.scss" lang="scss" scoped></style>
