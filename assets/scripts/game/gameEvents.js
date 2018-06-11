const gameAPI = require('./gameApi')
const store = require('../store')

const onNewGame = function (event) {
  event.preventDefault()
  gameAPI.newGame(store.token)
}


module.exports = {
  onNewGame: onNewGame
}
