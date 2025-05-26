<template>
  <section class="section-content">
    <Suspense timeout="0">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </Suspense>
  </section>
</template>
<style src="./SectionContent.scss" lang="scss" scoped></style>
