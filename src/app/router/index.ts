import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: () => ({
        name: 'welcome',
      }),
      component: () =>
        import(/* webpackChunkName: "RootLayout" */ '@layouts/skeleton-root/SkeletonRoot.vue'),

      children: [
        {
          path: 'app',
          name: 'app',
          components: {
            aside: () =>
              import(
                /* webpackChunkName: "SideNavigation" */ '@layouts/partials/side-navigation/SideNavigation.vue'
              ),
            header: () =>
              import(
                /* webpackChunkName: "SideHeader" */ '@layouts/partials/section-header/SectionHeader.vue'
              ),
            content: () =>
              import(
                /* webpackChunkName: "ContentBody" */ '@layouts/partials/section-content/SectionContent.vue'
              ),
          },
        },
        {
          path: '/:pathMatch(.*)*',
          redirect: { name: 'welcome' },
        },
      ],
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () =>
        import(/* webpackChunkName: "RootLayout" */ '@app/ui/modules/welcome-page/WelcomePage.vue'),
    },
  ],
})

router.beforeEach((to) => {
  if (!to.name) {
    return { name: 'welcome' }
  }
})
export default router
