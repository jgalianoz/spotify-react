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
      {
        test: /\.json$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, { loader: 'css-loader' },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'web'
}

module.exports = config;
