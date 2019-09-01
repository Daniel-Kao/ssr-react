const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  entry: {
    app: path.resolve(__dirname, '../src/server/index.js')
  },
  output: {
    filename: 'server-entry.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
