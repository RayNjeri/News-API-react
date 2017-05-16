import React from 'react';
import ReactDOM from 'react-dom';
import Sources from './Sources';
import Articles from './Articles';


export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="sidenav"><Sources /></div>
                    <div className="subcontent"><Articles /></div>
                </div>
            </div >
        );
    }
}

