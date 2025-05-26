import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'admin',
  name: 'Admin',
  meta: { family: 'admin' },
  components: {
    default: () =>
      import(
        /* webpackChunkName: "AdministrationBoard" */ '@modules/administration/presentation/ui/administration-board/AdministrationBoard.vue'
      ),
  },
} as RouteRecordRaw
