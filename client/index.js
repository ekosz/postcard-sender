import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from '../shared/middleware/promise';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import * as reducers from '../shared/reducers';
import Root from '../shared/components';

const reducer = combineReducers(reducers);

const finalCreateStore = compose(
  applyMiddleware(promiseMiddleware),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const store = finalCreateStore(reducer);

React.render(
  <div>
    <Provider store={store}>
      {() => <Root />}
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('react-view')
);
