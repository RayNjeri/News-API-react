import React from 'react';
import Sources from './Sources';
import Articles from './Articles';
import Search from './Sourcesearch';

export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-md-2" ><Sources /></div>
                    <div className="col-md-8"><Articles /></div>
                    <div className="col-md-2"><Search /></div>
                </div>
            </div >
        );
    }
}

