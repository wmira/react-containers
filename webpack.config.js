const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]        
    },

    devServer: {
        inline: true        
    }
};