<template>
  <div class="view">
    <app-title class="view__title" />
    <!-- <app-navbar class="view__navbar" /> -->
    <app-canvas class="view__canvas" />
    <app-controls class="view__controls" />
  </div>
</template>

<script>
import AppTitle from '@/components/title/AppTitle'
import AppNavbar from '@/components/navbar/AppNavbar'
import AppCanvas from '@/components/canvas/AppCanvas'
import AppControls from '@/components/controls/AppControls'

export default {
  name: 'ViewHome',
  components: {
    'app-title': AppTitle,
    'app-navbar': AppNavbar,
    'app-canvas': AppCanvas,
    'app-controls': AppControls
  }
}
</script>

<style lang="scss" scoped>
.view {
  display: grid;
}
</style>
