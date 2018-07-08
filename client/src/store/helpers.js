const repeatArray = (arr, num) => {
  let newArr = []
  if (num < 1) { num = 1 }
  for (let i = 0; i < num; i++) {
    newArr = newArr.concat(arr)
  }
  return newArr
}

const getSimbolKeys = obj => {
  let arr = []
  for (let key in obj) {
    arr.push(key)
  }
  return arr
}

const sliderRandomizeArray = [
  {name: 'r', maxValue: 255},
  {name: 'g', maxValue: 255},
  {name: 'b', maxValue: 255},
  {name: 'bgR', maxValue: 255},
  {name: 'bgG', maxValue: 255},
  {name: 'bgB', maxValue: 255},
  {name: 'scatter', maxValue: 100},
  {name: 'repetitions', maxValue: 100},
  {name: 'strokeWidth', maxValue: 100}
]

export { repeatArray, getSimbolKeys, sliderRandomizeArray }
