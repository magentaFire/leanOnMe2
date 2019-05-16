<template>
  <div class="container">
    <h2 class="mb-1">Welcome!</h2>
    <i class="fas fa-coffee mb-1"></i>
    <p class="mb-3">
      Take the first steps to thrive! Congratulations on joning our women
      oriented business community, we call our menbers LEANies. Mentors and
      investorsare LEANers for us We hope to help you build your new company
      from scratch or grow along with mentors and other women who seek to make
      the business model a more inclusive place.
    </p>
    <div class="steps">
      <router-link :to="{ name: 'leanie-profile' }" class="link">
        <h3>Step 1</h3>
      </router-link>
      <h5>
        Tell us about you!
        <i class="fas fa-info-circle" @click="profileInfo = !profileInfo"></i>
      </h5>
      <p v-if="profileInfo" class="mb-1">
        We love to know about you, please tell us who you are.
      </p>
      <router-link :to="{ name: 'description' }" class="link">
        <h3>Step 2</h3>
      </router-link>
      <h5>
        Project description
        <i class="fas fa-info-circle" @click="projectInfo = !projectInfo"></i>
      </h5>
      <p v-if="projectInfo" class="mb-1">
        What's your project about? we are thrilled about helping you building
        your new empire.
      </p>
      <router-link :to="{ name: 'wizard' }" class="link">
        <h3>Step 3</h3>
      </router-link>
      <h5>
        Build your lean canvas
        <i class="fas fa-info-circle" @click="canvasInfo = !canvasInfo"></i>
      </h5>
      <p v-if="canvasInfo" class="mb-1">
        This tool will help you to build a business model you can share with
        LEANers or the LEANies community
      </p>
      <router-link :to="{ name: 'metrics' }" class="link">
        <h3>Step 4</h3>
      </router-link>
      <h5>
        Metrics
        <i class="fas fa-info-circle" @click="metricsInfo = !metricsInfo"></i>
      </h5>
      <p v-if="metricsInfo" class="mb-1">
        Feed our calculator with your company metrics and thrive with help of
        our LEANers network
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      profileInfo: false,
      projectInfo: false,
      canvasInfo: false,
      metricsInfo: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/style.scss";

.steps {
  display: block;
  text-align: left;
}
</style>
