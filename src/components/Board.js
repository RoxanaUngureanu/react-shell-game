require('normalize.css');
require('styles/App.css');

import React from 'react';
import Cup from './Cup';

var Board = React.createClass({
  getInitialState: function() {
    var board = [];
    for (var i=0; i<3; i++) {
      board.push({index: i+1});
    }
    return {
      board: board
    }
  },
  RestartGame: function(){
    var boardArray = this.state.board;
    var index = boardArray.length;
    var obj, randomIndex;
    while (0 !== index) {
      randomIndex = Math.floor(Math.random() * index);
      index = index-1;
      obj = boardArray[index];
      boardArray[index] = boardArray[randomIndex];
      boardArray[randomIndex] = obj;
    }
    this.setState({boardArray});
    console.log(boardArray)
  },
  render: function(){
    var cups = [];
    for (var i=0; i<3; i++) {
      var cup = <Cup
        index={i}
        key={i}
      />;
      cups.push(cup);
    }
    return (
      <div>
        <h1 className = "header">Shell Game</h1>
        <button className = "button" onClick={this.RestartGame}>Restart the game!</button>
        <div className="cup-container">
          {cups}
        </div>
      </div>
    )
  }
});
export default Board;
