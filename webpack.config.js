// 引入path
const path = require("path");
// 引入html plugin
const HTMLWebpackPlugin = require("html-webpack-plugin");


// webpack 的配置都写在module.export中
module.exports = {

  // 设置模式
  mode: "development",

  // 设置入口
  entry: "./src/index.ts",


  // 设置出口
  output: {
    // 指定打包文件目录
    path: path.resolve(__dirname, 'dist'),
    // 指定打包文件名
    filename: "bundle.js"
  },


  // 指定webpack打包使用模块
  module:{

    // 指定要加载的规则
    rules: [
      {
        // test指定规则生效文件
        test:/\.ts$/,
        // 使用的loader
        use: [
          // 配置babel
          {
            // 指定loader
            loader: "babel-loader",
            // 设置babel
            options: {
              // 预定义环境
              presets:[
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 需要兼容的浏览器
                    "targets": {
                      "browsers": ["last 2 versions", "safari >= 7"]
                    },
                    "corejs": "3",
                    // 按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },

          'ts-loader'
        ],
        // 排除文件
        exclude: /node_moduels/
      },

      // 处理less文件
      {
        test: /\.less$/,
        use:[
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions:{
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers:'last 2 versions'
                    }
                  ]

                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },


  // 配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),

  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }

}

