<template>
  <div class="background">
    <div class="container">
      <app-header1 />
      <button class="container__button" @click="closePopup">X</button>
      <p>{{ popup.start.description }}</p>
      <br />
      <app-header2>CONTROLS</app-header2>
      <p>{{ popup.controls.description }}</p>
      <br />
      <app-header2 font-size="16px">THE SELECTOR</app-header2>
      <p>{{ popup.controls.selector.description }}</p>
      <br />
      <app-header2 font-size="16px">THE BUTTONS</app-header2>
      <p>{{ popup.controls.buttons.description }}</p>
    </div>
  </div>
</template>

<script>
import AppPopupHeader1 from '@/components/AppPopupHeader1'
import AppPopupHeader2 from '@/components/AppPopupHeader2'

export default {
  name: 'AppPopup',
  components: {
    'app-header1': AppPopupHeader1,
    'app-header2': AppPopupHeader2
  },
  computed: {
    popup () {
      return this.$store.getters.popup
    }
  },
  methods: {
    closePopup () {
      this.$store.dispatch('closePopup')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.background {
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
}

.container {
  border: 2px solid $primary-red;
  border-radius: 5px;
  background-color: white;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  text-align: center;
  &__button {
    position: absolute;
    right: 10px;
    top: 10px
  }
}

@media (min-width: 300px) {
  .background {
    align-items: center;
  }

  .container {
    width: 75%;
  }
}
</style>
