import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
            < div className="col-md-10">
                <h3>Articles</h3>
                {this.state.articles.map((articles) => (
                    <div className="card col-xs-12 col-sm-6 col-md-2 m-5">
                        <div>
                            <img src={articles.urlToImage} style={{ width: '100%' }} />
                            <a href={articles.url} target="_blank">{articles.title}</a>
                        </div>
                    </div>
                ))
                }
            </div >
        );
    }
};

