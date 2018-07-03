<template>
  <div class="container">
    <template v-if="isSmallScreen">
      <select class="container__select" @change="onChange">
        <option
        v-for="(key, index) in simbolKeys"
        :value="key"
        :key="index"
        :selected="isCurrentlySelectedSimbol(key)"
        >
         {{ simbols[key].name }}
        </option>
      </select>
    </template>
    <template v-else>
      <app-icon
        v-for="(key, index) in simbolKeys"
        :key="index"
        :simbol-key="key"
      />
    </template>
  </div>
</template>

<script>
import AppIcon from '@/components/icons/AppIcon'

export default {
  name: 'AppControlsSelect',
  components: {
    'app-icon': AppIcon
  },
  data () {
    return {
      isSmallScreen: true
    }
  },
  mounted () {
    this.checkScreenSize()
    this.resizeListener()
  },
  computed: {
    simbolKeys () {
      return this.$store.getters.simbolKeys
    },
    currentSimbolName () {
      return this.$store.getters.currentSimbolName
    },
    simbols () {
      return this.$store.getters.simbols
    },
    currentSimbolKey () {
      return this.$store.getters.currentSimbolKey
    }
  },
  methods: {
    onChange (e) {
      this.$store.dispatch('changeSimbol', e.target.value)
    },
    checkScreenSize () {
      if (window.innerWidth <= 400 || window.innerHeight <= 800) {
        this.isSmallScreen = true
      } else {
        this.isSmallScreen = false
      }
    },
    resizeListener () {
      window.addEventListener('resize', this.checkScreenSize)
    },
    isCurrentlySelectedSimbol (key) {
      return this.currentSimbolKey === key
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-gap: 5px;
  justify-items: center;
  &__select {
  }
}

@media (min-width: 400px) and (min-height: 800px) {
  .container {
    grid-template-columns: repeat(11, 1fr);
    justify-items: center;
    grid-template-columns: repeat(11, 1fr);
  }
}

@media (min-width: 800px) and (min-height: 800px) {
  .container {
    grid-template-columns: repeat(22, 1fr);
  }
}
</style>
