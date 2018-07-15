<template>
    <line
      class="line"
      :x1="x1"
      :y1="y1"
      :x2="x2"
      :y2="y2"
      stroke="black"
      stroke-width="0.5"
    />
</template>

<script>
export default {
  name: 'AppSvgLine',
  data () {
    return {
      x1: null,
      y1: null,
      x2: null,
      y2: null
    }
  },
  props: {
    centerCoordinates: Object,
    simbolCoordinates: Object
  },
  mounted () {
    this.x1 = this.centerCoordinates.x + this.simbolCoordinates.x1
    this.y1 = this.centerCoordinates.y + this.simbolCoordinates.y1
    this.x2 = this.centerCoordinates.x + this.simbolCoordinates.x2
    this.y2 = this.centerCoordinates.y + this.simbolCoordinates.y2
  }
}
</script>

<style lang="scss" scoped>
</style>
