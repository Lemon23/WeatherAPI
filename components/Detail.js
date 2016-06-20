import React from 'react';
import utils from '../helpers/utils';
import DayItem from './DayItem';
var convertTemp = require('../helpers/utils').convertTemp;

var styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function Detail (props) {
  return (
    <div style={styles.container}>
      <DayItem day={props.weather} />
      <div style={styles.descriptionContainer}>
        <p>{props.city}</p>
        <p>{props.weather.weather[0].description}</p>
        <p>min temp: {convertTemp(props.weather.temp.min)} ℃</p>
        <p>max temp: {convertTemp(props.weather.temp.max)} ℃</p>
        <p>humidity: {props.weather.humidity}</p>
      </div>
    </div>
  )
}

module.exports = Detail;