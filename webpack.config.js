const webpack = require('webpack');

module.exports = exports = {
  entry: {
    'sytabs': './src/js/sytabs.module.js',
    'sytabs.min': './src/js/sytabs.module.js'
  },
  output: {
    //path: __dirname +'/dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/angular/),
    new webpack.optimize.UglifyJsPlugin({minimize: true, include: /\.min\.js$/})
  ]
};
