const path = require('path')
const webpack = require('webpack')
const bundlePath = path.resolve(__dirname,'/dist/')

module.exports = {
  entry:'./src/index.js',// tells Webpack where our application starts and where to start bundling our files
  module:{//loader 加载
    rules:[

      {
        test: /\.js$/,
       // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
    },
      {//由于我们不是预处理或后处理CSS，因此我们只需确保将style-loader和css-loader添加到use属性。为了工作，css-loader需要style-loader。装载器是使用属性的简写，当只使用一个装载器时。
        test:/\.css/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }

    ]
  },
  resolve:{ extensions:['*','.js','.jsx']},//告诉webpack加载这些文件的时候不需要填写后缀
  output:{
    publicPath:bundlePath,
    filename:'bundle.js'//输出属性告诉Webpack将我们的捆绑代码放在哪里。 publicPath属性指定了该软件包应该进入的目录，并且还告诉webpack-dev-server从哪里提供文件。
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port:'4000'
  },
  plugins:[//最后，由于我们要使用热模块更换，因此我们不必不断刷新以查看我们的更改。我们所做的就是在plugins属性中实例化插件的新实例。
    new webpack.HotModuleReplacementPlugin(),
  ]
}