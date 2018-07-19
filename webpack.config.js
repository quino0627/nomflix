const path = require("path");

module.exports = {
    entry : './index.js',
    mode : "development",
    output : {
        path : path.resolve(__dirname, "output"),
        // path.join과 path.resolve의 차이점
        //webpack uses absolute path
        filename : "awesome-output.js"
    }
};