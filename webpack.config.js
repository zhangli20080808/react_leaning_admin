const path              = require('path');
const webpack           = require('webpack');
// 该插件将为您生成一个HTML5文件，其中包括使用script标签的body中的所有webpack包 dist目录下面多了一个html文件
// 我们如何生成自己定义个html呢  传递参数
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 对react做处理 babel-preset-react@6.24.1
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 它会将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。因此，你的样式将不再内嵌到 JS bundle 中，而是会放到一个单独的 CSS 文件（即 styles.css）当中。 如果你的样式文件大小较大，这会做更快提前加载，因为 CSS bundle 会跟 JS bundle 并行加载。

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/app.js'
    },
    // 在 webpack 配置对象中，需要添加 babel-loader 到 module 的 loaders 列表中
    module: {
        rules: [
          {
            test: /\.jsx$/,
            // 忽略文件
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                //   这个地方的dev是会根据环境来进行自动打包 增加一个react
                presets: ['env','react']
              }
            }
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          },
        //   sass依赖node-sass
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader",'sass-loader']
            })
          },
        //   url-loader 0.6.2 依赖file-loader 1.1.6
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: 'resource/[name].[ext]'
                }
              }
            ]
          },
          //字体图标的配置
          {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }        
            ]
          }                                            
        ]
      },    
    plugins: [
        // 处理html文件
        new HtmlWebpackPlugin({
             template: './src/index.html'
        }),
        new ExtractTextPlugin('css/[name].css'),
        // 提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js' 
        })
    ],
    devServer:{
        port: 9000
    }
}