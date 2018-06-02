<template>
  <button class="button" @click="onClick">Refresh</button>
</template>

<script>

export default {
  name: 'AppControlsRefresh',
  methods: {
    onClick () {
      this.$store.dispatch('refresh')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
