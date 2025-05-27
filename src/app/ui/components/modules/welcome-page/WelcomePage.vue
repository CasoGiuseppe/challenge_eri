<template>
  <section class="welcome-page">
    <h1>{{ translate({ key: `WELCOME.message` }) }}</h1>
    <BaseButton id="welcome" is="router-link" :to="{ name: 'app' }">
      {{ translate({ key: `WELCOME.link` }) }}
    </BaseButton>
  </section>
</template>
<script setup lang="ts">
import { inject } from 'vue'
import BaseButton from '@components/base/base-button/BaseButton.vue'
import { keyUseTranslation } from '@shared/types/symbols'
import type { IProvidedTranslation } from '@composables/useTranslations/interfaces'

const useTranslation = inject(keyUseTranslation) as IProvidedTranslation
const { translate } = useTranslation()
</script>
<style src="./WelcomePage.scss" lang="scss" scoped></style>
