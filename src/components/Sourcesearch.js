import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sources from './Sources';
import SearchInput, { createFilter } from 'react-search-input';

const KEY_TO_FILTERS = ['sources.name'];

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            sources: [],
            searchTerm: ''
        };
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term });
    }
    render() {
        const filteredSources = sources.filter(createFilter(this.state.searchTerm, KEY_TO_FILTERS));
        return (
            <div>
                <SearchInput className="search-input" onChange={this.searchUpdated} />
                {filteredSources.map(sources => {
                    return (
                        <div className="from">{sources.name}</div>
                    );
                })}
            </div>
        );
    }

}
