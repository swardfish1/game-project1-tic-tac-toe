'use strict'
const store = require('./store')

const signUpSuccess = function (signUpResponse) {
  $('#alert').html(`
    <div class= "alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Signed up! Sign in!
    </div>
    `)
    $('#sign-up-form').trigger('reset')
  $('#signUpModal').modal('hide')
}

const signUpError = function (error) {
  $('#errorSU').html(`
    <div class= "alert alert-danger alert-dismissable fade in">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Error signing up. Please check fields for errors. #{error}
    </div>
    `)
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      You Signed In!
    </div>
    `)
  $('#sign-in-form').trigger('reset')
  $('#signInModal').modal('hide')
  signedInState()
}

const signedInState = function () {
  $('#sign-out, #new-game, #change-password').removeClass('hidden')
  $('#sign-up, #sign-in').addClass('hidden')
}

const signInError = function (error) {
  $('#errorSI').html(`
    <div class= "alert alert-danger alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Error Signing in.
    </div>
    `, error)
    $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Password Changed!
    </div>
    `)
    $('#change-password-form').trigger('reset')
    $('#changePasswordModal').modal('hide')
}

const changePasswordError = function (error) {
  $('#errorCP').html(`
    <div class= "alert alert-danger alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not change password.${error}
    </div>
    `)
  $('#change-password-form').trigger('reset')
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
  $('#error').html(`
    <div class= "alert alert-info alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Could not sign out.
    </div>
    `)
}

const updateUi = function (game, data) {
  const id = data.target.id
  $(`#${id}`).html(store.boardStatus.boardState[id])

  // display win winMessage
  if (store.boardStatus.winner) {
    $('#alert').html(`
        <div class= "alert alert-info alert-dismissable">
          <div>
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
          Winner is: ${store.boardStatus.winner}
          </div>
        </div>`)
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
      Server error. Try Again
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
