import React from 'react';
import Sources from './Sources';
import Articles from './Articles';
import Search from './Sourcesearch';

export default class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="col-sm-4" ><Sources /></div>
          <div className="Search"><Search /></div>
          <div className="col-sm-8"><Articles /></div>
        </div>
      </div >
    );
  }
}

