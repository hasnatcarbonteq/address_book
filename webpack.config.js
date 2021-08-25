const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    devServer:{
        port: 3000,
        watchContentBase: true,
        historyApiFallback: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader", // compiles Less to CSS
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    'primary-color': '#5B6BF4',
                                    'text-color-secondary': '#90F5D7',
                                    'error-color': '#FE3180' // error state color
                                },
                                javascriptEnabled: true,
                            },
                        }
                    },
                ],
            },
            {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        // Using file-loader for these files
                        loader: "file-loader",
                        // In options we can set different things like format
                        // and directory to save
                        options: {
                            name: "[path][name].[ext]",
                            outputPath: "images",
                        },
                    },
                ],
            },
        ],
        
    },
    plugins: [
        new Dotenv(),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
        new HtmlWebpackPlugin({
            title: "addressBook",
            template: "./src/index.html",
            chunks: ["app", "styles"],
        }),
    ]
}