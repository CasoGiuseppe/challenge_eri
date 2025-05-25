import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () =>
        import(/* webpackChunkName: "RootLayout" */ '@layouts/skeleton-root/SkeletonRoot.vue'),
    },
  ],
})

export default router
