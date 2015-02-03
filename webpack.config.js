var webpack = require('webpack');


var plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })
];

if (process.env.COMPRESS) {

    plugins.push(

        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    );
}

module.exports = {

    output: {
        library: 'Containers',
        libraryTarget: 'umd2'
    },

    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        }
    },

    node: {
        buffer: false
    },

    plugins: plugins,

    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' }
        ]
    }

};
