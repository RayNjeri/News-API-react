import React from 'react';
import Axios from 'axios';

export default class Articles extends React.Component {
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
        {this.state.articles.map((articles, index) => (
          <div className="card col-xs-14 col-sm-10 col-md-8 m-14" key={index}>
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

