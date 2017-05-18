import React, { Component } from 'react';
import Home from './Home';
import Main from '../main';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuthService from 'utils/AuthService';
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
        <Route path="/" component={Container} auth={auth}>
            <IndexRedirect to="/home" />
            <Route path="home" component={Home} onEnter={requireAuth} />
            <Route path="login" component={Login} />
        </Route>
    );
};

export default makeMainRoutes;

