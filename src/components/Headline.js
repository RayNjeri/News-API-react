import React from 'react';
import Request from 'react-http-request';

export default class Headline extends React.Component {
  render() {
    return (
      <Request url="https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=3e94e65c70b047a3971837eb342fff8b"
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({ error, result, loading }) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return <div>{JSON.stringify(result)}</div>;
            }
          }
        }
      </Request>
    );
  }
}

