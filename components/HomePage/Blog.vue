<template>
  <section class="popular-destinations">
    <div class="section-header">
      <h2>{{ $t("Popular Destinations") }}</h2>
      <p>
        {{ $t("Vacations to make your experience enjoyable in Indonesia!") }}
      </p>
    </div>

    <v-container fluid>
      <v-row dense>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(destination, index) in destinations"
          :key="index"
        >
          <v-card class="destination-card">
            <v-img
              :src="destination.image"
              height="200px"
              class="card-image"
            ></v-img>
            <v-card-text class="card-content">
              <div class="location">
                <v-icon small color="orange">mdi-map-marker</v-icon>
                <span>{{ destination.location }}</span>
              </div>
              <h3 class="destination-title">{{ destination.title }}</h3>
              <p class="duration">{{ destination.duration }}</p>
              <p class="price">${{ destination.price }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <hooper :settings="hooperSettings">
      <slide v-for="(destination, index) in destinations" :key="index">
        <v-card class="destination-card">
          <v-img
            :src="destination.image"
            height="200px"
            class="card-image"
          ></v-img>
          <v-card-text class="card-content">
            <div class="location">
              <v-icon small color="orange">mdi-map-marker</v-icon>
              <span>{{ destination.location }}</span>
            </div>
            <h3 class="destination-title">{{ destination.title }}</h3>
            <p class="duration">{{ destination.duration }}</p>
            <p class="price">${{ destination.price }}</p>
          </v-card-text>
        </v-card>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper> -->
  </section>
</template>

<script>
// import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
// import "hooper/dist/hooper.css";
export default {
  data() {
    return {
      destinations: [
        {
          location: "Manggarai Barat",
          title: "Flores Road Trip 3D2N",
          duration: "3 Days",
          price: 375,
          image: "https://via.placeholder.com/300x200",
        },
        {
          location: "Bogor",
          title: "Forrester Glamping Co Bogor",
          duration: "1 Day",
          price: 375,
          image: "https://via.placeholder.com/300x200",
        },
        {
          location: "Jakarta",
          title: "Paket Tiket Pesawat Jakarta Bali",
          duration: "1 Day",
          price: 375,
          image: "https://via.placeholder.com/300x200",
        },
        {
          location: "Kota Semarang",
          title: "Desa Wisata Kandri",
          duration: "14 Days",
          price: 375,
          image: "https://via.placeholder.com/300x200",
        },
      ],
      hooperSettings: {
        itemsToShow: 4,
        itemsToSlide: 1,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 2000,
      },
    };
  },
  comments: {
    // Hooper,
    // Slide,
    // HooperNavigation,
  },
};
</script>

<style scoped lang="scss">
.popular-destinations {
  padding: 40px 20px;
}

.section-header h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #3b4e72;
}

.section-header p {
  color: #6c757d;
  margin: 10px 0 30px;
}

.destination-card {
  border-radius: 12px;
  border: 1px solid #fff;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  transition: all 0.3s ease-in-out;
  padding: 15px;
  background-color: #5a575712;
  min-height: 400px;
  box-shadow: none !important;
  cursor: pointer;
}

.destination-card:hover {
  border: 1px solid $main-color;
  background-color: rgba($main-color, 0.4);
}

.highlighted-card {
  border: 2px solid #f9a825;
}

.card-image {
  border-radius: 10px 0 10px 0 !important;
}

.card-content {
  padding: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
}

.location {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #3b4e72;
  margin-bottom: 5px;
}

.location v-icon {
  margin-right: 5px;
}

.destination-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #3b4e72;
  margin: 8px 0;
}

.duration,
.price {
  color: #6c757d;
  font-size: 0.9rem;
}

.price {
  color: #f9a825;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 5px;
}
</style>
