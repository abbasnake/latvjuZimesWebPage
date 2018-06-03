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
    border: 2px solid black;
    border-radius: 20px;
    transition: all .2s linear;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: black;
        color: white;
    }
    &:active {
        border: 5px;
        transform: translateY(2px);
    }
}
</style>
