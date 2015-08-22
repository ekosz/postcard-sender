import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../shared/reducers';
import Root from '../shared/components';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

React.render(
  <Provider store={store}>
    {() => <Root />}
  </Provider>,
  document.getElementById('react-view')
);
