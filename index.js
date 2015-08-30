'use strict';

require('babel/register')({});
var hook = require('css-modules-require-hook');

hook({
  use: [
    // adding CSS Next plugin
    require('cssnext')(),

    // adding basic css-modules plugins
    require('postcss-modules-extract-imports'),
    require('postcss-modules-local-by-default'),
    require('postcss-modules-scope')
  ]
});

var server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});
