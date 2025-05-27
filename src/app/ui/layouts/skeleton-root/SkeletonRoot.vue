<template>
  <section class="app-layout">
    <aside class="app-layout__sidebar">
      <RouterView v-slot="{ Component }" name="aside">
        <TransitionIs type="opacity" :timing="SUITABLE_TIMING.FAST">
          <component :is="Component" />
        </TransitionIs>
      </RouterView>
    </aside>
    <header class="app-layout__header">
      <RouterView v-slot="{ Component }" name="header">
        <component :is="Component" />
      </RouterView>
    </header>
    <section class="app-layout__content">
      <RouterView
        v-slot="{
          Component,
          route: {
            meta: { family },
          },
        }"
        name="content"
      >
        <TransitionIs type="from-bottom">
          <component :is="Component" :key="family" />
        </TransitionIs>
      </RouterView>
    </section>
  </section>
</template>
<script setup lang="ts">
import TransitionIs from '@components/abstracts/transition-is/TransitionIs.vue'
import { SUITABLE_TIMING } from '@components/abstracts/transition-is/types'
</script>
