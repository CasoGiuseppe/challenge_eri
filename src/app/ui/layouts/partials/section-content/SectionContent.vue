<template>
  <section class="section-content">
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </section>
</template>
<style src="./SectionContent.scss" lang="scss" scoped></style>
