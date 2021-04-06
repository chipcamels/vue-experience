<template>
  <div class="day-info">
    <p class="day">{{date}}</p>
    <div class="day-info-detail">
      <div class="day-info-image">
        <div class="image-wrapper">
          <img :src="icon" alt="party" />
        </div>
        <div class="day-info-text">{{description}}</div>
      </div>
      <div class="day-info-tempo">
        <forecast-degree-desc text="min" :temp="minTemp" unit="&deg;"/>
        <forecast-degree-desc text="max" :temp="maxTemp" unit="&deg;" />
        <forecast-degree-desc text="humidity" :temp="humidity" unit="%" />
        <forecast-degree-desc text="wind" :temp="wind" unit="mph" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import ForecastDegreeDesc from './ForecastDegreeDesc.vue'
export default {
  components: { ForecastDegreeDesc },
  props: ['date', 'info'],
  setup (props) {
    const icon = `http://openweathermap.org/img/wn/${props.info.weather[0].icon}@2x.png`
    const description = reactive(props.info.weather[0].description)
    const minTemp = reactive(props.info.temp.min)
    const maxTemp = reactive(props.info.temp.max)
    const humidity = reactive(props.info.humidity)
    const wind = reactive(props.info.wind_speed)
    return {
      minTemp,
      maxTemp,
      humidity,
      wind,
      icon,
      description
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_mixin.scss';
.day-info {
  .day {
    font-size: 16px;
    color: #42A5F5;
  }
  .day-info-detail {
    display: inline-block;
    width: 100%;
    .image-wrapper, .day-info-text {
      display: inline-block;
      text-align: center;
      align-self: center;
    }
    .day-info-image, .day-info-tempo {
      vertical-align: middle;
    }
    .day-info-image {
      width: 35%;
      display: inline-flex;
    }
    .day-info-tempo {
      width: 65%;
      text-align: center;
      display: inline-block;
    }
    .day-info-text {
      font-size: 12px;
      color: #838383;
      text-transform: uppercase;
    }
  }
}
@include desktop {
  .day-info {
    .day-info-detail {
      .day-info-image, .day-info-tempo {
        width: 100%;
        justify-content: center;
      }
      .day-info-text {
        font-size: 12px;
        color: #838383;
        text-transform: uppercase;
      }
    }
  }
}
@include tablet {
  .day-info {
    .day-info-detail {
      .day-info-image {
        width: 35%;
        display: inline-flex;
      }
      .day-info-tempo {
        width: 65%;
        display: inline-block;
      }
      .day-info-text {
        font-size: 12px;
        color: #838383;
        text-transform: uppercase;
      }
    }
  }
}
@include mobile {
  .day-info {
    .day-info-detail {
      .day-info-image, .day-info-tempo {
        width: 100%;
        justify-content: center;
      }
      .day-info-text {
        font-size: 12px;
        color: #838383;
        text-transform: uppercase;
      }
    }
  }
}
</style>
