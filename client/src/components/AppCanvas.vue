<template>
  <div class="container">
    <canvas
      class="container__canvas"
      ref="canvas"
      :style="canvasBackgroundColor"
      :height="canvasHeight"
      :width="canvasWidth"
    >
    </canvas>
    <h2 class="container__name" :style="titleColor">{{ currentSimbolName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AppCanvas',
  data () {
    return {
      ctx: null,
      centerX: null,
      centerY: null,
      unit: null,
      canvasHeight: 540,
      canvasWidth: 1080
    }
  },
  mounted () {
    this.setup()
    this.drawSimbol()
  },
  computed: {
    simbol () {
      return this.$store.getters.currentSimbolCoordinates
    },
    scatter () {
      return this.$store.getters.scatter
    },
    strokeWidth () {
      return this.$store.getters.strokeWidth
    },
    bgCol () {
      return this.$store.getters.bgColors
    },
    canvasBackgroundColor () {
      let {r, g, b} = this.bgCol
      return {
        'background-color': `rgb(${r}, ${g}, ${b})`
      }
    },
    titleColor () {
      let {r, g, b} = this.bgCol
      if (r + g + b > (255 + 255 + 255) / 2) {
        return {
          color: 'black'
        }
      } else {
        return {
          color: 'white'
        }
      }
    },
    lineColor () {
      return this.$store.getters.colors
    },
    isRandomizeColors () {
      return this.$store.getters.isRandomizeColors
    },
    currentSimbolName () {
      return this.$store.getters.currentSimbolName
    }
  },
  methods: {
    setup () {
      this.ctx = this.$refs.canvas.getContext('2d')
      this.centerX = this.canvasWidth / 2
      this.centerY = this.canvasHeight / 2
      this.unit = this.canvasWidth / 20
      // console.log(this.canvasWidth, this.canvasHeight, this.centerX)
    },
    randomizeCoordinates () {
      return Math.floor((Math.random() * this.scatter) - (Math.random() * this.scatter))
    },
    drawColors () {
      let {r, g, b} = this.lineColor
      if (this.isRandomizeColors) {
        if (parseInt(r + g + b) === 0) {
          r = g = b = Math.floor(Math.random() * 255)
        } else {
          r = Math.floor(Math.random() * r)
          g = Math.floor(Math.random() * g)
          b = Math.floor(Math.random() * b)
        }
      }
      return `rgb(${r}, ${g}, ${b})`
    },
    drawLine (x1, y1, x2, y2) {
      this.ctx.beginPath()
      this.ctx.moveTo(x1, y1)
      this.ctx.lineTo(x2, y2)
      this.ctx.lineWidth = this.strokeWidth
      this.ctx.strokeStyle = this.drawColors()
      this.ctx.stroke()
      this.ctx.closePath()
    },
    drawSimbol () {
      for (const obj of this.simbol) {
        this.drawLine(
          this.centerX + (obj.x1 * this.unit) + this.randomizeCoordinates(),
          this.centerY + (obj.y1 * this.unit) + this.randomizeCoordinates(),
          this.centerX + (obj.x2 * this.unit) + this.randomizeCoordinates(),
          this.centerY + (obj.y2 * this.unit) + this.randomizeCoordinates()
        )
      }
    },
    redraw () {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      this.drawSimbol()
    }
  },
  watch: {
    simbol () {
      this.redraw()
    },
    scatter () {
      this.redraw()
    },
    strokeWidth () {
      this.redraw()
    },
    lineColor () {
      this.redraw()
    },
    isRandomizeColors () {
      this.redraw()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  &__canvas {
    border: 1px solid red;
    border-radius: 3px;
    margin: 0 auto;
    width: 100%;
  }
  &__name {
    position: absolute;
    bottom: 2%;
    left: 1%;
    font-family: 'Amatic SC', cursive;
    font-size: calc(10px + 2vw);
  }
}

@media (min-width: 800px) {
  .container {
    &__name {
      font-size: 30px;
    }
  }
}

@media (max-height: 800px) and (orientation: landscape) {
  .container {
    width: 75%;
  }
}

@media (max-height: 600px) and (orientation: landscape) {
  .container {
    width: 50%;
  }
}
</style>
