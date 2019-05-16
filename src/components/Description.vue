<template class="login">
  <div>
    <section class="container">
      <h2 class="mb-1">Tell us everything about your project!</h2>
      <i class="fas fa-lightbulb"></i>
      <p class="mb-2">
        What's your project about? The more you share, the more help we can get
        you to thrive in business
      </p>
      <div class="form">
        <input type="text" placeholder="Project name" />
        <input type="text" placeholder="Logo" />
        <input type="text" placeholder="Category" />
        <input type="text" placeholder="Tags" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Invite friends" />
      </div>
      <router-link :to="{ name: 'wizard' }" class="contenBtn">
        <div class="contentBtn">
          <button>
            Save
          </button>
        </div>
      </router-link>
    </section>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      obj: {
        bla: "algo",
        otrobla: []
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../assets/style.scss";
</style>
