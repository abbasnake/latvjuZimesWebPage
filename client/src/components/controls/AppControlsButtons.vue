<template>
  <div class="container">
    <app-button
      class="container__colors"
      @clicked="randomizeColors"
      :is-toggle="true"
      :isOn="isRandomizeColors"
    >
      Randomize Colors
    </app-button>
    <app-button
      class="container__refresh"
      @clicked="refresh"
    >
      Refresh Settings
    </app-button>
    <app-button
      class="container__randomize"
      @clicked="randomize"
    >
      Randomize Settings
    </app-button>
  </div>
</template>

<script>
import AppButton from '@/components/button/AppButton'

export default {
  name: 'AppControlsButtons',
  components: {
    'app-button': AppButton
  },
  data () {
    return {
      screenWidth: null
    }
  },
  computed: {
    isRandomizeColors () {
      return this.$store.getters.isRandomizeColors
    }
  },
  mounted () {
    this.screenWidth = screen.width
  },
  methods: {
    randomizeColors () {
      this.$store.dispatch('toggleColors')
    },
    refresh () {
      this.$store.dispatch('refresh')
    },
    randomize () {
      this.$store.dispatch('randomizeSliders', this.screenWidth)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  // border: 1px solid grey;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
}
</style>
