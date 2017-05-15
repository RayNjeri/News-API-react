import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Axios from 'axios';

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        Axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=3e94e65c70b047a3971837eb342fff8b')
            .then((result) => {
                console.log('getting result: ', result);
                this.setState({
                    articles: result.data.articles
                });
            });
    }
    render() {
        return (
            < div >
                <h3>Articles</h3>
                {this.state.articles.map((articles) => (
                    <div>
                        {/*<Router>*/}
                        {/*<Link to={`/articles/${articles.url}`} activeClassName="current">{articles.title}</Link>*/}
                        {/*<div key={articles.title}>{articles.title}</div>*/}
                        {/*</Router>*/}
                        <a href={articles.url}>{articles.title}</a>
                    </div>
                ))
                }
            </div >
        );
    }
};

