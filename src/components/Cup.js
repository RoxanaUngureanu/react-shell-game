require('normalize.css');
require('styles/App.css');

import React from 'react';

var Cup = React.createClass({
  onClick: function () {
    this.props.onClick(this.props.index);
  },
  render:function(){
    var cupImage = 'url("http://www.clker.com/cliparts/c/v/W/h/v/Z/silver-cup-th.png")no-repeat';
    var ballImage = 'url("http://d.alternativeto.net/dist/icons/my-crystal-ball_71748.png?width=64&height=64&mode=crop&upscale=false")no-repeat';
    var cupStyle = {background: cupImage, backgroundSize:'100%'};

    if (this.props.showTheBall){
      cupStyle = {background: ballImage, backgroundSize:'100%'};
      console.log('BALL',this.props.showTheBall)
      console.log('CUP',this.props.clickedCup)
      console.log('INDEX',this.props.index)

    //} else {
    //  cupStyle.background = "red";
    }
    return (
      <div className='cup'  style={cupStyle} onClick={this.onClick}>
      </div>
    )
  }
});

export default Cup;
