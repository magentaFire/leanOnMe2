<template class="login">
  <div>
    <section>
      <h4>
        To begin we gather information about your idea.
      </h4>
      <div class="form">
        <input type="text" placeholder="Project name" />
        <input type="text" placeholder="Logo" />
        <input type="text" placeholder="Category" />
        <input type="text" placeholder="Tags" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Invite friends" />
      </div>
      <router-link :to="{ name: 'canvas' }" class="contenBtn">
        <button>
          Save
        </button>
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
