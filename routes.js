import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import HomeContainer from './containers/HomeContainer';
import ForecastContainer from './containers/ForecastContainer';
import DetailContainer from './containers/DetailContainer';


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      	<IndexRoute component={HomeContainer} />
	  	<Route path='forecast/:city' component={ForecastContainer} />
	  	<Route path='detail/:city' component={DetailContainer} />
    </Route>
  </Router>
);

module.exports = routes;