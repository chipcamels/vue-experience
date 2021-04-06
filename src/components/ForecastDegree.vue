<template>
  <div class="status-wrapper">
    <div class="status-image">
      <img :src="imgSrc" alt='shadow'/>
      <span>{{description}}</span>
    </div>
    <div class="status-detail">
      <div class="status-tempo">
        {{temp}}&deg;
      </div>
      <div class="status-min-max">
        <forecast-degree-desc text="min" :temp="minTemp" unit="&deg;"/>
        <forecast-degree-desc text="max" :temp="maxTemp" unit="&deg;"/>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import ForecastDegreeDesc from './ForecastDegreeDesc.vue'
export default {
  components: { ForecastDegreeDesc },
  props: ['data'],
  setup (props) {
    const imgSrc = props.data ? `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png` : ''
    const description = props.data ? reactive(props.data.weather[0].description) : ''
    const temp = props.data ? reactive(props.data.temp.day) : ''
    const minTemp = props.data ? reactive(props.data.temp.min) : ''
    const maxTemp = props.data ? reactive(props.data.temp.max) : ''
    return {
      imgSrc,
      temp,
      description,
      minTemp,
      maxTemp
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_mixin.scss';
.status-wrapper {
  img, span {
    margin: auto;
    display: block;
    text-align: center;
  }
  span {
    font-size: 12px;
    color: #838383;
    text-transform: uppercase;
  }
  .status-image {
    width: 40%;
    display: inline-block;
  }
  .status-detail {
    width: 60%;
    display: inline-block;
    text-align: center;

    .status-tempo {
      font-size: 54px;
      font-weight: 700;
      color: #42A5F5;
    }
  }
}
@include tablet {
  .status-wrapper {
    .status-detail {
      text-align: center;

      .status-tempo {
        font-size: 40px;
        font-weight: 700;
        color: #42A5F5;
      }
    }
  }
}
</style>
