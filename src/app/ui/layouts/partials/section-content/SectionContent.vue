<template>
  <section class="section-content">
    <RouterView v-slot="{ Component }">
      <TransitionIs type="from-bottom" :timing="SUITABLE_TIMING.FAST">
        <component :is="Component" />
      </TransitionIs>
    </RouterView>
  </section>
</template>
<script setup lang="ts">
import TransitionIs from '@components/abstracts/transition-is/TransitionIs.vue'
import { SUITABLE_TIMING } from '@components/abstracts/transition-is/types'
</script>
<style src="./SectionContent.scss" lang="scss" scoped></style>
