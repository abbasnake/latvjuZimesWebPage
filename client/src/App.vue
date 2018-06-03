<template>
  <div id="app" class="app">
    <router-view class="app__views"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<!-- GLOBAL STYLES -->
<style lang="scss">
@import './scss/reset';
@import './scss/global-styles';
</style>

<!-- LOCAL STYLES -->
<style lang="scss" scoped>
@import './scss/variables';

.app {
  // border: 5px solid $primary-red;
  height: 100vh;
  &__views {
    // border: 2px solid $primary-red;
    margin: 0 auto;
    max-width: 860px;
  }
}
</style>
