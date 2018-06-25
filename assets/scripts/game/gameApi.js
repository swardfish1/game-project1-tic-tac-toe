'use strict'
const store = require('../store')
const url = require('../config')
const boardLogic = require('../boardLogic')
console.log(boardLogic);


const newGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: url.apiUrl + 'games',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateState = function (index) {
  return $.ajax({
    method: 'PATCH',
    url: url.apiUrl + 'games/' + store.game.id,
    data: {
      game: {
        cell: {
          index: index,
          value: store.boardStatus.squareValue
        },
        over: store.boardStatus.over
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGame = function (index) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame: newGame,
  updateState: updateState
}
