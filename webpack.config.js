const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';
const ENV = PROD ? 'production' : 'development';

module.exports = {
  mode: PROD ? 'production' : 'development',
  devtool: PROD ? 'none' : 'inline-source-map',
  entry: {
    index: ['babel-polyfill', './src/index.js'],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@config': path.resolve('config'),
      '@src': path.resolve('src'),
      '@mocks': path.resolve('__mocks__'),
    },
  },
  output: {
    path: path.resolve('public', 'assets'),
    filename: PROD ? '[name].[hash].js' : '[name].js',
    hotUpdateChunkFilename: '.hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: '.hot/[hash].hot-update.json',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    minimize: PROD,
    nodeEnv: ENV,
    mergeDuplicateChunks: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      name: true,
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'templates', 'index.html'),
      filename: path.resolve('public', 'index.html'),
      minify: true,
      hash: true,
      inject: 'body',
      title: '',
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV),
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
};
