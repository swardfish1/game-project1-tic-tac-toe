'use strict'
const store = require('./store')
const url = require('./config')
const boardLogic = require('./boardLogic')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: url.apiUrl + 'sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: url.apiUrl + 'sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: url.apiUrl + 'change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: url.apiUrl + 'sign-out',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut
}
