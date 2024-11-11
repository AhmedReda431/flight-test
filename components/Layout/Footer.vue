<template>
  <v-footer color="grey lighten-4" class="p-0 m-0">
    <div class="footer-data-holder pa-8 w-100 h-100">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" class="d-flex flex-column align-center">
            <!-- Logo -->
            <nuxt-link :to="localePath('/')">
              <div class="logo-holder">
                <img src="~/assets/images/logo.svg" alt="" class="w-100" />
              </div>
            </nuxt-link>
          </v-col>

          <v-col cols="12" md="3">
            <h5 class="font-weight-bold list-head">{{$t('About')}}</h5>
            <v-list-item-group>
              <nuxt-link to="/about" class="footer-link"
                >{{$t('About GooseFlight')}}</nuxt-link
              >
              <nuxt-link to="/how-it-works" class="footer-link"
                >{{$t('How it works')}}</nuxt-link
              >
              <nuxt-link to="/blog" class="footer-link">{{$t('Blog')}}</nuxt-link>
              <nuxt-link to="/forum" class="footer-link">{{$t('Forum')}}</nuxt-link>
            </v-list-item-group>
          </v-col>

          <v-col cols="12" md="3">
            <h5 class="font-weight-bold list-head">{{$t('Support')}}</h5>
            <v-list-item-group>
              <nuxt-link to="/help-center" class="footer-link"
                >{{$t('Help Center')}}</nuxt-link
              >
              <nuxt-link to="/contact" class="footer-link"
                >{{$t('Contact us')}}</nuxt-link
              >
              <nuxt-link to="/privacy-policy" class="footer-link"
                >{{$t('Privacy policy')}}</nuxt-link
              >
              <nuxt-link to="/terms-of-service" class="footer-link"
                >{{$t('Terms of service')}}</nuxt-link
              >
              <nuxt-link to="/trust-safety" class="footer-link"
                >{{$t('Trust and safety')}}</nuxt-link
              >
              <nuxt-link to="/accessibility" class="footer-link"
                >{{$t('Accessibility')}}</nuxt-link
              >
            </v-list-item-group>
          </v-col>

          <v-col cols="12" md="3">
            <h5 class="font-weight-bold list-head">{{$t('Get the app')}}</h5>
            <v-list-item-group>
              <nuxt-link to="/android-app" class="footer-link"
                >{{$t('Tripma for Android')}}</nuxt-link
              >
              <nuxt-link to="/ios-app" class="footer-link"
                >{{$t('Tripma for iOS')}}</nuxt-link
              >
              <nuxt-link to="/mobile-site" class="footer-link"
                >{{$t('Mobile site')}}</nuxt-link
              >
              <img src="~/assets/images/app_store.svg" max-width="120" class="footer-link" />
              <img src="~/assets/images/google_play.svg" max-width="120"  />
            </v-list-item-group>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-data-holder {
  background-color: #ffffffa3;
}
.footer-link {
  display: block;
  margin-bottom: 5px;
  color: #8494b5;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}
.list-head {
  color: #6e7491;
}
</style>
