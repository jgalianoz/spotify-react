const fs = require('fs');
const path = require('path');


const nodeModules = fs
  .readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .reduce(
    (modules, module) => Object.assign(modules, { [module]: `commonjs ${module}` }),
    {}
  );

const config = {
  entry: './src/server.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../built/server'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'template-string-loader',
      },
      {
        enforce: 'post',
        test: /\.html$/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-es2015-template-literals'],
        },
      },
      {
        test: /\.json$/,
        loader: 'raw-loader',
      },
    ]
  },
  target: 'node',
  externals: nodeModules,
}

module.exports = config;
