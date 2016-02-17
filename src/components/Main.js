require('normalize.css');
require('styles/App.css');

import React from 'react';

let Cup = React.createClass({
  render:function(){

    return <div></div>
  }
});

let AppComponent = React.createClass ({
  getInitialState: function() {
    return {

    }
  },
  StartGame: function(){

  },
  render: function(){

    return (
        <div className = "board">
          <h1 className = "header">Shell Game</h1>
          <button className = "button" onClick={this.StartGame}>Start the game!</button>
        </div>
    );
  }
});

export default AppComponent;
