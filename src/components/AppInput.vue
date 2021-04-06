<template>
  <div class="input-group">
    <label>
      Search for a location
      <input
        type='text'
        :placeholder="placeText"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'placeText']
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_mixin.scss';
.input-group {
  display: inline-block;
  text-align: left;
  padding: 0 15px;
  label {
    font-size: 20px;
    color: #353535;
  }
  input {
    display: block;
    font-size: 20px;
    padding: 25px 30px;
    width: 589px;
    margin-top: 12px;
  }
}
@include desktop {
  .input-group {
    input {
      width: 400px;
    }
  }
}

@include tablet {
  .input-group {
    padding-bottom: 15px;
    input {
      max-width: 350px;
      width: auto;
    }
  }
}

</style>
