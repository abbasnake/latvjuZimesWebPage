<template>
  <div class="container">
    <app-button
      title="Randomize Colors"
      class="container__colors"
      @clicked="randomizeColors"
      :is-toggle="true"
      :isOn="isRandomizeColors"
    >
      <app-custom-icon-colors />
    </app-button>
    <app-button
      title="Refreh Settings"
      class="container__refresh"
      @clicked="refresh"
    >
      <app-custom-icon-refresh />
    </app-button>
    <app-button
      title="Randomize Settings"
      class="container__randomize"
      @clicked="randomize"
    >
      RaS
    </app-button>
    <app-button
      title="Save Settings"
      class="container__save"
      @clicked="saveSettings"
    >
      Save
    </app-button>
    <app-button
      title="Load Settings"
      class="container__load"
      @clicked="loadSettings"
    >
      Load
    </app-button>
    <app-button
      title="Help & Information"
      class="container__help"
      @clicked="openPopup"
    >
      Help
    </app-button>
  </div>
</template>

<script>
import AppButton from '@/components/button/AppButton'
import AppCustomIconColors from '@/components/icons/AppCustomIconColors'
import AppCustomIconRefresh from '@/components/icons/AppCustomIconRefresh'

export default {
  name: 'AppControlsButtons',
  components: {
    'app-button': AppButton,
    'app-custom-icon-colors': AppCustomIconColors,
    'app-custom-icon-refresh': AppCustomIconRefresh
  },
  data () {
    return {
      screenWidth: null
    }
  },
  computed: {
    isRandomizeColors () {
      return this.$store.getters.isRandomizeColors
    }
  },
  mounted () {
    this.screenWidth = screen.width
  },
  methods: {
    randomizeColors () {
      this.$store.dispatch('toggleColors')
    },
    refresh () {
      this.$store.dispatch('refresh')
    },
    randomize () {
      this.$store.dispatch('randomizeSliders', this.screenWidth)
    },
    openPopup () {
      this.$store.dispatch('openPopup')
    },
    saveSettings () {
      console.log('save settings')
    },
    loadSettings () {
      console.log('load settings')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  // border: 1px solid grey;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
}
</style>
