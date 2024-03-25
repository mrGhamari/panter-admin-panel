import MainLayout from 'layouts/MainLayout.vue';
import { RouteRecordRaw } from 'vue-router';

const appRouteList: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Dashboard',
        path: '/Dashboard',
        meta: { layout: MainLayout },
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },
];

export default appRouteList;
