const path = require('path');

const config = {
  entry: './src/app.jsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../built/statics'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['latest', 'react'],
        },
      },
    ]
  },
  target: 'web'
}

module.exports = config;
