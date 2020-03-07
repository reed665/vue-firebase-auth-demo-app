import AuthView from './views/AuthView.vue';

import SignIn from './views/SignIn.vue';
import CreateUser from './views/CreateUser.vue';

export default [
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    redirect: { name: 'signin' },
    children: [
      {
        path: 'signin',
        name: 'signin',
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
