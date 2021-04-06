<template>
  <footer>
    <div class="footer-bg">
      <img src="../assets/footer_bg.png" alt="footer image" />
    </div>
    <div class="footer-logo-wrapper">
      <img src="../assets/logo_footer.png" alt="footer logo" />
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_mixin.scss';
footer {
  display: flex;
  justify-content: space-between;
  .footer-logo-wrapper {
    position: relative;
    img {
      position: absolute;
      right: 84px;
      bottom: 92px;
    }
  }
}

@include desktop {
  footer {
    .footer-bg {
      img {
        width: 60%;
      }
    }
    .footer-logo-wrapper {
      img {
        right: 30px;
        bottom: 40px;
        width: 190px;
      }
    }
  }
}

@include mobile {
  footer {
    .footer-bg {
      img {
        display: none;
      }
    }
    .footer-logo-wrapper {
      img {
        position: relative;
        bottom: auto;
        right: auto;
      }
    }
  }
}
</style>
