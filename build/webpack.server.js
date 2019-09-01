const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const serverConfig = {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  entry: {
    app: path.resolve(__dirname, '../src/server/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    path: path.resolve(__dirname, '../dist')
  }
};

module.exports = merge(baseConfig, serverConfig);
