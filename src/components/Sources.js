import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Headline from './Headline';

import Axios from 'axios';

export default class Sources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: [],
        };
    }

    componentDidMount() {
        Axios.get('https://newsapi.org/v1/sources?language=en')
            .then((result) => {
                console.log('getting result: ', result);
                this.setState({
                    sources: result.data.sources
                });
            });
    }
    render() {
        return (
            < div >
                <h2>SOURCES</h2>
                {this.state.sources.map((sources) => (
                    <div>
                        {/*<Router>
                            <Link to="/Headline" target="_blank">{sources.name}</Link>
                        </Router>*/}
                        <a href={sources.url}>{sources.name}</a>
                    </div>
                ))
                }
            </div >
        );
    }
};

