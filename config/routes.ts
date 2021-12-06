export default [
  //
  { path: '/', component: '@/pages/index', access: 'normalRouteFilter' },
  { path: '/user/list', component: '@/pages/user/list', access: 'normalRouteFilter' },
  { path: '/user/login', component: '@/pages/user/login', access: 'noAccess' },
  { path: '/403', component: '@/pages/403', access: 'noAccess' },
  { path: '/404', component: '@/pages/404', access: 'noAccess' },
  { path: '/500', component: '@/pages/500', access: 'noAccess' },
];
