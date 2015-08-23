import React from 'react';
import { Route } from 'react-router';
import Root from './components';
import PostcardsContainer from './containers/postcards-container';

export default (
  <Route component={Root}>
    <Route component={PostcardsContainer} path="/" />
  </Route>
);
