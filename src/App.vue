<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import firebase from './firebase';
import { useUser } from './modules/user';

export default {
  setup(props, context) {
    const { setUser } = useUser();

    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);

      const routeName = context.root.$route.name;

      if (user && (routeName !== 'home')) {
        context.root.$router.push({ name: 'home' });
        return;
      }

      const legitRoutes = ['sign-in', 'create-user'];
      if (!user && !legitRoutes.includes(routeName)) {
        context.root.$router.push({ name: 'sign-in' });
      }
    });
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
