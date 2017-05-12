import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import Login from './Login';
import Footer from './Footer';


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Login />
                <div className="headers"><Header /></div>
                <div className="content"><Content /></div>
                <Footer />
            </div >
        );
    }
}
