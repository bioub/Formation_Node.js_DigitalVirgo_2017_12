const path = require('path');
const webpack = require('webpack');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Exercice 1 :
// Installer clean-webpack-plugin pour supprimer le dossier dist
// Exercice 2 :
// Installer json5-loader

module.exports = (env, options) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['commons', 'mainHorloge'],
    }),
    new HtmlWebpackPlugin({
      template: './src/random.html',
      filename: 'random.html',
      chunks: ['commons', 'mainRandom'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
    }),
  ];

  if (!options.host) { // webpack-dev-server
    plugins.push(new CleanWebpackPlugin('dist'));
  }

  if (env === 'prod') {
    plugins.push(new UglifyJSWebpackPlugin());
  }

  return {
    entry: {
      mainHorloge: './src/js/index.js',
      mainRandom: './src/js/index-random.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
    },
    devtool: env !== 'prod' ? 'source-map' : false,
    plugins,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['env', {
                targets: {
                  browsers: ['IE 11', 'Chrome 62']
                }
              }]]
            }
          }
        },
        {
          test: /\.json5$/,
          loader: 'json5-loader',
        }
      ]
    },
  };
};
