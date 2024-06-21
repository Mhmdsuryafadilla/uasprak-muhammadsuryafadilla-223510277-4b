<template>
  <q-page class="q-pa-md weather-page">
    <div class="weather-container">
      <h3 class="text-center">Perkiraan Cuaca</h3>
      <WeatherWidget />
    </div>
  </q-page>
</template>

<script>
import WeatherWidget from './WeatherWidget.vue'

export default {
  components: {
    WeatherWidget,
  },
}
</script>

<style scoped>
.weather-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
}

.weather-container {
  text-align: center;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.text-center {
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 1.5rem;
}
</style>
