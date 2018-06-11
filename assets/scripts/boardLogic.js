
let game = {
  over: false,
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
  return game
}

const setSquareValue = function (id) {
  game.squareValue = game.squareValue == 'X' ? 'O' : 'X'
  game.boardState[id] = game.squareValue
}

function checkForWinners () {
  for (const winCombo of winCombos) {
    checkWin(winCombo[0], winCombo[1], winCombo[2])
  }
}

const checkWin = function (a, b, c) {
  if (!!game.boardState[a] && game.boardState[a] === game.boardState[b] && game.boardState[b] === game.boardState[c]) {
    game.winner = game.squareValue
    updateScore()
  }
}

const updateScore = function () {
  if (game.winner === 'X') {
    game.xScore ++
  } else if (game.winner === 'O') {
    game.oScore ++
  }
  game.over = true
}

module.exports = {
  processMove: processMove,
  game: game
}
