import { createRouter, createWebHistory } from 'vue-router'
import { NetworkConstants } from '@modules/core/utilities/index'

const { BASE_APP_LOCALE } = NetworkConstants
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: () => ({
        name: 'app',
        query: { lang: BASE_APP_LOCALE },
      }),
      component: () =>
        import(/* webpackChunkName: "RootLayout" */ '@layouts/skeleton-root/SkeletonRoot.vue'),

      children: [
        {
          path: 'app/:lang?',
          name: 'app',
          components: {
            aside: () =>
              import(
                /* webpackChunkName: "SideNavigation" */ '@layouts/partials/side-navigation/SideNavigation.vue'
              ),
            content: () =>
              import(
                /* webpackChunkName: "ContentBody" */ '@layouts/partials/section-content/SectionContent.vue'
              ),
          },
        },
        {
          path: '/:pathMatch(.*)*',
          redirect: { name: 'app' },
        },
      ],
    },
  ],
})

router.beforeEach((to) => {
  if (!to.name) {
    return { name: 'app' }
  }
})

export default router
