import { IRoute } from 'umi';

const routes: IRoute[] = [
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: '@/pages/index', exact: true },
      {
        path: '/metamask',
        component: '@/layouts/default.layout',
        routes: [
          {
            path: '/metamask',
            redirect: '/metamask/connect',
          },
          {
            path: '/metamask/connect',
            component: '@/pages/MetaMask/Connect/index',
            exact: true,
          },
        ],
      },
      {
        path: '/user',
        component: '@/pages/user/index',
        exact: true,
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
