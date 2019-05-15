<template>
  <div>
    <h2>LEAN ON ME</h2>
    <div class="contentBtn">
      <button>
        LOGIN
      </button>
      <button>
        JOIN UP
      </button>
    </div>
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
