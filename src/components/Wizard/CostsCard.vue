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
      <p class="mb-1">
        How much will cost build your company?
        <br />
        Make a list of regular outcome streams
        <br />
        List all the "one time" expenses you must do
        <br />
        Are you buying tools/machines to build your empire?
        <br />
        Renting a local?
      </p>
      <input type="text" placeholder="List outcome streams" />
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
