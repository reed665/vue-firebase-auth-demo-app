import Vue from 'vue';
import VueRouter from 'vue-router';

import AuthView from './modules/auth/views/AuthView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/auth',
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
