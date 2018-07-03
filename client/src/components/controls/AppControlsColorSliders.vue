<template>
  <div>
    <app-slider
    class="controls__sliders"
    slider-name="r"
    slider-label="Red"
    :slider-value="colors.r"
    />
    <app-slider
    class="controls__sliders"
    slider-name="g"
    slider-label="Green"
    :slider-value="colors.g"
    />
    <app-slider
    class="controls__sliders"
    slider-name="b"
    slider-label="Blue"
    :slider-value="colors.b"
    />
  </div>
</template>

<script>
import AppControlsSlider from '@/components/controls/AppControlsSlider'

export default {
  name: 'AppControlsColorSliders',
  components: {
    'app-slider': AppControlsSlider
  },
  computed: {
    colors () {
      return this.$store.getters.colors
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
