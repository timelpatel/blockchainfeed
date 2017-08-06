const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'src/public');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                use : 'babel-loader'
            },
            {
                test : /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    }
};

module.exports = config
