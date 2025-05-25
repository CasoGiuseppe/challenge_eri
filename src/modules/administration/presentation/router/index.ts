import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'admin',
  name: 'Admin',
  components: {
    default: () =>
      import(
        /* webpackChunkName: "AdministrationBoard" */ '@modules/administration/presentation/ui/administration-board/AdministrationBoard.vue'
      ),
  },
} as RouteRecordRaw
