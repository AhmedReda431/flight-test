<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>{{ $t('Discover Our Paradise Worlds') }},<br />{{$t('Travel Anywhere Now!')}}</h1>
    </section>

    <div class="form-holder">
      <!-- Trip Selection Options -->
      <section class="trip-options">
        <v-radio-group v-model="tripType" row class="trip-type-selector">
          <v-radio :label="$t('One Way')" value="oneWay" color="orange"></v-radio>
          <v-radio
            :label="$t('Round Trip')"
            value="roundTrip"
            color="orange"
          ></v-radio>
        </v-radio-group>
      </section>

      <!-- Search Form -->
      <section class="search-form">
        <v-container fluid>
          <v-row dense class="mt-5">
            <!-- From Input -->
            <v-col cols="12" md="2">
              <label for="from">
                <span class="main-color">
                  <v-icon size="25">mdi-airplane-takeoff</v-icon></span
                >
                <span class="h6">{{ $t("from") }}</span>
              </label>
              <v-text-field
                :placeholder="$t('Flight from?')"
                hide-details
                class="custom-input"
              ></v-text-field>
            </v-col>

            <!-- To Input -->
            <v-col cols="12" md="2">
              <label for="to">
                <span class="main-color">
                  <v-icon size="25">mdi-airplane-landing</v-icon></span
                >
                <span class="h6">{{ $t("to") }}</span>
              </label>
              <v-text-field
                :placeholder="$t('Flight to?')"
                hide-details
                class="custom-input"
              ></v-text-field>
            </v-col>

            <!-- Depart Date Picker -->
            <v-col cols="12" md="2">
              <label for="to">
                <span class="main-color">
                  <v-icon size="25">mdi-calendar</v-icon></span
                >
                <span class="h6">{{ $t("Depart") }}</span>
              </label>
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="departDate"
                    :placeholder="$t('DD/MM/YYYY')"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    hide-details
                    class="custom-input"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="departDate"
                  no-title
                  scrollable
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <!-- Return Date Picker -->
            <v-col cols="12" md="2">
              <label for="to">
                <span class="main-color">
                  <v-icon size="25">mdi-calendar</v-icon></span
                >
                <span class="h6">{{ $t("Return") }}</span>
              </label>
              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="returnDate"
                    :placeholder="$t('DD/MM/YYYY')"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    hide-details
                    class="custom-input"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="returnDate"
                  no-title
                  scrollable
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <!-- Cabin Class & Travelers Dropdown -->
            <v-col cols="12" md="3">
              <label for="to">
                <span class="main-color">
                  <v-icon size="25">mdi-baby</v-icon></span
                >
                <span class="h6">{{ $t("Cabin Class & Travelers") }}</span>
              </label>
              <v-select
                v-model="selectedCabin"
                :items="cabinOptions"
                item-text="text"
                item-value="value"
                outlined
                hide-details
                class="custom-input"
                close-on-select
              >
                <template v-slot:selection="{ item }">
                  <v-icon left :color="item.color">{{ item.icon }}</v-icon>
                  <span>{{ item.text }}</span>
                </template>
                <template v-slot:item="{ item, attrs }">
                  <v-list-item
                    v-bind="attrs"
                    @click="selectedCabin = item.value"
                  >
                    <v-list-item-icon>
                      <v-icon :color="item.color">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-select>
            </v-col>

            <!-- Search Button -->
            <v-col cols="12" md="1" class="search-button-col">
              <v-btn color="orange" class="search-btn bg-main" icon rounded>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tripType: "roundTrip",
      departDate: null,
      returnDate: null,
      menu1: false,
      menu2: false,
      selectedCabin: "economy",
      cabinOptions: [
        {
          text: this.$t("1 adult, Economy"),
          value: "economy",
          icon: "mdi-account",
          color: "#f9a825",
        },
        {
          text: this.$t("2 adult, Class"),
          value: "class",
          icon: "mdi-account-multiple",
          color: "#f9a825",
        },
        {
          text: this.$t("2 adult, Economy"),
          value: "economy2",
          icon: "mdi-account-multiple-outline",
          color: "#f9a825",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
/* General Styles */
.landing-page {
  font-family: Arial, sans-serif;
  padding: 5% 0;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 50px 20px;
}

.hero h1 {
  font-size: 4rem;
  font-weight: bold;
  background: -webkit-linear-gradient(left, #333, #f9a825);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 767px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}

.form-holder {
  background: #ffffff;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #3333336e;
  border-radius: 10px 0 10px 0;
  margin: 20px auto;
  max-width: 1200px;
}

/* Trip Options */
.trip-options {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 1px solid $main-color;
  margin-bottom: 20px;
}

.trip-type-selector .v-radio {
  color: #333;
  font-weight: bold;
  margin-right: 20px;
}

/* Custom Input Styling */
.custom-input .v-label {
  color: #333;
  font-weight: bold;
}

.custom-input .v-input__icon--prepend .v-icon {
  color: #f9a825;
}

.custom-input .v-input__control {
  border: none !important;
}

/* Search Button */
.search-btn {
  font-weight: bold;
  color: white;
  padding: 0 10px;
  width: 50px;
  height: 40px;
  border-radius: 5px;
}

.search-button-col {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
