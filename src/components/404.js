import React, { Component } from 'react';
import Link from 'react - routing';

export default class pageNotFound extends Component {
    render() {
        return (
            <div>
                <h1> PAGE NOT FOUND </h1>
                <p> Whoops! Content not found </p>
                <p><Link to='app'>Back to home</Link></p>
            </div >
        );
    }
}

