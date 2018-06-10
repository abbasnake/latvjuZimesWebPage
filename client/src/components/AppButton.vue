<template>
  <button class="button" @click="onClick">
      <slot></slot>
      <template v-if="isToggle">
        <strong v-if="isOn">ON</strong>
        <strong v-else>OFF</strong>
      </template>
  </button>
</template>

<script>

export default {
  name: 'AppButton',
  props: {
    isToggle: {type: Boolean, default: false},
    isOn: {type: Boolean, default: true}
  },
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
    padding: 5px;
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
