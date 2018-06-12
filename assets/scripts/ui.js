'use strict'
const store = require('./store')
const boardLogic = require('./boardLogic')

const signUpSuccess = function (signUpResponse) {
  $('#alert').html(`
    <div class= "alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Signed up! Get playing!
    </div>
    `)
    $('#signUpModal').modal('hide')
    signedInState()
}

const signUpError = function (error) {
  $('#error').html(`
    <div class= "alert alert-danger alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Error signing up. Please check for errors.
    </div>
    `)
}

const signInSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      You Signed In!
    </div>
    `)
    $('#signInModal').modal('hide')
    signedInState()
}

const signedInState = function () {
  $('#sign-out, #new-game, #change-password').removeClass('hidden')
  $('#sign-up, #sign-in').addClass('hidden')
}

const signInError = function (error) {
  $('#alert').html(`
    <div class= "alert alert-danger alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Error Signing in.
    </div>
    `, error)
}

const changePasswordSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Password Changed!
    </div>
    `)
    $('#changePasswordModal').modal('hide')
}

const changePasswordError = function (error) {
  $('#alert').html(`
    <div class= "alert alert-danger alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not change password.
    </div>
    `)
}

const signedOutState = function () {
  $('#change-password, #sign-out, #game-board, #footer, #new-game').addClass('hidden')
  $('#sign-up, #sign-in').removeClass('hidden')
}

const signOutSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert alert-warning alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Signed Out
    </div>
    `)
    signedOutState()
}

const signOutFail = function (response) {
  $('#alert').html(`
    <div class= "alert alert-info alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not sign out.
    </div>
    `)
}

const updateUi = function (game) {
  for (var i = 0; i < game.boardState.length; i++) {
    $(`#${i}`).html(game.boardState[i])
  }
  //updateScore
  $('#xscore').html(game.xScore)
  $('#oscore').html(game.oScore)
  //display win winMessage
  if (game.winner){
    $('#alert').html(`
        <div class= "alert alert-info alert-dismissable">
          <div>
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
          Winner is: ${game.winner}
          </div>
        </div>
      `)
  }
}

const alreadyClicked = function () {
  $('#alert').html(`
    <div class= "alert alert-warning alert-dismissable">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
      Already Taken
    </div>
    `)
}

const createGameSuccess = function (response) {
  store.game = response.game
  $('#game-board, #footer').removeClass('hidden')
  $('.square').html('')
  store.boardStatus.boardState = []
  store.boardStatus.squareValue = ''
  store.boardStatus.winner = ''
  $('#alert').html(`
    <div class= "alert alert-info alert-dismissable">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
      Great Success! Good Luck!!
    </div>
    `)
}

const createGameError = function () {
  $('#alert').html(`
    <div class= "alert alert-danger alert-dismissable">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
      Already Taken
    </div>
    `)
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  signInSuccess: signInSuccess,
  signInError: signInError,
  signOutSuccess: signOutSuccess,
  signOutFail: signOutFail,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordError: changePasswordError,
  updateUi: updateUi,
  alreadyClicked: alreadyClicked,
  createGameSuccess: createGameSuccess,
  createGameError: createGameError
}
