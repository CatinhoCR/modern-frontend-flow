const path = require("path");
const outputDir = path.resolve(__dirname, "dist/js");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/main.js"),
    devtool: "inline-source-map",
    output: {
        path: outputDir,
        filename: "main.js"
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    }
};