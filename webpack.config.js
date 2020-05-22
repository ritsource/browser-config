/* eslint-disable */
const path = require('path');

const ChromeBuildDir = path.resolve(
  __dirname,
  'extensions',
  'master',
  'chrome',
  'build'
);
const FirefoxBuildDir = path.resolve(
  __dirname,
  'extensions',
  'master',
  'firefox',
  'build'
);

const ApplicationsDir = path.resolve(__dirname, 'applications');

const base_config = {
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

function get_duckduckgo_results_navigator_config(build_dir) {
  return {
    entry: {
      index: path.resolve(
        ApplicationsDir,
        'duckduckgo-results-navigator',
        'index.ts'
      ),
      'content-script': path.resolve(
        ApplicationsDir,
        'duckduckgo-results-navigator',
        'content-script.ts'
      )
    },
    output: {
      filename: '[name].js',
      path: path.resolve(build_dir, 'duckduckgo-results-navigator')
    }
  };
}

module.exports = [
  {
    ...base_config,
    ...get_duckduckgo_results_navigator_config(ChromeBuildDir)
  },
  {
    ...base_config,
    ...get_duckduckgo_results_navigator_config(FirefoxBuildDir)
  }
];
