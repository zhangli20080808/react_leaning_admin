<!-- 需要处理的文件类型
html  html-webpack-plugin 
能够生成单个的html文件以外(html单独打包成文件)，还可以把对应的脚本和样式插入到合适的位置，不用我们手动再引入了，而且还能执行哈希的功能，防止再更新的时候有浏览器缓存

脚本  es6 react babel+babel-preset-react

样式 css-loader+sass-loader

图片字体  url-loader +file-loader

extract-text-webpack-plugin 样式单独打包成文件

CommonsChunkPlugin 把模块中的共用部分抽取出来 比如说一个js文件引用超过了3次 我们就放到这里

webpack-dev-server 为webpack项目提供web服务 这样我们就能从浏览器中通过http的方式去访问  稳定版本 2.9.7 还有就是更改代码自动刷新 做代理 路径转发

yarn add webpack-dev-server@2.9.7 --dev

解决多版本问题

 -->


·