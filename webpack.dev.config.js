const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    hashDigestLength: 24
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    compress: true,
    hotOnly: true
  },
  devtool: 'eval-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          minChunks: 2,
          chunks: "initial"
        }
      }
    }
  }
};
