<template>
  <div class="sign-in-view">
    <h2>Sign In</h2>

    <form @submit.prevent="submit">
      <label class="form-item">
        <span class="label-text">Email</span>

        <input
          v-model="email"
          required
          type="email"
        >
      </label>

      <label class="form-item">
        <span class="label-text">Password</span>

        <input
          v-model="password"
          required
          type="password"
        >
      </label>

      <div class="form-item">
        <button>Sign In</button>
      </div>
    </form>

    <p
      v-if="errorMessage"
      class="error-message"
    >
      {{ errorMessage }}
    </p>

    <p>
      <router-link :to="{ name: 'create-user' }">
        Create User
      </router-link>
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import firebase from '@/firebase';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const submit = () => {
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .catch((error) => {
          errorMessage.value = error.message;
        });
    };

    return {
      email,
      password,
      errorMessage,
      submit,
    };
  },

};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}

.form-item {
  margin: 5px 0;
  display: flex;
  flex-direction: column;
}

.error-message {
  color: red;
}
</style>
