const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: { minimize: false },
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // Provide path to the file with resources
              resources: './src/resources.scss',

              // Or array of paths
              // eslint-disable-next-line no-dupe-keys
              resources: [
                './src/styles/vars.scss',
                './src/styles/mixins.scss',
                './src/styles/functions.scss',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets'),
        },
      ],
    }),
  ],
  mode: 'development',
  devServer: {
    compress: true,
    port: 8080,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};
