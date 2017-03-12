const path = require('path');
const webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, './dist/assets');
var APP_DIR = path.resolve(__dirname, './src');

module.exports = {
  context: APP_DIR,
  entry: {
    app: './main.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      }
    ],
  },
};
