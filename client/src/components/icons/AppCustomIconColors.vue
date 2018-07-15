<template>
  <svg class="svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <app-line
      :center-coordinates="{x: 10, y: 10}"
      :simbol-coordinates="{x1: -5, y1: -10, x2: -5, y2: 10}"
    />
    <app-line
      :center-coordinates="{x: 10, y: 10}"
      :simbol-coordinates="{x1: -0, y1: -10, x2: 0, y2: 10}"
    />
    <app-line
      :center-coordinates="{x: 10, y: 10}"
      :simbol-coordinates="{x1: 5, y1: -10, x2: 5, y2: 10}"
    />
 </svg>
</template>

<script>
import AppIconLine from '@/components/icons/AppIconLine'

export default {
  name: 'AppCustomIconColors',
  components: {
    'app-line': AppIconLine
  }
}
</script>

<style lang="scss" scoped>
.svg {
  // border: 1px solid green;
  width: 20px;
  height: 20px;
  &:hover > svg {
    stroke: white;
    fill: white;
  }
}
</style>
