import React from 'react';
import Axios from 'axios';
import Sources from './Sources';
import Search from './Sourcesearch';
import ArticlesRender from './ArticlesRender';

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  renderArticles() {
    let url = `https://newsapi.org/v1/articles?source=abc-news-au&apiKey=3e94e65c70b047a3971837eb342fff8b`;
    Axios.get(url).then(result => {
      this.setState({
        articles: result.data.articles
      });
    });
  }
  componentDidMount() {
    this.renderArticles();
  }

  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="col-lg-2">
            <Sources />
          </div>
          {this.props.children ? (
            this.props.children
          ) : (
            <ArticlesRender articles={this.state.articles} />
          )}
          <div className="col-lg-2">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}
