<template>
  <div id="app" class="app">
    <router-view class="app__views"/>
    <app-popup v-if="isPopup" />
  </div>
</template>

<script>
import AppPopup from '@/components/popup/AppPopup'

export default {
  name: 'App',
  components: {
    'app-popup': AppPopup
  },
  computed: {
    isPopup () {
      return this.$store.getters.isPopup
    }
  }
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
  height: 100vh;
  &__views {
    margin: 0 auto;
    max-width: 860px;
  }
}
</style>
