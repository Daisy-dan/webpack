var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

module.exports = {
    context:__dirname,
    entry: './src/app.js',
    output: {
        path: "./dist",
        filename: "js/[name].bundle.js"
    },
    module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              include: path.resolve(__dirname,'src'),
              exclude: path.resolve(__dirname,'node_modules'),
              query: {
                  presets: ['latest']
              }

          },
          {
              test: /\.html$/,
              loader: 'html-loader'
          },
          {
              test: /\.ejs$/,
              loader: 'ejs-loader'
          },
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
          },
          {
              test: /\.less$/,
              loader: 'style-loader!css-loader!postcss-loader!less-loader'
          },
          {
              test: /\.scss$/,
              loader: 'style-loader!css-loader!postcss-loader!sass-loader'
          },
          {
              test: /\.(png|jpg|gif|svg)$/i,
              loaders: [
                  'url-loader?limit=20000&name=images/[name]-[hash:5].[ext]',
                  'image-webpack-loader'
              ],

          }
      ]
    },

    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            inject:"body"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('autoprefixer')({
                        browsers: ['last 5 versions']
                    })
                ]
            }
        })

    ]
}
