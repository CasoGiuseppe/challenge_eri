import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'customers',
  name: 'Customers',
  components: {
    default: () =>
      import(
        /* webpackChunkName: "CustomerBoard" */ '@modules/customer/presentation/ui/customer-board/CustomerBoard.vue'
      ),
  },
} as RouteRecordRaw
