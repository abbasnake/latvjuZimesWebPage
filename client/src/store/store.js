import Vue from 'vue'
import Vuex from 'vuex'
import simbols from './simbols'
import popup from './popup'
import {
  repeatArray,
  getSimbolKeys,
  sliderRandomizeArray
} from './helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSimbol: 'zalktis2',
    repetitions: 50,
    scatter: 20,
    strokeWidth: 2,
    isRandomizeColors: true,
    bgR: 255,
    bgG: 255,
    bgB: 255,
    r: 255,
    g: 0,
    b: 0,
    isPopup: false,
    simbols,
    popup
  },
  getters: {
    currentSimbolCoordinates: state => repeatArray(state.simbols[state.currentSimbol].coordinates, state.repetitions),
    currentSimbolName: state => state.simbols[state.currentSimbol].name,
    currentSimbolKey: state => state.currentSimbol,
    scatter: state => (state.scatter < 1 ? 1 : state.scatter),
    simbolKeys: state => getSimbolKeys(state.simbols),
    colors: state => ({r: state.r, g: state.g, b: state.b}),
    bgColors: state => ({r: state.bgR, g: state.bgG, b: state.bgB}),
    isRandomizeColors: state => state.isRandomizeColors,
    strokeWidth: state => state.strokeWidth,
    simbols: state => state.simbols,
    repetitions: state => (state.repetitions < 1 ? 1 : state.repetitions),
    popup: state => state.popup,
    isPopup: state => state.isPopup
  },
  mutations: {
    changeSimbol: (state, payload) => {
      state.currentSimbol = payload
    },
    refresh (state) {
      const repetitionCount = state.repetitions // dirty way to refresh the canvas
      state.repetitions = 1
      state.repetitions = repetitionCount
    },
    toggleColors (state) {
      state.isRandomizeColors = !state.isRandomizeColors
    },
    changeSlider (state, {name, value}) {
      state[name] = value
    },
    openPopup (state) {
      state.isPopup = true
    },
    closePopup (state) {
      state.isPopup = false
    }
  },
  actions: {
    changeSimbol (context, payload) {
      context.commit('changeSimbol', payload)
    },
    refresh (context) {
      context.commit('refresh')
    },
    toggleColors (context) {
      context.commit('toggleColors')
    },
    changeSlider (context, payload) {
      context.commit('changeSlider', payload)
    },
    openPopup (context) {
      context.commit('openPopup')
    },
    closePopup (context) {
      context.commit('closePopup')
    },
    randomizeSliders (context, screenSize) {
      if (screenSize >= 1080) {
        sliderRandomizeArray.forEach(async slider => {
          const newValue = Math.floor(Math.random() * slider.maxValue)
          let currentValue = parseInt(context.state[slider.name])
          const difference = newValue - currentValue
          const increments = 6
          const addBy = difference / increments

          for (let i = 0; i < increments; i++) {
            currentValue += addBy
            await new Promise(resolve => setTimeout(resolve, 20))
            await context.commit('changeSlider', {
              name: slider.name,
              value: Math.floor(currentValue)
            })
          }
        })
      } else {
        sliderRandomizeArray.forEach(slider => {
          context.commit('changeSlider', {
            name: slider.name,
            value: Math.floor(Math.random() * slider.maxValue)
          })
        })
      }
    }
  }
})
