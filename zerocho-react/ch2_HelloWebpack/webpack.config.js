const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'WordRelay-setting',
  mode: 'development',
  devtool: 'eval', // production에서는 hidden-source-map
  resolve: {
    extensions: ['.js', 'jsx'],
  },
  entry: {
    app: ['./client.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 5% in KR'],
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ], // plugins의 모음이 presets
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};
