import React from 'react';
import ReactDOM from 'react-dom';
import Sources from './Sources';
import Articles from './Articles';
import Filter from './Sourcefilter';

export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <span>
                    <span className="filter"><Filter /> </span>
                    <span className="sidenav"><Sources /></span>
                    <span className="subcontent"><Articles /></span>
                </span>
            </div>
        );
    }
}

