import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import Login from './Login';
import Footer from './Footer';


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="headers"><Header /></div>
                <div className="headers"><Login /></div>
                <div className="content"><Content /></div>
                <Footer />
            </div >
        );
    }
}
