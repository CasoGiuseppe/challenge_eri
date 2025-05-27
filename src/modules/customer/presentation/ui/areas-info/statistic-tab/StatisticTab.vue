<template>
  <h3>
    {{ translate({ key: `MOCKS.panels.statistics` }) }}
  </h3>
</template>
<script setup lang="ts">
import { inject } from 'vue'
import { keyUseTranslation } from '@shared/types/symbols'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'

const useTranslation = inject(keyUseTranslation) as IProvidedTranslation
const { translate } = useTranslation()
</script>
