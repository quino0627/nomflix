//for developing
const path = require("path");

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    }
};

//여기에다가 숙제하기!