<template>
  <!-- eslint-disable vue/multiline-html-element-content-newline -->
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <div class="home-view">
    <template v-if="user">
      <h2>Home view</h2>

      <p>
        User email: {{ user.email }}
      </p>

      <button @click="signOut">Sign out</button>
    </template>

    <p v-else>
      Hi there! Please <router-link :to="{ name: 'sign-in' }">Sign In</router-link>
      or <router-link :to="{ name: 'create-user' }">Create User</router-link>
    </p>
  </div>
</template>

<script>
import firebase from '@/firebase';
import { useUser } from '@/modules/user';

export default {
  setup() {
    const { user } = useUser();

    const signOut = () => {
      firebase.auth().signOut()
        .catch((err) => {
          console.error(err);
        });
    };

    return {
      signOut,
      user,
    };
  },
};
</script>
