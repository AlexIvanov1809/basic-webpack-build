const { inDev } = require('./webpack.helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    // Typescript loader
    test: /\.(ts|tsx)$/,
    exclude: /(node_modules|\.webpack)/,
    use: [
      'babel-loader',
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader,
        options: {},
      },
      'css-loader',
      'sass-loader',
    ],
  },
  {
    // Less loader
    test: /\.less$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'less-loader' },
    ],
  },
  {
    // Assets loader
    // More information here https://webpack.js.org/guides/asset-modules/
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset',
    generator: {
      filename: 'assets/[hash][ext][query]',
    },
  },
];
