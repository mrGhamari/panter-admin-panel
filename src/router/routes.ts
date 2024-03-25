import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)*',
    component: () => import('app/public/ErrorNotFound.vue'),
  },
  {
    path: '/Login',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/login/loginPage.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Dashboard',
        path: 'Dashboard',
        component: () => import('pages/dashboard/dashboardPage.vue'),
      },
    ],
  },
];

export default routes;
