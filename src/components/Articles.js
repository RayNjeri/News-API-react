import React from 'react';
import Axios from 'axios';
import Articlesrender from './Articlesrender';

export default class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  renderArticles(sourceId, sortBy) {
    let url = `https://newsapi.org/v1/articles?source=${sourceId}&sortBy=${sortBy}&apiKey=3e94e65c70b047a3971837eb342fff8b`;
    Axios.get(url)
      .then((result) => {
        this.setState({
          articles: result.data.articles
        });
      });

  }
  componentDidMount() {
    this.renderArticles(this.props.params.sourceId, this.props.params.sortBy);
  };
  componentWillReceiveProps(nextProps) {
    this.renderArticles(nextProps.params.sourceId, nextProps.params.sortBy);
  }
  render() {
    return (
      <Articlesrender articles={this.state.articles} />
    );
  }
};

