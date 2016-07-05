import React, { PropTypes } from 'react';
import GetCityContainer from '../containers/GetCityContainer';

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('../images/index.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
  other: {
    color: '#fff',
    fontSize: 13
  }
}

function Home (props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter a City and State</h1>
      <GetCityContainer />
      <div style={styles.other}><i>&copy; by Lemon</i></div>
    </div>
  )
}

module.exports = Home;