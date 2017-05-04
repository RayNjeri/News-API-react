import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Content from './Content.js';
import Sources from './Sources.js';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="headers"><Header /></div>
                <div className="content"><Content /></div>
                <div className="footer">Footer</div>
            </div>
        );
    }
}

/*class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} />
            </form>
        );
    }
}*/

