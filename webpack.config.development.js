import path from 'path'
import webpack from 'webpack'
import baseConfig from './webpack.config.base'

export default {
  ...baseConfig,

  debug: true,

  devtool: 'cheap-module-eval-source-map',

  entry: {
    entry: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      './app/entry.js'
    ],
    quick: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      './app/quick.js'
    ]
  },
  module: {
    ...baseConfig.module
  },
  output: {
    ...baseConfig.output,
    publicPath: 'http://localhost:3000/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ]
};
