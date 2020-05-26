const webpack = require('webpack');

module.exports = {
  // devtool: 'source-map',
  entry: {
    filename: './app.js',
  },
  output: {
    filename: './build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
