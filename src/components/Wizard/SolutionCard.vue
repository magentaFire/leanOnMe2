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
      <p class="mb-1">
        Suggest a few solutions to solve your user problems
        <br />
        Be creative: think about your user and propose an awesome solution
        <br />
        If you think in making money here, you are not really thinking about
        your user(s) and how to help them
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
