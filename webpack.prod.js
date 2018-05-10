const merge = require('webpack-merge');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const common = require('./webpack.common.js')

module.exports = merge(common,{
  mode:'production',
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-import')(),
                require('postcss-cssnext')(),
                require('autoprefixer')(),
                require('cssnano')()
              ]
            }
          }
        ]
      }
    ]
  },
  //When️当单独使用postcss-loader（不使用css-loader）时，不要在CSS中使用@import，因为这会导致相当臃肿的软件包
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  output:{
    filename:'[name].[chunkhash].js'
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].[chunkhash].css"
    }),
    
    new HTMLWebpackPlugin({
      title:'test html-webpack-plugin',
      template: 'src/index.html',
      minify: { collapseWhitespace: true },
      inject: true,
      production: true,
      favicon:''
    })
  ]
})