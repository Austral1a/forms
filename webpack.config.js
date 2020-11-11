const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: './src/js/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.svg$/i,
                type: 'asset/resource'
            }
        ]
    }
};