import fs from 'fs';
import { minify } from 'html-minifier';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import Location from 'react-router/lib/Location';
import routes from '../shared/routes';
import * as reducers from '../shared/reducers';

const criticalCSS = fs.readFileSync('./node_modules/basscss/css/basscss.min.css', 'utf8');
const loadCSS = fs.readFileSync('./server/loadCSS.js', 'utf8');

export default function(req, res) {
  const location = new Location(req.path, req.query);
  const reducer = combineReducers(reducers);
  const store = createStore(reducer);

  Router.run(routes, location, (err, routeState) => {
    if (err) return console.error(err);
    if (!routeState) return res.status(404).end('404');

    const InitialComponent = (
      <Provider store={store}>
        {() =>
          <Router {...routeState} />
        }
      </Provider>
    );
    const componentHTML = React.renderToString(InitialComponent);
    const initialState = store.getState();

    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Postcards</title>
        <style>${criticalCSS}</style>
        <script>
          ${loadCSS}
           loadCSS("/dist/app.css");
        </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script type="application/javascript" src="/dist/app.js"></script>
      </body>
    </html>
    `;

    res.end(minify(HTML, {collapseWhitespace: true, minifyJS: true}));
  });
}
