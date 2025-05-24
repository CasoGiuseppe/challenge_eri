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
    <TransitionIs v-if="hasBody" group tag="tbody" type="from-bottom">
      <tr
        v-for="({ row }, index) of body"
        :key="index"
        :style="{ transitionDelay: `${index * 0.05}s` }"
      >
        <td v-for="{ id, label, action } of row" :key="id">
          <slot name="body" :property="{ id, label, action }" />
        </td>
      </tr>
    </TransitionIs>
  </table>
</template>
<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import type { ICell, IRow } from './types'
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
  /**
   * Set the elements for tbody
   */
  body: {
    type: Array as PropType<IRow[]>,
    required: true,
    validator: (type: IRow[]) => {
      new useIsArray(type)
      return true
    },
  },
})

const { id, head, body } = toRefs(props)
const hasHead = computed(() => {
  const evaluables = [head?.value !== undefined, (head?.value?.length ?? 0) > 0]
  return evaluables.every((state: boolean) => state)
})
const hasBody = computed(() => {
  const evaluables = [body?.value !== undefined, (body?.value?.length ?? 0) > 0]
  return evaluables.every((state: boolean) => state)
})
</script>
<style src="./TableList.scss" lang="scss" scoped></style>
