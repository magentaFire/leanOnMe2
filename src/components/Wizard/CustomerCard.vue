<template>
  <div>
    <div class="card user-card">
      <div class="header">
        Customer segments
        <i
          class="fas fa-chevron-down"
          @click="displayContent = !displayContent"
        ></i>
      </div>
    </div>
    <div v-if="displayContent" class="card-content user-card">
      <p class="mb-1">
        To fill this field ask yourself:
        <br />
        Who is the user of your product?
        <br />
        Who could be the early adopters of your product/service?
      </p>
      <input type="text" placeholder="Who is your user(s)?" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerCard",
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
