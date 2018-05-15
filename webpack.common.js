const path = require('path');
const webpack = require('webpack');
const bundlePath = path.resolve(__dirname,'/dist/');

module.exports = {
  entry:'./src/index.js',// tells Webpack where our application starts and where to start bundling our files
  module:{//loader 加载
    rules:[
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
    },
    {
      test:/\.(png|jpg|gif)$/,
      use:[
        {
          loader:'file-loader',
          options:{
            name:'[name].[ext]',
            publicPath: 'assets/',
            outputPath: 'images/'
          }
        }
      ]
    }

    ]
  },
  resolve:{ extensions:['*','.js','.jsx']},//告诉webpack加载这些文件的时候不需要填写后缀
  output:{
    publicPath:bundlePath,
    filename:'bundle.js'//输出属性告诉Webpack将我们的捆绑代码放在哪里。 publicPath属性指定了该软件包应该进入的目录，并且还告诉webpack-dev-server从哪里提供文件。
  },
  plugins:[
   
  ]
}