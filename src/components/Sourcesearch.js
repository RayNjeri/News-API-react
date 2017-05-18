import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import Sources from './Sources';


const KEY_TO_FILTERS = ['sources.name'];

export default class Search extends Component {
    getInitialState() {
        return { searchTerm: '' };
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
    searchUpdated(term) {
        this.setState({ searchTerm: term });
    }
}

