import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes as authRoutes } from './modules/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/auth',
  },
  ...authRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
