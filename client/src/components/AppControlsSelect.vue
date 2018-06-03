<template>
  <div class="container">
    <template v-if="true">
      <select name="" id="" @change="onChange">
        <option
        v-for="(key, index) in simbolKeys"
        :value="key"
        :key="index"
        >
         {{key}}
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
  },
  methods: {
    onChange (e) {
      this.$store.dispatch('changeSimbol', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(11, 1fr);
  justify-items: center;
  // width: 100%;
  // overflow: scroll;
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
