<template>
  <nav class="nav-bar">
    <div class="nav-data-holder">
      <v-container>
        <div class="d-flex align-center justify-space-between">
          <!-- Logo -->
          <nuxt-link :to="localePath('/')">
            <div class="logo-holder">
              <img src="~/assets/images/logo.svg" alt="" class="w-100" />
            </div>
          </nuxt-link>

          <!-- Desktop Navigation Links -->
          <div
            class="routes-holder d-flex align-center justify-space-between desktop-only"
          >
            <nuxt-link :to="localePath('/')" class="nav-link">{{
              $t("Home")
            }}</nuxt-link>
            <nuxt-link :to="localePath('/promo')" class="nav-link"
              >{{$t('Promo')}}</nuxt-link
            >
            <nuxt-link :to="localePath('/booking')" class="nav-link"
              >{{$t('My Booking')}}</nuxt-link
            >
          </div>

          <!-- Language and Sign In for Desktop -->
          <div class="actions-holder d-flex gap-3 desktop-only align-center">
            <div class="languages-holder d-flex gap-3">
              <div class="en-holder gap-3" v-if="$i18n.locale == 'ar'">
                <NuxtLink :to="switchLocalePath('en')">
                  <span>
                    <img src="~/assets/images/flags/en-lang.png" alt="flag" />
                  </span>
                  <!-- <span class="mx-2">EN</span> -->
                </NuxtLink>
              </div>
              <div class="ar-holder gap-3" v-else>
                <NuxtLink :to="switchLocalePath('ar')">
                  <span>
                    <img src="~/assets/images/flags/ar-lang.png" alt="flag" />
                  </span>
                  <!-- <span class="mx-2">AR</span> -->
                </NuxtLink>
              </div>
            </div>
            <div class="auth-holder">
              <nuxt-link
                :to="localePath('/auth/login')"
                class="side-sign-in-btn"
                >{{$t('Sign In')}}</nuxt-link
              >
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button class="menu-toggle mobile-only" @click="toggleMenu">☰</button>
        </div>
      </v-container>
    </div>

    <!-- Side Menu for Mobile -->
    <div class="side-menu" :class="{ 'side-menu-open': isMenuOpen }">
      <button class="close-btn" @click="toggleMenu">✕</button>
      <nuxt-link :to="localePath('/')" class="side-link" @click="closeMenu">{{
        $t("Home")
      }}</nuxt-link>
      <nuxt-link :to="localePath('/promo')" class="side-link" @click="closeMenu"
        >{{$t('Promo')}}</nuxt-link
      >
      <nuxt-link
        :to="localePath('/booking')"
        class="side-link"
        @click="closeMenu"
        >{{$t('My Booking')}}</nuxt-link
      >
      <div class="languages-holder d-flex gap-3">
        <div class="en-holder gap-3" v-if="$i18n.locale == 'ar'">
          <NuxtLink :to="switchLocalePath('en')">
            <span>
              <img src="~/assets/images/flags/en-lang.png" alt="flag" />
            </span>
            <!-- <span class="mx-2">EN</span> -->
          </NuxtLink>
        </div>
        <div class="ar-holder gap-3" v-else>
          <NuxtLink :to="switchLocalePath('ar')">
            <span>
              <img src="~/assets/images/flags/ar-lang.png" alt="flag" />
            </span>
            <!-- <span class="mx-2">AR</span> -->
          </NuxtLink>
        </div>
      </div>
      <nuxt-link :to="localePath('/auth/login')" class="side-sign-in-btn"
        >{{$t('Sign In')}}</nuxt-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    switchLocale(locale) {
      this.$i18n.locale = locale;
      this.closeMenu();
    },
  },
  watch: {
    $route: {
      handler() {
        this.closeMenu();
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.nav-data-holder {
  padding: 20px 0;
}

.logo-holder {
  font-weight: bold;
  font-size: 1.2rem;
}

.routes-holder,
.actions-holder {
  display: flex;
  gap: 20px;
}

.nav-link,
.sign-in-btn {
  color: #000;
  text-decoration: none;
}

.sign-in-btn {
  background-color: orange;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: 500;
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
}

/* Side Menu */
.side-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: right 0.3s ease;
  z-index: 99;
}

.side-menu-open {
  right: 0;
}

.close-btn {
  align-self: flex-end;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
}

.side-link,
.side-sign-in-btn {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
}

.side-sign-in-btn {
  background-color: orange;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  text-align: center;
}

.side-lang {
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  padding: 5px 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .desktop-only {
    display: none !important;
  }
  .mobile-only {
    display: inline;
  }
}
</style>
