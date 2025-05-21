import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import(/* webpackChunkName: "Test" */ '@components/base/BaseIndex.vue'),
    },
  ],
})

export default router
