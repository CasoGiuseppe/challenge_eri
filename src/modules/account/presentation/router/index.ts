import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'accounts',
  name: 'Accounts',
  meta: { family: 'accounts' },
  components: {
    default: () =>
      import(
        /* webpackChunkName: "AccountsBoard" */ '@modules/account/presentation/ui/account-board/AccountBoard.vue'
      ),
  },
} as RouteRecordRaw
