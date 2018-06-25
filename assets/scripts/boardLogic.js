'use strict'
const store = require('./store')
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let click = 1

const processMove = function (id) {
  if (click < 9) {
    setSquareValue(id)
    checkForWinners()
    click++
    return store.boardStatus
  } else {
    click = 1
  }
}

const setSquareValue = function (id) {
  store.boardStatus.squareValue = store.boardStatus.squareValue === 'X' ? 'O' : 'X'
  store.boardStatus.boardState[id] = store.boardStatus.squareValue
  // store.boardStatus.boardState.forEach((v, k) => {
  //   squares.push(k)
  //   vals.push(v)
  // })
}

function checkForWinners () {
  for (const winCombo of winCombos) {
    checkWin(winCombo[0], winCombo[1], winCombo[2])
  }
}

const checkWin = function (a, b, c) {
  if (!!store.boardStatus.boardState[a] &&
      store.boardStatus.boardState[a] === store.boardStatus.boardState[b] &&
      store.boardStatus.boardState[b] === store.boardStatus.boardState[c]) {
    store.boardStatus.winner = store.boardStatus.squareValue
    updateScore()
  }
}

const updateScore = function () {
  if (store.boardStatus.winner === 'X') {
    store.boardStatus.xScore++
  } else if (store.boardStat.winner === 'O') {
    store.boardStatus.oScore++
  }
  store.boardStatus.over = true
}

module.exports = {
  processMove: processMove,
  updateScore: updateScore
}
