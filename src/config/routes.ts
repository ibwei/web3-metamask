import { IRoute } from 'umi';

const routes: IRoute[] = [
  {
    path: '/',
    component: '@/layouts/app.layout',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: '@/pages/home/index', exact: true },
      {
        path: '/user',
        component: '@/pages/user/index',
        routes: [
          { path: '/user', redirect: '/user/login' },
          { path: '/user/login', component: '@/pages/user/login/index' },
        ],
      },
    ],
  },
  { path: '*', component: '@/pages/404/index' },
];

export default routes;
