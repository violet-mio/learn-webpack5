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
          'style-loader',
          'css-loader',
        ]
        // use: [
        //   { loader: 'style-loader' },
        //   { loader: 'css-loader' },
        // ]
        // loader: 'css-loader'
      },
      {
        // test: /\.(less|sass|scss)$/,
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}