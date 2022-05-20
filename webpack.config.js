const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  // 打包入口
  entry: "./src/main.js",
  // mode: 'development',
  // 打包后存放位置和资源包文件名
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: 'img/[name]_[hash:8][ext]'
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
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       // name: "img/[name]_[hash:8].[ext]",
      //       name: "[name]_[hash:8].[ext]",
      //       esModule: false,
      //       outputPath: "img"
      //     }
      //   },
      //   type: 'javascript/auto'
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       name: "img/[name]_[hash:8].[ext]",
      //       limit: 100 * 1024,
      //       esModule: false
      //     }
      //   },
      //   type: 'javascript/auto'
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'img/[name]_[hash:8][ext]'
      //   }
      // }
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:8][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      {
        test: /\.(ttf|woff2?|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:8][ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'learn-webpack项目',
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
}