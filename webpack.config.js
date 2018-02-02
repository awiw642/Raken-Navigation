const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client/dist');
const APP_DIR = path.resolve(__dirname, 'client/src');

module.exports = {
  context: APP_DIR,
  entry: ['webpack-hot-middleware/client?reload=true', './index.jsx'],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
}