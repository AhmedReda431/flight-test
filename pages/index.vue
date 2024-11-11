<template>
  <div class="home-page-holder">
    <v-container>
      <HomePageBooking />
      <HomePageBlog />
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home",
  head() {
    return { title: "Home" };
  },
};
</script>
