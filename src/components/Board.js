require('normalize.css');
require('styles/App.css');

import React from 'react';
import Cup from './Cup';

var Board = React.createClass({
  getInitialState: function() {
    var board = [];
    for (var i=0; i<3; i++) {
      board.push({number: i});
    }
    return {
      board: board,
      showTheBall:false,
      clickedCup : null,
      gameStatus:''
    }
  },
  render: function(){
    var cups = [];
    for (var i=0; i<3; i++) {

      var cup = <Cup index={i} key={i} showTheBall={i === this.state.showTheBall}
                     clickedCup = {i === this.props.index}
                     onClick={this.onCupClick}/>;

      cups.push(cup);
    }
    return (
      <div>
        <h1 className = "header">Shell Game</h1>
        <button className = "button" onClick={this.shuffleCups}>Shuffle!</button>
        <button className = "button" onClick={this.shuffleCups}>Restart!</button>
        <div className="cup-container">
          {cups}
          <h1 className="game-status"> {this.state.gameStatus} </h1>
        </div>
      </div>
    )
  },

  onCupClick: function(index){
    this.setState({clickedCup:index,  showTheBall:true});

    var array = this.state.board;
    for (var i = 0; i < array.length; i++){
      if(index === this.state.board[i].number) {
        this.setState({gameStatus: 'You Won!',  showTheBall:index});
      } else {
        this.setState({gameStatus: 'You lost :(',  showTheBall:false});
      }
    }
  },

  shuffleCups: function(){
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
    this.setState({board:boardArray});
  }
});
export default Board;
