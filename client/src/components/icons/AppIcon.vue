<template>
  <svg class="svg" :class="{active: isActive}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" @click="onClick">
    <app-line
      v-for="(coordinates, index) in simbolCoordinates"
      :key="index"
      :center-coordinates="{x: 10, y: 10}"
      :simbol-coordinates="coordinates"
    />
 </svg>
</template>

<script>
import AppIconLine from '@/components/icons/AppIconLine'

export default {
  name: 'AppIcon',
  data () {
    return {
      isActive: false
    }
  },
  mounted () {
    this.isSelected()
  },
  components: {
    'app-line': AppIconLine
  },
  props: {
    simbolKey: String
  },
  computed: {
    simbolCoordinates () {
      return this.$store.getters.simbols[this.simbolKey].coordinates
    },
    currentSimbolKey () {
      return this.$store.getters.currentSimbolKey
    }
  },
  methods: {
    onClick () {
      this.$store.dispatch('changeSimbol', this.simbolKey)
    },
    isSelected () {
      this.isActive = this.currentSimbolKey === this.simbolKey
    }
  },
  watch: {
    currentSimbolKey () {
      this.isSelected()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables';

.svg {
  border: 1px solid black;
  border-radius: 50%;
  background-color: white;
  transition: all .2s linear;
  max-width: 35px;
  cursor: pointer;
  width: 100%;
  &:hover, &:hover > line {
    background-color: black;
    stroke: #fff;
  }
}

.active {
  background-color: $primary-red;
  & > line {
    stroke: #fff;
  }
}
</style>
