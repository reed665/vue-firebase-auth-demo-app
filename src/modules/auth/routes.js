import { useUser } from '@/modules/user';
import AuthView from './views/AuthView.vue';
import SignIn from './views/SignIn.vue';
import CreateUser from './views/CreateUser.vue';

export default [
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    beforeEnter: (to, from, next) => {
      const { user } = useUser();

      if (user.value) {
        next({ name: 'home' });
      } else {
        next();
      }
    },
    redirect: { name: 'sign-in' },
    children: [
      {
        path: 'sign-in',
        name: 'sign-in',
        component: SignIn,
      },
      {
        path: 'create-user',
        name: 'create-user',
        component: CreateUser,
      },
    ],
  },
];
