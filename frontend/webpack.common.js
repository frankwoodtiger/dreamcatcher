const path = require('path');
const resourcePath = path.resolve(__dirname, '../backend/src/main/resources/static');

module.exports = {
    mode: 'none',
    devtool: 'inline-source-map',
    entry: './src/js/index.js',
    output: {
        filename: 'app.js',
        path: resourcePath + '/js'
    },
    module: {
        // For loader order: see https://stackoverflow.com/questions/32234329/what-is-the-loader-order-for-webpack
        // Rules are evaluated in the  order from right to left.
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",   // babel preset env for compiling modern JS down to ES5
                            "@babel/preset-react"  // babel preset react for compiling JSX and other stuff down to JS
                        ]
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
                // other configuration is defined in .eslintrc.json
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    // add style tag to page when there is import statement
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader'
                ],
            }
        ]
    }
};