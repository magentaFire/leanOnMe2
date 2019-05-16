<template>
  <div>
    <div class="card revenue-card">
      <div class="header">
        Revenue streams
        <i
          class="fas fa-chevron-down"
          @click="displayContent = !displayContent"
        ></i>
      </div>
    </div>
    <div v-if="displayContent" class="card-content revenue-card">
      <p class="mb-1">
        How will you get paid?
        <br />
        Here is where you make money! so strive!
      </p>
      <input type="text" placeholder="Monetize your idea" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RevenueCard",
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
