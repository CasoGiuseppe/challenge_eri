<template>
  <h1>Welcome to Eri Bancaire</h1>
  <BaseButton id="welcome" is="router-link" :to="{ name: 'app' }">go to app</BaseButton>
</template>
<script setup lang="ts">
import BaseButton from '@components/base/base-button/BaseButton.vue'
</script>
