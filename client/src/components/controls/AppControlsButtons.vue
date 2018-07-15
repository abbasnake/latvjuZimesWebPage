<template>
  <div class="container">
    <app-button
      title="Randomize Colors"
      class="container__button"
      @clicked="randomizeColors"
      :is-toggle="true"
      :isOn="isRandomizeColors"
    >
      <app-custom-icon-colors />
    </app-button>
    <app-button
      title="Refreh Settings"
      class="container__button"
      @clicked="refresh"
    >
      <app-custom-icon-refresh />
    </app-button>
    <app-button
      title="Randomize Settings"
      class="container__button"
      @clicked="randomize"
    >
      <app-custom-icon-dice />
    </app-button>
    <app-button
      title="Save Settings"
      class="container__button"
      @clicked="saveSettings"
    >
      <app-custom-icon-save />
    </app-button>
    <app-button
      title="Load Settings"
      class="container__button"
      @clicked="loadSettings"
    >
      <app-custom-icon-load />
    </app-button>
    <app-button
      title="Help & Information"
      class="container__button"
      @clicked="openPopup"
    >
      <app-custom-icon-info />
    </app-button>
  </div>
</template>

<script>
import AppButton from '@/components/button/AppButton'
import AppCustomIconColors from '@/components/icons/AppCustomIconColors'
import AppCustomIconRefresh from '@/components/icons/AppCustomIconRefresh'
import AppCustomIconDice from '@/components/icons/AppCustomIconDice'
import AppCustomIconSave from '@/components/icons/AppCustomIconSave'
import AppCustomIconLoad from '@/components/icons/AppCustomIconLoad'
import AppCustomIconInfo from '@/components/icons/AppCustomIconInfo'

export default {
  name: 'AppControlsButtons',
  components: {
    'app-button': AppButton,
    'app-custom-icon-colors': AppCustomIconColors,
    'app-custom-icon-refresh': AppCustomIconRefresh,
    'app-custom-icon-dice': AppCustomIconDice,
    'app-custom-icon-save': AppCustomIconSave,
    'app-custom-icon-load': AppCustomIconLoad,
    'app-custom-icon-info': AppCustomIconInfo
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
  &__button {
    border: 1px solid red;
  }
}
</style>
