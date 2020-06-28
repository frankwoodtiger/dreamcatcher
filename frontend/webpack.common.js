const path = require('path');
const resourcePath = path.resolve(__dirname, '../backend/src/main/resources/static');
const webpack = require("webpack");

module.exports = {
    mode: 'none',
    entry: './src/js/index.js',
    output: {
        filename: 'app.js',
        path: resourcePath + '/js'
    }
};