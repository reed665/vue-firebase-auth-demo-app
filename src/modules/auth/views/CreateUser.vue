<template>
  <!-- eslint-disable vue/multiline-html-element-content-newline -->
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <div class="create-user">
    <h2>Create User</h2>

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
        <button>Create user</button>
      </div>
    </form>

    <p
      v-if="errorMessage"
      class="error-message"
    >
      {{ errorMessage }}
    </p>

    <p>
      Or <router-link :to="{ name: 'signin' }">Sign In</router-link> instead
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import firebase from '@/firebase';

export default {
  setup(props, context) {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const submit = () => {
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
          context.root.$router.push({ name: 'home' });
        })
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
