<template>
  <!-- eslint-disable vue/multiline-html-element-content-newline -->
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <div class="create-user">
    <h2>Create User</h2>

    <form @submit.prevent="submit">
      <label class="form-item">
        <span class="label-text">Email</span>

        <input
          required
          type="email"
        >
      </label>

      <label class="form-item">
        <span class="label-text">Password</span>

        <input
          required
          type="password"
        >
      </label>

      <div class="form-item">
        <button>Create user</button>
      </div>
    </form>

    <p>
      Or <router-link :to="{ name: 'signin' }">Sign In</router-link> instead
    </p>
  </div>
</template>

<script>
// import {} from '@vue/composition-api';

export default {
  setup() {
    const submit = (event) => {
      console.log(event);
    };

    return {
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
</style>
