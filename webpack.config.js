var getConfig = require('hjs-webpack');

module.exports = getConfig({
  // entry point for the app
  in: './client',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'dist',

  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: true,

  // Let the server generate this for us
  html: false,

  // Asset server port
  port: 8080,

  devServer: {
    proxy: {
      '*': 'http://localhost:' + (process.env.PORT || 3000)
    }
  },

  resolve: {
    alias: {
      // Workaround https://github.com/Reactive-Extensions/RxJS/issues/832, until it's fixed
      // 'rx$': <path to rx/dist/rx.js file >
    }
  }

});
