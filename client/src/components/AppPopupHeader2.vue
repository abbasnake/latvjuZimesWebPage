<template>
  <h2 class="header" :style="{fontSize: fontSize}">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'AppPopupHeader2',
  props: {
    fontSize: {type: String, default: '20px'}
  }
}
</script>

<style lang="scss" scoped>
.header {
}
</style>
