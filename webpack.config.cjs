const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            title: 'Weather',
        },
        new MiniCssExtractPlugin())
    ],
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
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
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
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"],
    }
}