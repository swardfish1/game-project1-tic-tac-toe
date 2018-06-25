const gameAPI = require('./gameApi')
const store = require('../store')
const boardLogic = require('../boardLogic')
const ui = require('../ui')

const onNewGame = function (event) {
  let data = {}
  store.boardStatus = {}
  gameAPI.newGame(data)
  .then(ui.createGameSuccess)
  .catch(ui.createGameError)
}

const getGames = function(event){
  let data = store.game
  gameAPI.getGame(data)
  .then(ui.showGames)
  .catch(ui.showGameError)
}


module.exports = {
  onNewGame: onNewGame
}
