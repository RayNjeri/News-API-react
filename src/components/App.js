/*import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuthService from 'utils/AuthService';

import Home from './Home';
import Main from '../main';
import Login from './Login';

const auth = new AuthService('5ib0U00FYOv6jRYPyCl3Q6umEhM2PLQj', 'raynjeri.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
      <Route path="/:sourceId/:sortBy" component={Articles} />
    </Route>
    </Router>
  );
};

export default makeMainRoutes;
*/
