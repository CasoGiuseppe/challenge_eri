import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'customers',
  name: 'Customers',
  meta: { family: 'customer' },
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
      components: {
        tabs: () =>
          import(
            /* webpackChunkName: "GeneralTab" */ '@modules/customer/presentation/ui/tabs-info/general-tab/GeneralTab.vue'
          ),
      },
    },
    {
      path: 'communication',
      name: 'Communication',
      components: {
        tabs: () =>
          import(
            /* webpackChunkName: "CommunicationTab" */ '@modules/customer/presentation/ui/tabs-info/communication-tab/CommunicationTab.vue'
          ),
      },
    },
    {
      path: 'statistic',
      name: 'Statistic',
      components: {
        tabs: () =>
          import(
            /* webpackChunkName: "StatisticTab" */ '@modules/customer/presentation/ui/tabs-info/statistic-tab/StatisticTab.vue'
          ),
      },
    },
    {
      path: 'management',
      name: 'Management',
      components: {
        tabs: () =>
          import(
            /* webpackChunkName: "ManagementTab" */ '@modules/customer/presentation/ui/tabs-info/management-tab/ManagementTab.vue'
          ),
      },
    },
  ],
} as RouteRecordRaw
