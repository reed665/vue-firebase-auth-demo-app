import Vue from 'vue';

import './plugins/composition-api';

import router from './router';
import App from './App.vue';

import firebase from './firebase';

import { useUser } from './modules/user';

const { setUser } = useUser();

Vue.config.productionTip = false;

let mounted = false;

firebase.auth().onAuthStateChanged((user) => {
  if (!mounted) {
    setUser(user);

    const app = new Vue({
      router,
      render: (h) => h(App),
    });
    app.$mount('#app');

    mounted = true;
  }
});
