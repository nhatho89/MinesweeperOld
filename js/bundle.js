/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(1);
	
	
	
	$(function () {
	  var rootEl = $('.minesweeper');
	  var game = new Game(rootEl);
	
	  var handleClick = game.openTile;
	  document.addEventListener('click', handleClick);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Board = __webpack_require__(2);
	
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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Tile = __webpack_require__(3);
	
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


/***/ },
/* 3 */
/***/ function(module, exports) {

	var Tile = function(row, col, isBomb, id) {
	  this.row = row;
	  this.col = col;
	  this.isBomb = isBomb;
	  this.isMarked = false;
	  this.id = id;
	};
	
	module.exports = Tile;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map