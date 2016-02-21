require('normalize.css');
require('styles/App.css');

import React from 'react';

var Cup = React.createClass({
  render:function(){

    return (
        <img className='cup' src="/images/silver-cup-th.png"/>
    )
  }
});
var Board = React.createClass({
  //getInitialState: function() {
  //  }
  //  return {
  //  }
  //},
  RestartGame: function(){},
  render: function(){
    var cups = [];
    for (var i=0; i<3; i++) {
      cups.push(<Cup key={i}/>);
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
var AppComponent = React.createClass ({
  render: function(){

    return (
        <div className = "board-container">
          <Board/>
        </div>
    );
  }
});

export default AppComponent;
