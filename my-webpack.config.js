const path = require("path")

module.exports = {
  // 打包入口
  entry: "./src/main.js",
  // 打包后存放位置和资源包文件名
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  }
}