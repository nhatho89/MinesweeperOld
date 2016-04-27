var Tile = function(row, col, isBomb, id) {
  this.row = row;
  this.col = col;
  this.isBomb = isBomb;
  this.isMarked = false;
  this.id = id;
};

module.exports = Tile;
