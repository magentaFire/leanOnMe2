<template>
  <div class="container">
    <div class="contentImg">
      <img src="@/assets/magenta.jpg" alt="" class="mb-3" />
    </div>
    <div>
      <div class="form">
        <input class="mb-1" type="text" name="name" placeholder="Name" />
        <input
          class="mb-1"
          type="text"
          name="location"
          placeholder="Location"
        />
        <input class="mb-1" type="email" name="email" placeholder="Email" />
        <input class="mb-1" type="text" name="phone" placeholder="Phone" />
        <input class="mb-1" type="text" name="Age" placeholder="Age" />
        <input class="mb-1" type="text" name="Gender" placeholder="Gender" />
      </div>
      <div class="contentBtn">
        <router-link :to="{ name: 'description' }" class="contenBtn">
          <button>
            Save
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/style.scss";
img {
  max-width: 60vw;
  transform: rotate(-90deg);
}
</style>
