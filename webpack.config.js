const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        //webpack-dev-server won't output file to disk, but serve them from 'publicPath' in memory.
        //and these in-memory files will be prior to on-disk ones.
        publicPath: '/dist',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, 
                loader: "file-loader"
            }
        ]
    },
    devServer: {
        hot: true
    }
};