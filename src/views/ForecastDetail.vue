<template>
  <div class="forecast-detail">
    <router-link to="/" class="detail-breadcrumb" >BACK TO HOMEPAGE</router-link>
    <div class="forecast-detail-header">
      <div class="forecast-detail-information">
        <div class="forecast-detail-location">
          <div class="position-icon">
            <img src="../assets/gps.png" alt="GPS" />
          </div>
          <div class="position-name">
            <h3>4-Day Forecast / {{location}}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="forecast-detail-body">
      <div class="forecast-today">
        <div class="forecast-today-title"><h3>Today's Weather</h3></div>
        <div class="forecast-today-detail">
          <forecast-degree :data="data[0]"/>
        </div>
      </div>
      <div class="forecast-4days">
        <day-info :info="data[1]" date="Tomorrow"/>
        <day-info :info="data[2]" :date="getDay(2)"/>
        <day-info :info="data[3]" :date="getDay(3)"/>
      </div>
    </div>
  </div>
</template>

<script>
import DayInfo from '../components/DayInfo.vue'
import ForecastDegree from '../components/ForecastDegree.vue'
import { useRoute } from 'vue-router'
export default {
  components: { ForecastDegree, DayInfo },
  setup () {
    const route = useRoute()
    const location = route.params.id
    return {
      location
    }
  },
  computed: {
    data () {
      return this.$store.getters.getLocationByCity
    }
  },
  methods: {
    getDay (id) {
      const datas = this.$store.getters.getLocationByCity
      const date = new Date(parseInt(datas[id].dt) * 1000)
      return this.days[date.getDay()]
    }
  },
  data () {
    return {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_mixin.scss';
.forecast-detail {
  margin: -64px 200px 0 200px;

  .detail-breadcrumb {
    display: block;
    padding-left: 57px;
    font-size: 20px;
    color: #838383;
    font-weight: bold;
    text-decoration: none;
  }
  .forecast-detail-information {
    margin-top: 61px;
    display: inline-block;
    .forecast-detail-location {
      .position-icon {
        display: inline-block;
        padding: 30px 26px;
        vertical-align: middle;
      }
      .position-name {
        display: inline-block;
        h3 {
          font-size: 31px;
          color: #838383;
        }
      }
    }
  }
  .forecast-detail-body {
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    display: flex;
    .forecast-today {
      width: 40%;
    }
    .forecast-4days {
      width: 60%;
    }
    .forecast-today {
      border-right: 1px solid #E7E7E7;
      .forecast-today-title {
        padding: 30px 40px;
        border-bottom: 1px solid #E7E7E7;
        h3 {
          margin: 0;
          font-size: 26px;
          color: #42A5F5;
          font-weight: normal;
        }
      }
      .forecast-today-detail {
        padding: 100px 0;
      }
    }
    .forecast-4days {
      padding: 30px 80px;
    }
  }
}

@include large {
  .forecast-detail {
    margin: -54px 100px 0 100px;
    .forecast-detail-body {
      .forecast-4days {
        padding: 30px 40px;
      }
    }
  }
}
@include desktop {
  .forecast-detail {
    .forecast-detail-body {
      .forecast-today {
        .forecast-today-title {
          padding: 30px 0 30px 20px;
          h3 {
            font-size: 20px;
          }
        }
      }
    }
  }
}

@include tablet {
  .forecast-detail {
    margin: -44px 30px 0 30px;

    .detail-breadcrumb {
      padding-left: 37px;
    }
    .forecast-detail-information {
      margin-top: 31px;
      .forecast-detail-location {
        .position-icon {
          padding: 26px;
          img {
            width: 20px;
          }
        }
        .position-name {
          display: inline-block;
          h3 {
            font-size: 23px;
            color: #838383;
          }
        }
      }
    }
    .forecast-detail-body {
      display: block;
      .forecast-today {
        width: 100%;
        padding: 20px 0;
      }
      .forecast-4days {
        width: 100%;
        padding: 20px 0;
        .day-info {
          padding: 0 40px;
        }
      }
      .forecast-today {
        border-right: 1px solid #E7E7E7;
        .forecast-today-detail {
          padding: 50px 0;
          border-bottom: 1px solid #E7E7E7;
        }
      }
    }
  }
}
</style>
