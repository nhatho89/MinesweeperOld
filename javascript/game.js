var Board = require('./board.js');

var Game = function(rootEl) {
  this.rootEl = rootEl;
  var board = new Board(rootEl,8,8,8);

  this.createDOMGrid(board.grid, board.row);
};


Game.prototype.createDOMGrid = function(grid,length) {
  var minesweeper = $('.minesweeper');
  for (var i = 0; i < grid.length; i++) {
    var row = $('<div class="row" id="' + i + '">')
    minesweeper.append(row);

  }
  var unitCount = 1;

  var row = $('.row');
  for (var i = 0; i < length; i++) {
    var unit = $('<div class="unit" id="' + unitCount + '">')
    row[i].append(unit);

    unitCount++
  }
};

Game.prototype.openTile = function(e) {
  e.preventDefault();

  var element = $('#' + e.target.id);
  element.css('background-color','blue');
}



module.exports = Game
