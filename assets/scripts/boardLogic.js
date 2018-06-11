
let gameStatus = {
  winner: '',
  winningCombo: [],
  squareValue: '',
  boardState: [],
  xScore: 0,
  oScore: 0
}

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

const processMove = function (id) {
  setSquareValue(id)
  checkForWinners()
  return gameStatus
}

const setSquareValue = function (id) {
  gameStatus.squareValue = gameStatus.squareValue == 'X' ? 'O' : 'X'
  gameStatus.boardState[id] = gameStatus.squareValue
}

function checkForWinners () {
  for (const winCombo of winCombos) {
    checkWin(winCombo[0], winCombo[1], winCombo[2])
  }
}

const checkWin = function (a, b, c) {
  if (!!gameStatus.boardState[a] && gameStatus.boardState[a] === gameStatus.boardState[b] && gameStatus.boardState[b] === gameStatus.boardState[c]) {
    gameStatus.winner = gameStatus.squareValue
    updateScore()
  }
}

const updateScore = function () {
  if (gameStatus.winner === 'X') {
    gameStatus.xScore ++
  } else if (gameStatus.winner === 'O') {
    gameStatus.oScore ++
  }
}

module.exports = {
  processMove: processMove,
  gameStatus: gameStatus
}
