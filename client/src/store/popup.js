export default {
  start: {
    description: `
      This section will help you understand the application a little better, as well as offer tips for some sexy designs.
    `
  },
  controls: {
    description: 'There are 3 sections of control at your disposal: The Selector, The Buttons and The Sliders',
    selector: {
      description: `
        The Selector is where you choose a simbol to customize. It's a dropdown menu if on a small screen or
        a small visual representation of the simbols if on a larger screen.
      `
    },
    buttons: {
      description: `
        There are 3 buttons for you to click - one for randomizing the color of the lines, one for randomizing the simbol
        without changing the sliders and one by changing them.
      `,
      colors: {
        description: `
          This is an ON/OFF button that toggles whether all the lines are in the same color (set by the color sliders)
          or a random distribution of colors starting from black and ending in whatever color the line color sliders
          are set to
        `
      },
      refresh: {
        description: `
            The refresh button is used when you have found the perfect settings but the colors or lines aren't quite right.
            This button will make a slightly different version of the current simbol.
        `
      },
      randomize: {
        description: `
          The randomize button will choose a random value for each slider.
        `
      }
    },
    sliders: {
      description: `
        There are 3 sets of 3 sliders per set: 3 to control the background color, 3 to control the color of the lines,
        3 that control either the amount or scatter or width of the lines.
      `,
      bgColors: {
        description: `
          These sliders are responsible for the amount of red, green and blue of the background.
        `
      },
      colors: {
        description: `
          These sliders are responsible for the amount of red, green and blue of the lines.
        `
      },
      other: {
        description: `
          The repetition slider sets the amount of lines to use when drawing a simbol. The scatter slider determines
          the area to use for the beginning and end of the line. A smaller area means a more concrete and traditional
          look for the simbol. The width slider controls the width of the lines
        `
      }
    }
  }
}
