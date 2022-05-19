const path = require("path")

module.exports = {
  // 打包入口
  entry: "./src/main.js",
  // 打包后存放位置和资源包文件名
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        // 正则匹配样式文件
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "img/[name]_[hash:8].[ext]",
            esModule: false
          }
        },
        type: 'javascript/auto'
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       name: "img/[name]_[hash:8].[ext]",
      //       limit: 30 * 1024,
      //       esModule: false
      //     }
      //   },
      //   type: 'javascript/auto'
      // },
    ]
  }
}