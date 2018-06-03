<template>
  <button class="button" @click="onClick">
      <slot></slot>
  </button>
</template>

<script>

export default {
  name: 'AppButton',
  methods: {
    onClick () {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
    border-radius: 20px;
}
</style>
