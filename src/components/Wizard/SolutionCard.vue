<template>
  <div>
    <div class="card solution-card">
      <div class="header">
        Solution
        <i
          class="fas fa-chevron-down"
          @click="displayContent = !displayContent"
        ></i>
      </div>
    </div>
    <div v-if="displayContent" class="card-content solution-card">
      <p>
        create a solution
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolutionCard",
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
