const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { GenerateSW } = require('workbox-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./client.common.js');

module.exports = webpackMerge(commonConfig, {
  entry: [
    '@babel/polyfill',
    './src/client/index.jsx',
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new GenerateSW({
      offlineGoogleAnalytics: true,
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://goalmag.herokuapp.com'),
          handler: 'staleWhileRevalidate',
        },
        {
          urlPattern: new RegExp('https://api.football-data.org/v2'),
          handler: 'staleWhileRevalidate',
        },
      ],
    }),
  ],
});
