<template class="login">
  <div>
    <section class="bk">
      <h2 class="titleLog">LEAN <i class="fas fa-power-off"></i>N ME</h2>
      <div class="contentBtn">
        <button>
          LOGIN
        </button>
        <button>
          JOIN UP
        </button>
      </div>
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
