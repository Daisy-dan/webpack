var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/script/main.js",
        a: "./src/script/a.js",
        b: "./src/script/b.js"
    },
    output: {
        path: "./dist/js",
        filename: "js/[name]-[chunkhash].js",
        publicPath:"http://cdn.com/"
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index-[hash].html",
            template: "index.html",
            inject:"body",
            title: "webpack is good ALL",
            chunks:["main","a","b"],
            date: new Date()
            // minify:{
            //     removeComments: true,
            //     collapseWhitespace:true
            // },

        }),
        new htmlWebpackPlugin({
            filename: "a.html",
            template: "index.html",
            inject:"body",
            title: "webpack is good A",
            chunks:["main","a"]
        }),
        new htmlWebpackPlugin({
            filename: "b.html",
            template: "index.html",
            inject:"body",
            title: "webpack is good B",
            chunks:["main","b"]

        })
    ]
}
