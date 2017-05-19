import React from 'react';
import Axios from 'axios';

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
      < div className="articles col-lg-8"> 
        <h3>Articles</h3>
        <div className="row">
        {this.state.articles.map((articles, index) => (
          <div className="col-lg-4" key={index}>
            <div className="card-block" style={{ height: '380' }}>
              <img className="card-text" src={articles.urlToImage} style={{ width: '250', height: '250' }} />
              <a className="card-footer" href={articles.url} target="_blank">{articles.title}</a>
            </div>
          </div>
        ))
        }
        </div>
      </div >
    );
  }
};

