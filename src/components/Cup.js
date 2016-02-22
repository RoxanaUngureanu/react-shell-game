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
    var cupStyle = {background: '#fffdea', backgroundSize:'100%'};
    if (this.props.showTheBall === false) {
      cupStyle.background = cupImage;
      cupStyle.backgroundSize = '100%';
      console.log('ONE')
    } else if ((this.props.showTheBall === true)&&(this.props.winner === true)){
      cupStyle.background = ballImage;
      console.log('TWO')
    } else if ((this.props.showTheBall === true)&&(this.props.winner === false)) {
      cupStyle.background = '#fffdea';
      console.log('THREE')
    }
    return (
      <div className='cup'  style={cupStyle} onClick={this.onClick}>
      </div>
    )
  }
});

export default Cup;
