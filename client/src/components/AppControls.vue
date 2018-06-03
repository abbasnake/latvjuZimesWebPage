<template>
  <div class="controls">
    <app-select class="controls__select" />
    <app-button class="controls__checkbox" @clicked="randomizeColors">Randomize Colors</app-button>
    <app-button class="controls__refresh" @clicked="refresh">Refresh</app-button>
    <app-button class="controls__randomize" @clicked="randomize">Randomize</app-button>
    <app-bg-sliders class="controls__bgSliders" />
    <app-color-sliders class="controls__colorSliders" />
    <app-other-sliders class="controls__otherSliders" />
  </div>
</template>

<script>
import AppControlsSelect from '@/components/AppControlsSelect'
import AppControlsBgColorSliders from '@/components/AppControlsBgColorSliders'
import AppControlsColorSliders from '@/components/AppControlsColorSliders'
import AppControlsOtherSliders from '@/components/AppControlsOtherSliders'
import AppButton from '@/components/AppButton'

export default {
  name: 'AppControls',
  components: {
    'app-select': AppControlsSelect,
    'app-bg-sliders': AppControlsBgColorSliders,
    'app-color-sliders': AppControlsColorSliders,
    'app-other-sliders': AppControlsOtherSliders,
    'app-button': AppButton
  },
  methods: {
    randomizeColors () {
      this.$store.dispatch('toggleColors')
    },
    refresh () {
      this.$store.dispatch('refresh')
    },
    randomize () {
      this.$store.dispatch('randomizeSliders')
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
  display: grid;
  grid-template-areas:
    "select    select       select"
    "checkbox  refresh      randomize"
    "bgSliders colorSliders otherSliders";
  &__select {
    grid-area: select;
  }
  &__checkbox {
    grid-area: checkbox;
  }
  &__refresh {
    grid-area: refresh;
  }
  &__randomize {
    grid-area: randomize;
  }
  &__bgSliders {
    grid-area: bgSliders;
  }
  &__colorSliders {
    grid-area: colorSliders;
  }
  &__otherSliders {
    grid-area: otherSliders;
  }
}
</style>
