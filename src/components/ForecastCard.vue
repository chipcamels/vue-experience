<template>
  <div class="w-card">
    <div class="w-card-title">
      <div class="position-icon">
        <img src="../assets/gps.png" alt="GPS" />
      </div>
      <div class="position-name">
        <h3>{{info.name}}</h3>
      </div>
    </div>
    <div class="w-card-body">
      <div class="w-card-today">
        <p>Currently</p>
        <forecast-degree :data="info.today" />
      </div>
      <div class="w-card-tomorrow">
        <p>Tomorrow's Forecast</p>
        <forecast-degree :data="info.tomorrow" />
      </div>
    </div>
    <div class="w-card-footer">
      <app-button title="VIEW 4-DAY FORECAST" @click="showForecast"></app-button>
    </div>
  </div>
</template>

<script>
import ForecastDegree from './ForecastDegree.vue'
import AppButton from './AppButton.vue'
export default {
  props: ['info'],
  components: { ForecastDegree, AppButton },
  methods: {
    showForecast () {
      this.$store.dispatch('changeCity', this.info.name)
      this.$router.push({
        name: 'Detail',
        params: {
          id: this.info.name
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_mixin.scss';
.w-card {
  margin: 26px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
  display: inline-block;
  width: 416px;
  .w-card-title {
    text-align: left;
    border-bottom: 1px solid #E7E7E7;
    div {
      vertical-align: middle;
    }
    .position-icon {
      display: inline-block;
      padding: 26px 32px;
      border-right: 1px solid #E7E7E7;
    }
    .position-name {
      display: inline-block;
      h3 {
        margin: 0;
        font-weight: 600;
        font-size: 26px;
        color: #838383;
        padding: 29px 32px;
      }
    }
  }
  .w-card-body {
    text-align: left;
    p {
      margin: 0;
      color: #42A5F5;
      font-size: 18px;
    }
    .w-card-tomorrow {
      background-color: #FBFBFB;
    }

    .w-card-today, .w-card-tomorrow {
      padding: 35px 26px;
    }
  }
  .w-card-footer {
    button {
      width: 100%;
    }
  }
}
@include desktop {
  .w-card {
    margin: 10px;
    width: 400px;
    .w-card-title {
      .position-icon {
        padding: 22px 26px;
      }
      .position-name {
        h3 {
          padding: 26px 26px;
        }
      }
    }
    .w-card-body {
      p {
        font-size: 18px;
      }
      .w-card-today, .w-card-tomorrow {
        padding: 30px 20px;
      }
    }
  }
}
@include mobile {
  .w-card {
    width: 90%;
    .w-card-title {
      .position-icon {
        padding: 26px 26px;
      }
      .position-name {
        h3 {
          padding: 26px 26px;
        }
      }
    }
    .w-card-body {
      .w-card-today, .w-card-tomorrow {
        padding: 20px 15px;
      }
    }
  }
}
</style>
