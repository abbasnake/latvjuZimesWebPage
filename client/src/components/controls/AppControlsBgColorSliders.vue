<template>
  <div>
      <app-slider
        class="controls__sliders"
        slider-name="bgR"
        slider-label="bgRed"
        :slider-value="bgColors.r"
      />
      <app-slider
        class="controls__sliders"
        slider-name="bgG"
        slider-label="bgGreen"
        :slider-value="bgColors.g"
      />
      <app-slider
        class="controls__sliders"
        slider-name="bgB"
        slider-label="bgBlue"
        :slider-value="bgColors.b"
      />
  </div>
</template>

<script>
import AppControlsSlider from '@/components/controls/AppControlsSlider'

export default {
  name: 'AppControlsBgColorSliders',
  components: {
    'app-slider': AppControlsSlider
  },
  computed: {
    bgColors () {
      return this.$store.getters.bgColors
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
