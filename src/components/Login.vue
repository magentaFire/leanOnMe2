<template class="login">
  <div>
    <section class="bk">
      <img class="logo" src="@/assets/logo.png" alt="logo" />
      <p>We support you</p>
      <div class="introtBtn">
        <router-link :to="{ name: 'welcome' }">
          <button>
            LOGIN
          </button>
        </router-link>
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
@import "@/assets/style.scss";
</style>
