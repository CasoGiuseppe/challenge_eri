<template>
  <section>base component</section>
  <NavigationTabs id="id" :tabs="tabs">
    <template #tab="{ property: { id, label, to, selected = false } }">
      <BaseTab :id="id" :to="to" :selected="selected">{{ label }}</BaseTab>
    </template>
  </NavigationTabs>
</template>
<script setup lang="ts">
import NavigationTabs from '@components/tools/navigation-tabs/NavigationTabs.vue'
import BaseTab from './base-tab/BaseTab.vue'

const tabs = [
  {
    id: '1',
    label: 'tab 1',
    to: { name: 'root' },
  },
  {
    id: '2',
    label: 'tab 2',
    to: { name: 'root' },
  },
]
</script>
