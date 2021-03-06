import React from 'react';
import axios from 'axios';

export default class SourcesSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      search: 'Search'
    };
  }
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v1/sources?language=en`).then(result => {
      this.setState({
        sources: result.data.sources
      });
    });
  }

  render() {
    let found = this.state.sources.filter(sources => {
      return (
        sources.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });

    return (
      <div className="col-md-2" id="search">
        <input
          type="text"
          placeholder="Source Name"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          style={{ backgroundColor: '#d9d9d9' }}
          className="searchbox"
        />

        {found.map(sources => {
          return (
            <div className="search" key={sources.id}>
              <a href={sources.url}> {sources.name} </a>
            </div>
          );
        })}
      </div>
    );
  }
}
