<template>
  <button>{{title}}</button>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
button {
  font-size: 20px;
  padding: 25px 40px;
  background-color: #42A5F5;
  color: white;
  text-transform: uppercase;
  border: 1px solid #42A5F5;
  font-weight: 700;
}
</style>
