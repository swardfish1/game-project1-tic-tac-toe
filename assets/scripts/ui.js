'use strict'
const store = require('./store')

const signUpSuccess = function (signUpResponse) {
  $('#alert').html(`
    <div class= "alert alert-success">
      <button type="button" class="close" aria-hidden="true">&times;</button>
      Signed up! Get playing!
    </div>
    `)
    $('#signUpModal').modal('hide')
}
const signUpError = function (error) {
  $('#error').html(`
    <div class= "alert alert-danger">
      <button type="button" class="close" aria-hidden="true">&times;</button>
      Error signing up. Please check for errors.
    </div>
    `)
}
const signInSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert alert-success">
      <button type="button" class="close" aria-hidden="true">&times;</button>
      You Signed In!
    </div>
    `)
    $('#signInModal').modal('hide')
}
const signInError = function (error) {
  $('#alert').html(`
    <div class= "alert alert-danger">
      <button type="button" class="close" aria-hidden="true">&times;</button>
      Error Signing in.
    </div>
    `, error)
}

const changePasswordSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert alert-success">
      <button type="button" class="close" aria-hidden="true">&times;</button>
      Password Changed!
    </div>
    `)
    $('#changePasswordModal').modal('hide')
}

const changePasswordError = function (error) {
  $('#alert').html(`
    <div class= "alert alert-danger">
      <button type="button" class="close" aria-hidden="true">&times;</button>
      Could not change password.
    </div>
    `)
}

const signOutSuccess = function (response) {
  $('#alert').html(`
    <div class= "alert alert-success">
      <button type="button" class="close" aria-hidden="true">&times;</button>
      Signed Out
    </div>
    `)
}

const signOutFail = function (response) {
  $('#alert').html(`
    <div class= "alert alert-danger">
      <button type="button" class="close" aria-hidden="true">&times;</button>
      Could not sign out.
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
  changePasswordError: changePasswordError
}
