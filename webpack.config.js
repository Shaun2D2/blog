const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'sass-loader',
                    'css-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
        })
    ],
    devServer: {
        contentBase: path.resolve('./dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}