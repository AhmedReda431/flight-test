<template>
  <v-app>
    <div class="v-app-data-holder" :class="`lang-${$i18n.locale}`">
      <LayoutNavbar />
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
      <LayoutFooter />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
        {
          icon: "mdi-information",
          title: "About-Us",
          to: "/about",
        },
        {
          icon: "mdi-cog",
          title: "Test",
          to: "/test",
        },
        {
          icon: "mdi-cart",
          title: "Cart",
          to: "/cart",
        },
        {
          icon: "mdi-heart",
          title: "Wishlist",
          to: "/wishlist",
        },
        {
          icon: "mdi-view-carousel",
          title: "Slider",
          to: "/slider",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
