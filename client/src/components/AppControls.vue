<template>
  <div class="controls">
    <app-select class="controls__select" />
    <app-randomize-colors class="controls__checkbox" />
    <app-refresh />
    <app-randomize class="controls__randomize" />
    <app-bg-sliders class="controls__bgSliders" />
    <app-color-sliders class="controls__colorSliders" />
    <app-other-sliders class="controls__otherSliders" />
  </div>
</template>

<script>
import AppControlsSelect from '@/components/AppControlsSelect'
import AppControlsRandomizeColors from '@/components/AppControlsRandomizeColors'
import AppControlsBgColorSliders from '@/components/AppControlsBgColorSliders'
import AppControlsColorSliders from '@/components/AppControlsColorSliders'
import AppControlsOtherSliders from '@/components/AppControlsOtherSliders'
import AppControlsRandomize from '@/components/AppControlsRandomize'
import AppControlsRefresh from '@/components/AppControlsRefresh'

export default {
  name: 'AppControls',
  components: {
    'app-select': AppControlsSelect,
    'app-randomize-colors': AppControlsRandomizeColors,
    'app-bg-sliders': AppControlsBgColorSliders,
    'app-color-sliders': AppControlsColorSliders,
    'app-other-sliders': AppControlsOtherSliders,
    'app-randomize': AppControlsRandomize,
    'app-refresh': AppControlsRefresh
  }
}
</script>

<style lang="scss" scoped>
.controls {
  display: grid;
  grid-template-areas:
    "select    select       select"
    "checkbox  info         randomize"
    "bgSliders colorSliders otherSliders";
  &__select {
    grid-area: select;
  }
  &__checkbox {
    grid-area: checkbox;
    margin: 0 auto;
    width: 50%;
  }
  &__info {
    grid-area: info;
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
