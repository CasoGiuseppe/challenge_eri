<template>
  <component
    :is="asyncComponents"
    :class="['base-icon', `base-icon--is-${baseIconSize}`]"
    v-bind="semanticIconType"
  />
</template>

<script lang="ts" setup>
import { type PropType, computed, shallowRef, toRefs, watchEffect } from 'vue'
import type { Names, SemanticRule } from './types'
import {
  SEMANTIC_RULES,
  SUITABLE_NAMES,
  SUITABLE_SEMANTIC_RULES,
  SUITABLE_SIZES,
  DEFAULT_RULE_TYPE,
} from './constants'
import { useValidateTypeUnion } from '@validators/useValidateTypeUnion'
import { useIsString } from '@validators/typeCheckers/useIsString'
import { useIsArray } from '@validators//typeCheckers/useIsArray'
import useIconsGlobFilesHandle from './composables/useIconsGlobFilesHandle'

const props = defineProps({
  /**
   * Set the name of the ui icon component
   */
  name: {
    type: String as PropType<Names>,
    required: true,
    validator: (type: (typeof SUITABLE_NAMES)[number]) => {
      new useValidateTypeUnion(
        new useIsArray([...SUITABLE_NAMES]).value,
        new useIsString(type as string).value,
      )
      return true
    },
  },
  /**
   * Set the size of the ui icon component [l, m, s]
   */
  size: {
    type: String as PropType<(typeof SUITABLE_SIZES)[number]>,
    default: 'm',
    validator: (type: (typeof SUITABLE_SIZES)[number]) => {
      new useValidateTypeUnion(
        new useIsArray([...SUITABLE_SIZES]).value,
        new useIsString(type).value,
      )
      return true
    },
  },
  /**
   * Set the semantic meaning of the ui icon component
   */
  semanticMeaning: {
    type: String as PropType<(typeof SUITABLE_SEMANTIC_RULES)[number]>,
    default: DEFAULT_RULE_TYPE,
    validator: (type: (typeof SUITABLE_SEMANTIC_RULES)[number]) => {
      new useValidateTypeUnion(
        new useIsArray([...SUITABLE_SEMANTIC_RULES]).value,
        new useIsString(type).value,
      )
      return true
    },
  },
})

const { name, size, semanticMeaning } = toRefs(props)
const baseIconSize = computed(() => {
  if (typeof size.value !== 'string') {
    return
  }
  return size.value
})

const asyncComponents = shallowRef<null | unknown>()
const semanticIconType = computed<SemanticRule>(() => {
  return SEMANTIC_RULES[semanticMeaning?.value]
})

watchEffect(async () => {
  if (!name.value) {
    return
  }

  const { asyncLoader } = useIconsGlobFilesHandle({
    name: name.value,
  })

  asyncComponents.value = await asyncLoader()
})
</script>

<style src="./BaseIcon.less" lang="less"></style>
