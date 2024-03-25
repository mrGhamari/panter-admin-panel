import { RouteRecordRaw } from 'vue-router';
import appRouteList from 'src/router/appRouteList';
import publicRoutes from 'src/router/publicRoutes';

const routeGuards: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default publicRoutes.concat(appRouteList).concat(routeGuards);
