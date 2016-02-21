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

export default Cup;
