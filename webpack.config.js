'use strict'

const path = require('path')
const postcssNested = require('postcss-nested')
const publicPath = path.join(__dirname, './server/public')

module.exports = {
    name: 'client',

    mode: 'development',

    context: __dirname,

    entry: ['./client/app.js'],

    output: {
        path: publicPath,
        publicPath: '/',
        filename: 'js/client.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [postcssNested]
                        }
                    }
                ],
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'env']
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
    ],

    devtool: 'eval',

    devServer: {
        contentBase: publicPath,
        compress: true,
        port: 9000,
        historyApiFallback: true
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['client', 'node_modules']
    }
}
