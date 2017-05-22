import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Home from './components/Home.js';
import Articles from './components/Articles';
require('./index.scss');


ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={Home}>
      <Route path="/:sourceId/:sortBy" component={Articles} />
    </Route>
  </Router>,
  document.getElementById('app'));
