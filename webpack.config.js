const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
    mode,
    target: 'web',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'public'),
        clean: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test:  /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /\.tsx?$/,
              loader: "ts-loader",
              exclude: /node_modules/, },
            { test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(c|s[ac])ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource' 
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        liveReload: false,
        open: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            title: 'Weather',
        }),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
}