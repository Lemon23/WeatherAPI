//app.js是Main.js

import React from 'react';
import GetCityContainer from './containers/GetCityContainer';

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }, 
  header: {
    display:'flex', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    background: 'rgba(252, 90, 44, 0.8)', 
    color: '#fff',
    padding: 5,
  }, 
  titles: {
    color: '#fff',
    textDecoration: 'none',
  }
}

var App = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={{margin: 0}}><a href="#" style={styles.titles}>Weather API</a></h2>
          <GetCityContainer direction='row' />
        </div>
        {this.props.children} 
      </div>
    )
  }
})

module.exports = App;
