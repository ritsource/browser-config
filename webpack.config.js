/* eslint-disable */
const path = require('path');

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

function get_duckduckgo_results_navigator_config() {
  const ContentScriptPath = path.resolve(
    __dirname,
    'extensions/duckduckgo-results-navigator/content-script.ts'
  );

  const ChromeBackground = path.resolve(
    __dirname,
    'extensions/duckduckgo-results-navigator/background.chrome.ts'
  );

  const FirefoxBackground = path.resolve(
    __dirname,
    'extensions/duckduckgo-results-navigator/background.firefox.ts'
  );

  return {
    entry: {
      'chrome/build/background': ChromeBackground,
      'firefox/build/background': FirefoxBackground,
      'chrome/build/content-script': ContentScriptPath,
      'firefox/build/content-script': ContentScriptPath
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'extensions/duckduckgo-results-navigator')
    }
  };
}

module.exports = [
  {
    ...base_config,
    ...get_duckduckgo_results_navigator_config()
  },
  {
    ...base_config,
    ...get_duckduckgo_results_navigator_config()
  }
];
