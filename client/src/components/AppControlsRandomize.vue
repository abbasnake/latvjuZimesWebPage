<template>
  <button class="button" @click="onClick">Randomize Settings</button>
</template>

<script>
export default {
  name: 'AppControlsRandomize',
  methods: {
    onClick () {
      this.$store.dispatch('randomizeSliders')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
