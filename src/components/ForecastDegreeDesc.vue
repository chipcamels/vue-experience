<template>
  <div class="degree-wrapper">
    <p class="sign-min-max">{{text}}</p>
    <p class="value-min-max">{{temp}}<span :class="{'unit-class': unit !== '&deg;'}">{{unit}}</span></p>
  </div>
</template>

<script>
export default {
  props: ['text', 'temp', 'unit']
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_mixin.scss';
.degree-wrapper {
  display: inline-block;
  padding: 6.5px;
  p.sign-min-max {
    font-size: 11px;
    color: #838383;
    margin: 0;
    text-transform: uppercase;
  }

  p.value-min-max {
    font-size: 22px;
    color: #42A5F5;
    font-weight: 600;
    margin: 0;
    span.unit-class {
      font-size: 12px;
    }
  }
}
@include mobile {
  .degree-wrapper {
    p.value-min-max {
      font-size: 18px;
      color: #42A5F5;
      font-weight: 600;
      margin: 0;
      span.unit-class {
        font-size: 12px;
      }
    }
  }
}
</style>
