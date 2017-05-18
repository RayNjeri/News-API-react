import React from 'react';
import Header from './Header';
import Content from './Content';
import Login from './Login';
import Footer from './Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="headers"><Header /></div>
        <div className="login"><Login /></div>
        <div className="content"><Content /></div>
        <Footer />
      </div >
    );
  }
}
