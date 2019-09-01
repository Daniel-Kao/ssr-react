const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const clientConfig = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/client/client-entry.js')
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../public')
  }
};

module.exports = merge(baseConfig, clientConfig);
