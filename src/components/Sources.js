import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Axios from 'axios';

export default class Sources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: [],
        }
    }

    componentDidMount() {
        Axios.get('https://newsapi.org/v1/sources?language=en')
            .then((result) => {
                console.log('getting result: ', result);
                this.setState({
                    sources: result.data.sources
                });
            })
    }
    render() {
        return (
            < div >
                <h2>SOURCES</h2>
                {this.state.sources.map((sources) => (
                    <div>
                        <div>{sources.name}</div>
                        {/*<div>{sources.description}</div>*/}
                    </div>
                ))
                }
            </div >
        );
    }
};

