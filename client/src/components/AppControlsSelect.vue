<template>
  <div class="container">
      <app-icon
        v-for="(key, index) in simbolKeys"
        :key="index"
        :simbol-key="key"
      />
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon'

export default {
  name: 'AppControlsSelect',
  components: {
    'app-icon': AppIcon
  },
  computed: {
    simbolKeys () {
      return this.$store.getters.simbolKeys
    },
    currentSimbolName () {
      return this.$store.getters.currentSimbolName
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  // padding: 5px;
}

@media (min-width: 450px) {
  .container {
    grid-template-columns: repeat(11, 1fr);
  }
}

@media (min-width: 800px) {
  .container {
    grid-template-columns: repeat(22, 1fr);
  }
}
</style>
