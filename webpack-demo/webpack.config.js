var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
    context:'/Users/daisy/private/webpack/webpack-demo',
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

          }
      ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            inject:"body"
        })

    ]
}
