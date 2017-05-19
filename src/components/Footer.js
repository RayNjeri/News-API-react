import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Router>
          <ul>
            <li><Link to="/About Us">About Us</Link></li>
            <li><Link to='/Terms & Conditions'>Terms & Conditions</Link></li>
            <li><Link to="/Help">Help</Link></li>
            <li><Link to="/Contact Us">Contact Us</Link></li>
          </ul>
        </Router>
      </div>
    );
  }
}

