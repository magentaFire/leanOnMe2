<template>
  <div>
    <div class="card costs-card">
      <div class="header">
        Costs
        <i
          class="fas fa-chevron-down"
          @click="displayContent = !displayContent"
        ></i>
      </div>
    </div>
    <div v-if="displayContent" class="card-content costs-card">
      <p>
        What are the costs to build your company?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CostsCard",
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
