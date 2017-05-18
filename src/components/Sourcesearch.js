import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sources from './Sources';
import SearchInput, { createFilter } from 'react-search-input';
import Axios from 'axios';

const KEY_TO_FILTERS = ['sources.name'];

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            sources: [],
            searchTerm: ''
        };
    }
    componentDidMount() {
        Axios.get('https://newsapi.org/v1/sources')
            .then((result) => {
                console.log('getting result: ', result);
                this.setState({
                    sources: result.data.sources
                });
            });
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term });
    }

    render() {
        const filteredSources = this.state.sources.filter(createFilter(this.state.searchTerm, KEY_TO_FILTERS));
        return (
            <div>
                <SearchInput className="search-input" onChange={this.searchUpdated} />
            </div>
        );
    }

}
