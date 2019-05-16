<template>
  <div>
    <div class="card channels-card">
      <div class="header">
        Channels
        <i
          class="fas fa-chevron-down"
          @click="displayContent = !displayContent"
        ></i>
      </div>
    </div>
    <div v-if="displayContent" class="card-content channels-card">
      <p>
        Which channels will you use?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChannelsCard",
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
