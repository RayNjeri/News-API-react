import React from 'react';
import ReactDOM from 'react-dom';
import Sources from './Sources'

export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <span className="sources"><Sources /></span>
                <span>
                    <div className="filter"><filter /> </div>
                    <div className="subContent"><subContent /></div>
                </span>
            </div>
        );
    }
}
