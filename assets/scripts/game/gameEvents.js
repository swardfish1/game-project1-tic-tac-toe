const gameAPI = require('./gameApi')
const store = require('../store')
const boardLogic = require('../boardLogic')
const ui = require('../ui')

const onNewGame = function (event) {
  let data = {}
  gameAPI.newGame(data)
  .then(ui.createGameSuccess)
  .catch(ui.createGameError)
}


module.exports = {
  onNewGame: onNewGame
}
