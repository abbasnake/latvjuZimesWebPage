<template>
  <div class="container">
    <app-button class="container__colors" @clicked="randomizeColors">Randomize Colors</app-button>
    <app-button class="container__refresh" @clicked="refresh">Refresh Settings</app-button>
    <app-button class="container__randomize" @clicked="randomize">Randomize Settings</app-button>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'AppControlsButtons',
  components: {
    'app-button': AppButton
  },
  methods: {
    randomizeColors () {
      this.$store.dispatch('toggleColors')
    },
    refresh () {
      this.$store.dispatch('refresh')
    },
    randomize () {
      this.$store.dispatch('randomizeSliders')
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
