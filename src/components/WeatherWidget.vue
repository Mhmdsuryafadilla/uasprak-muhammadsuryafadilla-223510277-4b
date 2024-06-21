<template>
  <div class="weather-widget q-pa-md">
    <q-card flat bordered class="weather-card">
      <q-card-section class="text-center">
        <q-input
          v-model="city"
          label="Masukkan Kota"
          filled
          dense
          standout
          @keyup.enter="fetchWeather"
          class="q-mb-md"
        />
        <q-btn label="Get Weather" color="green" @click="fetchWeather" class="full-width" />
      </q-card-section>

      <q-card-section v-if="weatherData" class="text-center weather-info">
        <div class="q-gutter-md">
          <q-icon :name="weatherIcon" size="64px" color="green" />
          <div class="text-h6">{{ weatherData.name }}</div>
          <div class="text-h4">{{ weatherData.main.temp }} °C</div>
          <div>{{ weatherData.weather[0].description }}</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      city: '',
      weatherData: null,
    }
  },
  computed: {
    weatherIcon() {
      if (this.weatherData) {
        const weatherId = this.weatherData.weather[0].id;
        if (weatherId >= 200 && weatherId < 300) {
          return 'thunderstorm';
        } else if (weatherId >= 300 && weatherId < 500) {
          return 'rainy';
        } else if (weatherId >= 500 && weatherId < 600) {
          return 'rainy';
        } else if (weatherId >= 600 && weatherId < 700) {
          return 'snowy';
        } else if (weatherId >= 700 && weatherId < 800) {
          return 'foggy';
        } else if (weatherId === 800) {
          return 'sunny';
        } else if (weatherId > 800) {
          return 'cloudy';
        }
      }
      return 'cloud_queue';
    },
  },
  methods: {
    async fetchWeather() {
      const apiKey = '94bf6d59f86ae95e8071e78240546056'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`

      try {
        const response = await axios.get(url)
        this.weatherData = response.data
      } catch (error) {
        console.error(error)
        this.weatherData = null
      }
    },
  },
}
</script>

<style scoped>
.weather-widget {
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--q-background);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.weather-card {
  background: #e8f5e9;
  border: 1px solid #c8e6c9;
  border-radius: 8px;
}

.q-card-section {
  padding: 20px;
}

.weather-info {
  background: #a5d6a7;
  border-radius: 8px;
  border: 1px solid #81c784;
}

.q-icon {
  font-size: 64px;
  margin-bottom: 10px;
}

.text-h4 {
  font-size: 1.5em;
  margin-bottom: 5px;
}

.text-h6 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.full-width {
  width: 100%;
}
</style>
