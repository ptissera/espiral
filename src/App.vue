<template>
  <div class="buttons-container">
  <button @click="start">Once</button>
  <button @click="infinite" :disabled="interval">Start</button>
  <button @click="stop" :disabled="!interval">Stop</button>

  </div>
  <div class="matrix-container">
    <div v-for="(row, i) in matrix" class="row" :key="`row-${i}`">
      <div v-for="(value, j) in row" class="item" :key="`col-${j}`" :class="{'mark': value, 'no-mark': !value}">
        {{value}}
      </div>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'App',
  setup() {

    const delay = (time) => {
      return new Promise(resolve => setTimeout(resolve, time));
    }
    const interval = ref(null)
    const size = 21
    const matrix = ref(Array.from({length: size}, (_) => Array.from({length: size + 20}, (_) => true)))


    const start = async() => {
      let direction = 1 // 1 left -> right, 2 top -> down, 3 right -> left, 4 down -> top
      let startRow = 0
      let endRow = matrix.value.length
      let startColumn = 0
      let endColumn = matrix.value[0].length
      let counter = 0
      const total = matrix.value.length * matrix.value[0].length
      let row = 0
      let col = -1
      while (counter < total) {
          counter++
          if (direction === 1) {
            if ((col + 1) < endColumn) {
              col++
            } else {
              startRow++
              direction = 2
            }
          }

          if (direction === 2) {
            if ((row + 1) < endRow) {
              row++
            } else {
              endColumn--
              direction = 3
            }
          } 

          if (direction === 3) {
            if (col  > startColumn) {
              col--
            } else {
              endRow--
              direction = 4
            }
          }

          if (direction === 4) {
            if (row > startRow) {
              row--
            } else {
              col++
              startColumn++
              direction = 1
            }
          }

          await delay(10)
          matrix.value[row][col] = !matrix.value[row][col]
      }
    }

    const infinite = () => {
      interval.value = setInterval(start, 1200)
    }

    const stop = () => {
      clearInterval(interval.value)
      interval.value = null
    }

    return {
      start,
      matrix,
      interval,
      infinite,
      stop
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: space-around;
  align-items: center;
}

button {
  width: 100px;
  border-radius: 2em;
  min-height: 3em;
}

button:active {
  border-color: greenyellow;
}

.item {
  width: 1rem;
  height: 1rem;
  border-radius: 4em;
  margin: .1rem;

}
.row {
  display: flex;
  flex-direction: row;
}

.mark {
  background-color: greenyellow;
}

.no-mark {
  background-color: lightseagreen;
}

.matrix-container {
  color: transparent;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons-container {
  width: 80vw;
  display: flex;
  gap: 3em;
  justify-content: center;
  align-items: center;
}
</style>
