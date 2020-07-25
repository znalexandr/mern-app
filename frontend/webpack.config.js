const path = require('path');
const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const argv = require('yargs').argv;

function getArgValue(param) {
  const value = argv[param];
  return Array.isArray(value) ? value[value.length - 1] : value;
}

const { NODE_ENV } = process.env;

const PUBLIC_PATH = getArgValue('PUBLIC_PATH');
const API_URL = getArgValue('API_URL');
const BUNDLE_ANALYZER = getArgValue('BUNDLE_ANALYZER');

const STATIC_PATH = path.resolve(__dirname, 'src/static');
const BUILD_PATH = path.resolve(__dirname, 'build');

const isProd = NODE_ENV === 'production';

module.exports = function exports() {
  const plugins = [
    new HtmlPlugin({
      template: './src/static/index.html',
      favicon: './src/static/favicon.ico'
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new IgnoreNotFoundExportPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.PUBLIC_PATH': JSON.stringify(PUBLIC_PATH),
      'process.env.API_URL': JSON.stringify(API_URL)
    })
  ];

  if (NODE_ENV === 'development') {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (BUNDLE_ANALYZER) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: 'localhost',
        analyzerPort: 8010
      })
    );
  }

  const resolveAlias = {
    '@': path.resolve(__dirname, 'src')
  };

  return {
    mode: NODE_ENV,
    entry: './src/index.tsx',
    output: {
      path: BUILD_PATH,
      publicPath: PUBLIC_PATH,
      filename: '[name].[hash].js',
      hashDigestLength: 6
    },
    resolve: {
      alias: resolveAlias,
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.css?$/,
          include: path.resolve(__dirname, 'node_modules'),
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.tsx?$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader'
        },
        {
          test: /\.(woff2?|jpg|png)$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'file-loader'
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        }
      ]
    },
    plugins,
    devtool: isProd ? 'none' : 'source-map',
    devServer: {
      port: 8000,
      historyApiFallback: true,
      compress: true,
      clientLogLevel: 'silent',

      stats: {
        chunks: false,
        modules: false,
        assets: false
      }
    },
    stats: false
  };
};
