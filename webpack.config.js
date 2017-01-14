var webpack = require('webpack');



module.exports = {


    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' }
        ]
    },
    
};
