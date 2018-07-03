<template>
    <line
      class="svg__line"
      :x1="x1"
      :y1="y1"
      :x2="x2"
      :y2="y2"
      :stroke="stroke"
      :stroke-width="strokeWidth"
    />
</template>

<script>
export default {
  name: 'AppSvgLine',
  props: {
    centerCoordinates: Object,
    simbolCoordinates: Object
  },
  computed: {
    colors () {
      return this.$store.getters.colors
    },
    scatter () {
      return this.$store.getters.scatter
    },
    stroke () {
      if (this.isRandomizeColors) {
        return this.randomizeColors(this.colors)
      } else {
        return `rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`
      }
    },
    strokeWidth () {
      return this.$store.getters.strokeWidth
    },
    isRandomizeColors () {
      return this.$store.getters.isRandomizeColors
    },
    x1 () {
      return this.centerCoordinates.x +
             this.simbolCoordinates.x1 +
             this.randomizeScatter(this.scatter)
    },
    y1 () {
      return this.centerCoordinates.y +
             this.simbolCoordinates.y1 +
             this.randomizeScatter(this.scatter)
    },
    x2 () {
      return this.centerCoordinates.x +
             this.simbolCoordinates.x2 +
             this.randomizeScatter(this.scatter)
    },
    y2 () {
      return this.centerCoordinates.y +
             this.simbolCoordinates.y2 +
             this.randomizeScatter(this.scatter)
    }
  },
  methods: {
    randomizeScatter (num) {
      return (Math.random() * num) - (Math.random() * num)
    },
    randomizeColors (obj) {
      let r, g, b
      if (parseInt(obj.r + obj.g + obj.b) === 0) {
        r = g = b = Math.floor(Math.random() * 255)
      } else {
        r = Math.floor(Math.random() * obj.r)
        g = Math.floor(Math.random() * obj.g)
        b = Math.floor(Math.random() * obj.b)
      }
      return `rgb(${r}, ${g}, ${b})`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
