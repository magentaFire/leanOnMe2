<template>
  <div>
    <div class="card advantage-card">
      <div class="header">
        Unfair Advantage
        <i
          class="fas fa-chevron-down"
          @click="displayContent = !displayContent"
        ></i>
      </div>
    </div>
    <div v-if="displayContent" class="card-content advantage-card">
      <p>
        Skills you have that will help you to achieve your goals
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvantageCard",
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
