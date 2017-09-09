import webpack from "webpack"

export default {
    entry: [
        "./src/main.js",
    ],
    output: {
        filename: "./dist/bundle.min.js", // name of the bundle to generate
    },
    module: {
        rules: [ // rules =  loaders in Webpack 1
            { 
                test: /\.js$/, // all .js files
                exclude: /node_modules/,  // except those in node_modules/
                use: "babel-loader" // use babel
            }
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({ // will minify our file
            compresse: {
                warnings: true
            },
            output: {
                comments: false
            },
            sourceMap: false
        })
    ],
    resolve: {
        extensions: [".js"],
    }
}