<template>
  <div>
    <div class="card metrics-card">
      <div class="header">
        Key metrics
        <i
          class="fas fa-chevron-down"
          @click="displayContent = !displayContent"
        ></i>
      </div>
    </div>
    <div v-if="displayContent" class="card-content metrics-card">
      <p>
        Metrics
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetricsCard",
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
