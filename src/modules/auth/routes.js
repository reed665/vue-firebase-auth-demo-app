import AuthView from './views/AuthView.vue';
import LoginView from './views/LoginView.vue';

export default [
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    redirect: { name: 'login' },
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginView,
      },
    ],
  },
];
