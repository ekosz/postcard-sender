import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from '../shared/middleware/promise';
import { Provider } from 'react-redux';
import * as reducers from '../shared/reducers';
import Root from '../shared/components';

const reducer = combineReducers(reducers);
const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

React.render(
  <Provider store={store}>
    {() => <Root />}
  </Provider>,
  document.getElementById('react-view')
);
