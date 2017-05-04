import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';

ReactDOM.render(<Home />, document.getElementById('app'))

/*ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
        </Route>
    </Router>

), document.getElementById('app'))*/
