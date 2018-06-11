'use strict'
const authEvents = require('./events')
const boardLogic = require('./boardLogic')
const ui = require ('./ui')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.square').on('click', function (data) {
    event.preventDefault()
    if (data.target.innerHTML) { ui.alreadyClicked() } else {
    const gameStatus = boardLogic.processMove(data.target.id)
    ui.updateUi(gameStatus)
  }})
  $('#winMessage').on('click', ui.clearBoard)

  $("#sign-out").on('click', ui.signedOutState)
})
