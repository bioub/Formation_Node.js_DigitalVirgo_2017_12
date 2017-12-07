const path = require('path');
const webpack = require('webpack');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Exercice 1 :
// Installer clean-webpack-plugin pour supprimer le dossier dist
// Exercice 2 :
// Installer json5-loader

module.exports = (env) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ];

  if (env === 'prod') {
    plugins.push(new UglifyJSWebpackPlugin());
  }

  return {
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[hash].js',
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
                  browsers: ['IE 11']
                }
              }]]
            }
          }
        }
      ]
    },
  };
};
