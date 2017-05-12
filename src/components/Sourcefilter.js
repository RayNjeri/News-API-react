import React, { Component } from 'react';
import ReactTestUtils from 'react-dom/test-utils';


export default class Filter extends Component {
    render() {
        return (
            <div className="Dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle">Filter By <b class="caret"></b></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Country</a></li>
                    <li><a href="#">Language</a></li>
                    <li><a href="#">Category</a></li>
                </ul>
            </div>
        );
    }
}




