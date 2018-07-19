const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
    output: path.resolve(__dirname, "../dist"),
}

module.exports = {
    // entry: './index.js',
    mode: "production",
    output: {
        path: path.resolve(__dirname, "../dist"),
        // path.join과 path.resolve의 차이점
        //webpack uses absolute path
        filename: "[name].js"
    },
    plugins: [new CleanWebpackPlugin(PATHS.output, { root: process.cwd() })]
};