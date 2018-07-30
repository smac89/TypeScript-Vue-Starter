const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: {
    main: '@/index.ts'
  },
  performance: {
    hints: "warning"
  },

  plugins: [
    new CleanWebpackPlugin(['dist/**/*.js'], {
      verbose: true
    }),
    new webpack.WatchIgnorePlugin([
      /\.js$/,
      /\.d\.ts$/
    ]),
    new HtmlWebpackPlugin({
      title: "Pharmasave Store",
      template: 'index.ejs',
      inject: false,
      xhtml: true,
      minify: true,
    }),
  ],
};

// module.exports = (env, argv) => {
module.exports = () => {
  let envConfig = {};
  switch (process.env.APP_ENV) {
    case 'prod':
      envConfig = require('./webpack.prod.config');
      break;
    case 'dev':
      envConfig = require('./webpack.dev.config');
      break;
  }

  const baseConfig = require('./webpack.base.config');
  return require('webpack-merge')(baseConfig, config, envConfig);
};
