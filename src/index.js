import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import configStore from './store/config_store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Description from './components/description';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path=":id" component={Description} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
