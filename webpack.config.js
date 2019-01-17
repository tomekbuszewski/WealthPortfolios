const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  mode: PROD ? 'production' : 'development',
  devtool: PROD ? 'none' : 'inline-source-map',
  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
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
    publicPath: '/public/',
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
    splitChunks: {
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
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
};
