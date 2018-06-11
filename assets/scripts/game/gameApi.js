'use strict'
const store = require('../store')
const url = require('../config')
const boardLogic = require('../boardLogic')


const newGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: url.apiUrl + 'games',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

module.exports = {
  newGame: newGame
}
