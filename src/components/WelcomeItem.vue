<template>
  <div class="weather-widget q-pa-md">
    <q-card flat bordered class="weather-card">
      <q-card-section class="text-center">
        <q-input
          v-model="city"
          label="Enter City"
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
        const iconCode = this.weatherData.weather[0].icon;
        return `wi wi-owm-${iconCode}`;
      }
      return '';
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
  max-width: 400px;
  margin: 0 auto;
  background-color: var(--q-background);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.weather-card {
  background: #e8f5e9;
}

.q-card-section {
  padding: 20px;
}

.weather-info {
  background: #a5d6a7;
  border-radius: 8px;
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
