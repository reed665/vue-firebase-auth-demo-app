import Vue from 'vue';
import VueRouter from 'vue-router';
import { useUser } from './modules/user';
import { HomeView } from './modules/home';
import { routes as authRoutes } from './modules/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      const { user } = useUser();

      if (user.value) {
        next();
      } else {
        next({ name: 'sign-in' });
      }
    },
  },
  ...authRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
