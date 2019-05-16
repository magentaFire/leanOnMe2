<template>
  <div>
    <div class="card value-card">
      <div class="header">
        Value Propositions
        <i
          class="fas fa-chevron-down"
          @click="displayContent = !displayContent"
        ></i>
      </div>
    </div>
    <div v-if="displayContent" class="card-content value-card">
      <p class="mb-1">
        Seduce your user!
        <br />
        Be creative: A simple, yet compelling phrase will do the work for you
        <br />
        Make a prospect or client/user out of an unaware visitor
      </p>
      <input type="text" placeholder="What does your user need?" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ValueCard",
  data() {
    return {
      displayContent: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/style.scss";
</style>
