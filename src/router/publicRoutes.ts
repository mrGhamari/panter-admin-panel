import { RouteRecordRaw } from 'vue-router';

const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('layouts/loginLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/login/loginPage.vue'),
      },
    ],
  },
];

export default publicRoutes;
