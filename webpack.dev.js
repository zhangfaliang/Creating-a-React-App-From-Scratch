const merge = require('webpack-merge');
const devServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');


module.exports = merge(common,{
  mode:'development',
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port:'4000'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),//最后，由于我们要使用热模块更换，因此我们不必不断刷新以查看我们的更改。我们所做的就是在plugins属性中实例化插件的新实例。
  ],
})