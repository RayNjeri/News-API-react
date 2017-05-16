import React, { Component } from 'react';
import Sources from './Sources';


const FILTERS = {
    country: {
        au: 'au',
        de: 'de',
        us: 'us'
    },
    language: {
        en: 'en',
        de: 'de',
        fr: 'fr'
    },
    category: {
        business: 'business',
        entertainment: 'entertainment',
        gaming: 'gaming',
        general: ' general',
        music: 'music',
        politics: 'politics',
        science_and_nature: 'science-and-nature',
        sport: 'sport',
        technology: 'technology'
    }
};

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: {
                sources: []
            },
            articles: [],
            currentFilter: {
                filterKey: 'language',
                filterValue: 'en',
            },
            filters: FILTERS
        };
    }

    handleFilterChange(event) {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            currentFilter: {
                prevState, currentFilter,
                [name]: value
            }
        }));
    }

    render() {
        const {
            filters,
            sources: { sources },
            currentFilter: {
                filterKey,
                filterValue
            }
        } = this.state;

        const sourcesToDisplay = sources.filter(source => {
            return source[filterKey] === filterValue;
        });

        return (
            <div className="container">
                <select
                    className="form-control c-select mb-2"
                    name="filterKey"
                    onChange={this.handleFilterChange}
                    defaultValue={filterKey}
                >
                    {Object.keys(filters).map(key => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                <select
                    className="form-control c-select"
                    name="filterValue"
                    onChange={this.handleFilterChange}
                    defaultValue={filterValue}
                >
                    {Object.keys(filters[filterKey]).map(key => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                <div className="row">
                    {sourcesToDisplay.map(source => (
                        <div className="card col-xs-12 col-sm-6 col-md-4 m-2" key={source.id}>
                            <div className="card-block">
                                <h4 className="card-title">{source.name}</h4>
                                <p className="card-text">{source.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}





