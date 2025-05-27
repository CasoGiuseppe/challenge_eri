import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'customers',
  name: 'Customers',
  meta: { family: 'customers' },
  redirect: { name: 'General' },
  components: {
    default: () =>
      import(
        /* webpackChunkName: "CustomerBoard" */ '@modules/customer/presentation/ui/customer-board/CustomerBoard.vue'
      ),
  },
  children: [
    {
      path: 'general',
      name: 'General',
      meta: { family: 'customers' },
      components: {
        tabs: () =>
          import(
            /* webpackChunkName: "GeneralTab" */ '@modules/customer/presentation/ui/areas-info/general-tab/GeneralTab.vue'
          ),
      },
    },
    {
      path: 'communication',
      name: 'Communication',
      meta: { family: 'customers' },
      components: {
        tabs: () =>
          import(
            /* webpackChunkName: "CommunicationTab" */ '@modules/customer/presentation/ui/areas-info/communication-tab/CommunicationTab.vue'
          ),
      },
    },
    {
      path: 'statistic',
      name: 'Statistic',
      meta: { family: 'customers' },
      components: {
        tabs: () =>
          import(
            /* webpackChunkName: "StatisticTab" */ '@modules/customer/presentation/ui/areas-info/statistic-tab/StatisticTab.vue'
          ),
      },
    },
    {
      path: 'management',
      name: 'Management',
      meta: { family: 'customers' },
      components: {
        tabs: () =>
          import(
            /* webpackChunkName: "ManagementTab" */ '@modules/customer/presentation/ui/areas-info/management-tab/ManagementTab.vue'
          ),
      },
    },
  ],
} as RouteRecordRaw
