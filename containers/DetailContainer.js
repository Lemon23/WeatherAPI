import React from 'react';
import Detail from '../components/Detail';

var DetailContainer = React.createClass({
  render: function() {
    return (
      	<Detail
        	weather={this.props.location.state.weather}
			city={this.props.routeParams.city} />
    );
  }

});

module.exports = DetailContainer;