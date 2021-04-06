<template>
  <app-header />
  <router-view/>
  <app-footer />
</template>

<script>
import AppFooter from './layouts/AppFooter.vue'
import AppHeader from './layouts/AppHeader.vue'
export default {
  components: { AppHeader, AppFooter }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import './assets/scss/_mixin.scss';
body {
  margin: 0;
}
#app {
  font-family: Open Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@include desktop {
  .forecast-detail {
    .forecast-today {
      .forecast-today-detail {
        .status-image, .status-detail {
          width: 100%;
        }
      }
    }
  }
}
@include tablet {
  .forecast-detail {
    .forecast-today {
      .forecast-today-detail {
        .status-image {
          width: 40%;
        }
        .status-detail {
          width: 60%;
        }
      }
    }
  }
}
</style>
