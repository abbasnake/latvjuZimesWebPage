<template>
  <div class="container">
    <label class="container__label" :for="sliderName">
      {{ sliderLabel }} {{ sliderValue }}
    </label>
    <input
      class="container__input"
      type="range"
      :min="sliderRange.min"
      :max="sliderRange.max"
      :step="sliderStep"
      :value="sliderValue"
      :id="sliderName"
      @input="onChange"
    >
  </div>
</template>

<script>
export default {
  name: 'AppControlsSlider',
  props: {
    sliderName: String,
    sliderLabel: String,
    sliderValue: {default: 255},
    sliderStep: {default: 1},
    sliderRange: {
      type: Object,
      default: () => ({min: 0, max: 255})
    }
  },
  methods: {
    onChange (e) {
      this.$store.dispatch('changeSlider', {
        name: this.sliderName,
        value: e.target.value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  padding: 5px;
  &__input {
    margin: 0 auto;
    width: 90%;
  }
  &__label {
    text-align: center;
  }
}
</style>
