<template>
  <div>
    <app-slider
      class="controls__sliders"
      slider-name="repetitions"
      slider-label="Repetitions"
      :slider-value="repetitions"
      :slider-range="{min: 1, max: 100}"
    />
    <app-slider
      class="controls__sliders"
      slider-name="scatter"
      slider-label="Scatter"
      :slider-value="scatter"
      :slider-range="{min: 1, max: 100}"
      slider-step="1"
    />
    <app-slider
      class="controls__sliders"
      slider-name="strokeWidth"
      slider-label="Width"
      :slider-value="strokeWidth"
      :slider-range="{min: 0.1, max: 100}"
      slider-step="0.1"
    />
  </div>
</template>

<script>
import AppControlsSlider from '@/components/AppControlsSlider'

export default {
  name: 'AppControlsOtherSliders',
  components: {
    'app-slider': AppControlsSlider
  },
  computed: {
    repetitions () {
      return this.$store.getters.repetitions
    },
    scatter () {
      return this.$store.getters.scatter
    },
    strokeWidth () {
      return this.$store.getters.strokeWidth
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
