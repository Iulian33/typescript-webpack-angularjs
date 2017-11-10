const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
    return {
        entry: {
            app: path.resolve(__dirname, 'src')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/,
                    enforce: 'pre'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    options: {
                        "presets": [
                            [
                                "es2015",
                                {
                                    "modules": false
                                }
                            ]
                        ]
                    }
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader'
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.json', '.ts', '.tsx']
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new CleanWebpackPlugin(['dist'], {
                root: path.resolve(__dirname),
                verbose: true
            })
        ],
        devServer: {
            contentBase: path.resolve(__dirname),
            inline: true,
            port: 3000
        }
    };
};