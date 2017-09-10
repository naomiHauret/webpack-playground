import path from "path"
import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"

const extractCSS = new ExtractTextPlugin("[name].bundle.css")

export default {
    context: path.resolve(__dirname, "src"),
    entry: [
        "./main.js",
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/assets/",
        filename: "[name].bundle.min.js"
    },
    module: {
        rules: [ // rules =  loaders in Webpack 1
            {
                test: /\.js$/, // all .js files
                exclude: /node_modules/,  // except those in node_modules/
                use: "babel-loader" // use babel
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: { importLoaders: 1 },
                        },
                        "postcss-loader",
                    ],
                })
            }
        ]
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
        }),
        extractCSS
    ],
    resolve: {
        extensions: [".js"],
    }
}