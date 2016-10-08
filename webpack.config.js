var path = require("path");

var DEV_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
    entry: DEV_DIR + '/main.js',
    output: {
        filename: BUILD_DIR + '/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: DEV_DIR,
                test: /\.jsx?$/,
                query: {
                     presets: ['es2015', 'react'],
                }
            }
        ]
    }
};

module.exports = config;