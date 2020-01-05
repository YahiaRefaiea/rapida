import config from './config'
import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.config.base'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'

export default merge(baseConfig, {
  stats: 'minimal',
  devtool: 'inline-source-map',
  watch: true,

  // dev server configurations
  devServer: {
    clientLogLevel: 'silent',
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    inline: true,
    noInfo: true,
    port: config.port - 1
  },

  // plugins
  plugins: [
    // enable hot module replacement (HMR)
    new webpack.HotModuleReplacementPlugin(),

    // enable browser sync
    new BrowserSyncPlugin({
      ui: false,
      host: config.host,
      port: config.port,
      proxy: `${config.host}:${config.port - 1}`,
      files: [{
        match: [
          '**/*.pug'
        ],
        fn: function(event, file) {
          if(event === 'change') {
            const bs = require('browser-sync').get('bs-webpack-plugin')
            bs.reload()
          }
        }
      }]
    }, {reload: false})
  ]
})
