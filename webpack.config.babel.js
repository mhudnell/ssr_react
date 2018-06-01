import nodeExternals from 'webpack-node-externals'
const path = require('path');

module.exports = {
  target: 'node',

  // externals: [nodeExternals()], //{ whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i] }

  // {
  //   // load non-javascript files with extensions, presumably via loaders
  //   whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  // }

  entry: './src/accordion.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },

  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     use: {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: [
    //           ['env', {
    //             'targets': {
    //               'node': 'current'
    //             }
    //           }]
    //         ]
    //       }
    //     }
    //   },
    //   {
    //     test: /\.(eot|svg|ttf|woff|woff2)$/,
    //     use: {
    //       loader: "file-loader",
    //       options: {
    //         name: "fonts/[name].[ext]"
    //       }
    //     }
    //   }
    // ]
    rules: [
        {
          test: /\.js?$/,
          include: /src/,
          exclude: /shared-components/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {
                  'targets': {
                    'node': 'current'
                  }
                }], 'es2015', 'react'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: 'cat__[local]_[path]',
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.(jpg|jpeg|png|webp|ico)$/,
          use: 'file-loader',
        },
        {
          test: /\.(svg|woff|woff2|eot|otf|ttf)$/,
          use: 'file-loader',
        },
      ]
  }
}
