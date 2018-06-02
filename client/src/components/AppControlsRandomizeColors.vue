<template>
  <button class="button" @click="onClick">Randomize Colors</button>
</template>

<script>
export default {
  name: 'AppControlsCheckbox',
  methods: {
    onClick () {
      this.$store.dispatch('toggleColors')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 5px;
  width:100%;
}
</style>
