const path = require('path');

module.exports = {
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] }
        ]
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            'react-containers': path.resolve(__dirname, 'src')
        }
    },

    devServer: {
        inline: true
    }
};