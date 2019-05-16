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
      <p>
        Write the value proposition
      </p>
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
