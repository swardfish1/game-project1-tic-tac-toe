'use strict'
const authEvents = require('./events')
const boardLogic = require('./boardLogic')
const ui = require ('./ui')
const gameEvents = require('./game/gameEvents')
const gameAPI = require('./game/gameApi')
const store = require ('./store')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.square').on('click', function (data) {
    event.preventDefault()
    if (data.target.innerHTML) { ui.alreadyClicked() } else {
      const gameStatus = boardLogic.processMove(data.target.id)
      gameAPI.updateState(data.target.id)
      ui.updateUi(gameStatus, data)
    }
  })
  $('#winMessage').on('click', ui.clearBoard)
  $("#sign-out").on('click', ui.signedOutState)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#getGames').on('click', gameEvents.getGames)
})
