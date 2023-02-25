const path = require('path');
module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js",
        about: "./src/about.js",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name]_bundle.js"
    },
    // loader
    module:{
        rules:[
            {
                // file내 .css 파일 검출
                test: /\.css$/,
                use: [
                    // 이러한 loader를 통과 시켜 실행, 중요 -> 뒤쪽의 loader가 먼저 실행
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};