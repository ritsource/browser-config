/* eslint-disable */
const path = require('path');

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};

module.exports = [
  {
    ...config,
    output: {
      filename: 'content-script.js',
      path: path.resolve(__dirname, 'chrome', 'build')
    }
  },
  {
    ...config,
    output: {
      filename: 'content-script.js',
      path: path.resolve(__dirname, 'firefox', 'build')
    }
  }
];
