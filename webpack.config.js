const path = require('path');

module.exports = {
    entry: './src/entry.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, 'built')
    },
    externals : {
        lodash : {
            commonjs: 'lodash',
            amd: 'lodash',
            root: '_' // indicates global variable
        }
    },
};