<template>
  <div>
    <div class="card problem-card">
      <div class="header">
        Problem
        <i
          class="fas fa-chevron-down"
          @click="displayContent = !displayContent"
        ></i>
      </div>
    </div>
    <div v-if="displayContent" class="card-content problem-card">
      <p class="mb-1">
        What is the problem you ar solving?
        <br />
        Make some research to know what is your user problematics
      </p>
      <input type="text" placeholder="What is your user problem?" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProblemCard",
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
