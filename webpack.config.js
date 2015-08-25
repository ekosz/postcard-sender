var path = require('path');
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var isDev = (process.argv[1] || '').indexOf('webpack-dev-server') !== -1;
var entry = path.resolve('./client');
var hostname = process.env.HOSTNAME || 'localhost';
var port = Number(process.env.DEVPORT || 8080);
var urlLoaderLimit = Number(process.env.URLLOADERLIMIT || 10000);

var output = {
  path: path.join(__dirname, '/dist/'),
  filename: 'app.js',
  publicPath: '/dist/'
};

var defaultLoaders = [
  {
    test: /\.json$/,
    exclude: /node_modules/,
    loader: 'json'
  },
  {
    test: /\.(otf|eot|svg|ttf|woff)/,
    loader: 'url-loader?limit=' + urlLoaderLimit
  }, {
    test: /\.(jpe?g|png|gif)/,
    loader: 'url-loader?limit=' + urlLoaderLimit
  }
];

var devConfig = {
  devtool: 'eval-source-map',

  entry: [
    entry,
    'webpack-dev-server/client?http://' + hostname + ':' + port,
    'webpack/hot/only-dev-server'
  ],

  output: output,

  devServer: {
    proxy: {
      '*': 'http://localhost:' + (process.env.PORT || 3000)
    }
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader',
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!postcss-loader'
    }].concat(defaultLoaders)
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')}
    })
  ]
}

var prodConfig = {
  entry: [ entry ],

  output: output,

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
    }].concat(defaultLoaders)
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ]
}

module.exports = isDev ? devConfig : prodConfig;
