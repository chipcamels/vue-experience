<template>
  <header>
    <div class="brand-logo">
      <img src="../assets/logo.png" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_mixin.scss';
header {
  background: linear-gradient(165deg, #6f75b2 40%,#06d3bd 74%);
  margin-bottom: 110px;
  .brand-logo {
    padding: 68px 0 67px 83px;
  }
}
@include desktop {
  header {
    margin-bottom: 60px;
    .brand-logo {
      padding: 50px 0 50px 60px;
    }
  }
}

@include tablet {
  header {
    margin-bottom: 50px;
    .brand-logo {
      padding: 30px 0 30px 30px;
    }
  }
}

@include mobile {
  header {
    .brand-logo {
      img {
        width: 90%;
      }
    }
  }
}
</style>
