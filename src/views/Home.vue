<template>
  <div class="container">
    <div class="search-bar">
      <app-input placeText="Enter city & state..." v-model="city" v-on:keyup="getWeatherOnEnter"/>
      <app-button title='Add Location' @click="getDaysWeather"/>
    </div>
    <div>
      <p class="location-info">Your Locations</p>
    </div>
    <div class="forecast-container">
      <forecast-card
        v-for="(location, index) in locations"
        :key="index"
        :info="location"
      />
    </div>
  </div>
</template>

<script>
import AppButton from '../components/AppButton.vue'
import AppInput from '../components/AppInput.vue'
import ForecastCard from '../components/ForecastCard.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    AppButton,
    AppInput,
    ForecastCard
  },
  data () {
    return {
      city: '',
      api_key: '51a1c27dc0adaf61f0acda146ea379b2',
      api_base_url: 'https://api.openweathermap.org/data/2.5/',
      api_geo_url: 'http://api.openweathermap.org/geo/1.0/direct?q='
    }
  },
  computed: {
    locations () {
      return this.$store.state.locations
    }
  },
  methods: {
    getWeather () {
      fetch(`${this.api_base_url}weather?q=${this.city}&appid=${this.api_key}`)
        .then(res => {
          return res.json()
        })
        .then(this.setResults)
    },
    setResults (result) {
      this.locations.push(result)
    },
    // No price version
    getDaysWeather () {
      const query = this.city + ', us'
      fetch(`${this.api_geo_url}${query}&limit=2&appid=${this.api_key}`)
        .then(res => {
          return res.json()
        })
        .then(this.getDaysForecast)
    },
    getDaysForecast (res) {
      fetch(`${this.api_base_url}onecall?lat=${res[0].lat}&lon=${res[0].lon}&exclude=minutely,hourly,alerts&units=metric&appid=${this.api_key}`)
        .then(result => {
          return result.json()
        })
        .then(this.setDaysResult)
    },
    setDaysResult (result) {
      const info = {
        name: this.city,
        today: result.daily[0],
        tomorrow: result.daily[1],
        next_days: result.daily
      }
      this.$store.dispatch('createProduct', info)
    },
    getWeatherOnEnter (e) {
      if (e.keyCode === 13) {
        this.getDaysWeather()
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_mixin.scss';
.search-bar {
  text-align: center;
  margin-bottom: 76px;
}

.location-info {
  font-size: 40px;
  font-weight: 600;
  color: #42A5F5;
  padding-left: 190px;
}

.forecast-container {
  text-align: center;
}

@include tablet {
  .container {
    p.location-info {
      padding-left: 100px;
    }
  }
}

@include mobile {
  .container {
    p.location-info {
      padding: 40px;
      font-size: 30px;
    }
  }
}
</style>
