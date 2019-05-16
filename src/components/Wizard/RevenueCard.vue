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
      <p>
        List the revenue streams to use
      </p>
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
