var Tile = require('./tile.js');

var Board = function(el, row, col, bombs) {
  this.row = row ? row : 8;
  this.col = col ? col : 8;
  this.bombs = bombs ? bombs : 8;
  this.grid = this.generateBoard();
};



Board.prototype.generateBoard = function () {
  var board = [];
  var bombs = this.createBombs();
  var id = 1;
  for (var i = 0; i < this.row; i++) {
    row = [];
    for (var j = 0; j < this.col; j++) {
        if (j === [i,j]) {
          row.push(new Tile(i,j,true, id));
          id++
        } else {
          row.push(new Tile(i,j,false, id));
          id++
        }
      }
      board.push(row)
  }
  return board
};

Board.prototype.createBombs = function () {
  var bombs = [];
  while (bombs.length < this.bombs) {
    var row = (Math.random() * 10).floor;
    var col = (Math.random() * 10).floor;

    if (bombs.indexOf([row,col] === -1)) {
      bombs.push([row,col])
    }
  }
  return bombs
};

module.exports = Board;
