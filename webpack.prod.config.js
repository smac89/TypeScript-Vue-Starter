const path = require('path');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[chunkhash].js',
    hashDigestLength: 24
  },
  plugins: [
    new ChunkManifestPlugin({
      filename: 'manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    }),
  ],
  optimization: {
    minimize: true,
    //https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0
    splitChunks: {
      cacheGroups: {
        vue: {
          test: (module, chunks) => {
            if (module.depth < 1) {
              return false;
            }
            /*
            "dependencies","blocks","variables","type","context","debugId",
            "hash","renderedHash","resolveOptions","factoryMeta","warnings",
            "errors","buildMeta","buildInfo","reasons","_chunks","id","index",
            "index2","depth","issuer","profile","prefetched","built","used",
            "usedExports","optimizationBailout","_rewriteChunkInReasons",
            "useSourceMap","_source","request","userRequest","rawRequest",
            "binary","parser","generator","resource","matchResource","loaders",
            "error","_buildHash","buildTimestamp","_cachedSources","lineToLine",
            "_lastSuccessfulBuildMeta","_ast"
             */
            console.log("Test: " + JSON.stringify(module.request));
            return true;
          },
          chunks: 'initial',
          enforce: true,
          minChunks: 2,
          maxInitialRequests: 5,
        },
      }
    },
  }
};
