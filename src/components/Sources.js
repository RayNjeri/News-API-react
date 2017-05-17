import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

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

export default class Sources extends Component {
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
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }
    componentDidMount() {
        Axios
            .get('https://newsapi.org/v1/sources')
            .then(({ data }) => {
                this.setState((prevState) => ({
                    sources: data
                }));
            });
    }

    handleFilterChange(event) {
        const { name, value } = event.target;

        this.setState((prevState) => {
            const newFilter = Object.assign({}, prevState.currentFilter, {
                [name]: value
            });
            return Object.assign({}, prevState, {
                currentFilter: newFilter
            });
        });
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
                    style={{ width: '20%' }}
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
                    style={{ width: '20%' }}
                    onChange={this.handleFilterChange}
                    defaultValue={filterValue}
                >
                    {Object.keys(filters[filterKey]).map(key => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                <div className="col-md-2">
                    <h2>SOURCES</h2>
                    {sourcesToDisplay.map(source => (
                        <div className="card col-xs-12 col-sm-6 col-md-12 m-2" key={source.id}>
                            <div className="card-block">
                                <h4 className="card-title"><a href={source.url} target="_blank">{source.name}</a></h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        );
    }
}



