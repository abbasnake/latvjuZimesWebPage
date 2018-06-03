<template>
  <div class="controls">
    <app-select class="controls__select" />
    <app-buttons class="controls__buttons" />
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
import AppControlsButtons from '@/components/AppControlsButtons'

export default {
  name: 'AppControls',
  components: {
    'app-select': AppControlsSelect,
    'app-bg-sliders': AppControlsBgColorSliders,
    'app-color-sliders': AppControlsColorSliders,
    'app-other-sliders': AppControlsOtherSliders,
    'app-buttons': AppControlsButtons
  }
}
</script>

<style lang="scss" scoped>
.controls {
  display: grid;
  grid-template-areas:
    "select    select       select"
    "buttons   buttons      buttons"
    "bgSliders colorSliders otherSliders";
  grid-gap: 5px;
  &__select {
    grid-area: select;
  }
  &__buttons {
    grid-area: buttons;
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
