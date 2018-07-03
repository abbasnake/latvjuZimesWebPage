<template>
  <div class="container">
    <label class="container__label" :for="sliderName">
      {{ sliderLabel }} <strong>{{ sliderValue }}</strong>
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
      :style="bgColor"
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
  computed: {
    bgColor () {
      return this.returnBgColor()
    }
  },
  methods: {
    onChange (e) {
      this.$store.dispatch('changeSlider', {
        name: this.sliderName,
        value: e.target.value
      })
    },
    returnBgColor () {
      switch (this.sliderName) {
        case 'r':
        case 'bgR':
          return {'background-color': `rgb(${this.sliderValue}, 0, 0)`}
        case 'g':
        case 'bgG':
          return {'background-color': `rgb(0, ${this.sliderValue}, 0)`}
        case 'b':
        case 'bgB':
          return {'background-color': `rgb(0, 0, ${this.sliderValue})`}
        default:
          return {'background-color': '#740D09'}
      }
    },
    floorValue (val) {
      return Math.floor(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-areas:
    "input label";
  grid-template-columns: 1fr 1fr;
  padding: 5px;
  &__input {
    grid-area: input;
    cursor: pointer;
    margin: 0 auto;
    width: 90%;
    -webkit-appearance: none;
    height: 3px;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    align-self: center;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1px solid #740D09;
      background: white;
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      cursor: pointer;
    }
    &:hover {
      opacity: 1.0;
    }
  }
  &__label {
    grid-area: label;
    text-align: center;
    padding-bottom: 4px
  }
}

@media (min-width: 400px) {
  .container {
    grid-template-areas:
      "label"
      "input";
    grid-template-columns: 1fr;
    &__input {

    }
    &__label {
      text-align: center;
    }
  }
}
</style>
