<template>
  <div class="container">
    <template v-if="isSmallScreen">
      <select class="container__select" @change="onChange">
        <option
        v-for="(key, index) in simbolKeys"
        :value="key"
        :key="index"
        >
         {{ simbols[key].name }}
        </option>
        <option :value="currentSimbolName" selected>{{ currentSimbolName }}</option>
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
import AppIcon from '@/components/AppIcon'

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
    }
  },
  methods: {
    onChange (e) {
      this.$store.dispatch('changeSimbol', e.target.value)
    },
    checkScreenSize () {
      if (window.innerWidth > 400) {
        this.isSmallScreen = false
      } else {
        this.isSmallScreen = true
      }
    },
    resizeListener () {
      window.addEventListener('resize', this.checkScreenSize)
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

@media (min-width: 400px) {
  .container {
    grid-template-columns: repeat(11, 1fr);
    justify-items: center;
    grid-template-columns: repeat(11, 1fr);
  }
}

@media (min-width: 800px) {
  .container {
    grid-template-columns: repeat(22, 1fr);
  }
}
</style>
