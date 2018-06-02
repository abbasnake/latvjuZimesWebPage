<template>
  <svg class="svg" :style="style" :viewBox="viewBox()" xmlns="http://www.w3.org/2000/svg">
    <app-svg-line
      v-for="(coordinates, index) in simbol"
      :key="index"
      :center-coordinates="centerCoordinates()"
      :simbol-coordinates="coordinates"
    />
  </svg>
</template>

<script>
import AppSvgLine from '@/components/AppSvgLine'

export default {
  name: 'AppSvg',
  components: {
    'app-svg-line': AppSvgLine
  },
  data () {
    return {
      viewBoxX: 20,
      viewBoxY: 10
    }
  },
  methods: {
    viewBox () {
      return `0 0 ${this.viewBoxX} ${this.viewBoxY}`
    },
    centerCoordinates () {
      return {
        x: this.viewBoxX / 2,
        y: this.viewBoxY / 2
      }
    },
    bgColor (obj) {
      return `rgb(${obj.r}, ${obj.g}, ${obj.b})`
    }
  },
  computed: {
    simbol () {
      return this.$store.getters.currentSimbol
    },
    bgColors () {
      return this.$store.getters.bgColors
    },
    style () {
      return {
        'background-color': this.bgColor(this.bgColors)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.svg {
  border: 1px solid $primary-red;
  border-radius: 5px;
}
</style>
