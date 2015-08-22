import express from 'express';
import reactServer from './react-server';
const app = express();

app.use(reactServer);

export default app;
