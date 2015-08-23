import express from 'express';
import falcorMiddleware from 'falcor-express';

import PostcardRouter from './postcard-router';
import reactServer from './react-server';
const app = express();

app.use('/model.json', falcorMiddleware.dataSourceRoute(function(req, res) {
  return new PostcardRouter();
}));

app.use(reactServer);

export default app;
